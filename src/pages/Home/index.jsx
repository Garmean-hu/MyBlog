import React, { useState } from 'react';
import { Card, Pagination, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api/mockData';
import './index.css';

const { Meta } = Card;

const Home = () => {
  // 获取文章并按日期降序排序，最新发布的显示在最前面
  const posts = getPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // 计算当前页显示的文章
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  // 处理分页变化
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 截取文章摘要，最多显示200个字符
  const getExcerpt = (content) => {
    // 移除markdown格式
    const plainText = content.replace(/```[\s\S]*?```/g, '').replace(/#+\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '');
    // 截取前200个字符
    return plainText.length > 200 ? `${plainText.substring(0, 200)}...` : plainText;
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">最近文章</h1>
        <div className="posts-list">
          {currentPosts.map(post => (
            <Card
              key={post.id}
              className="post-card"
              hoverable
              actions={[
                <Tag key="category" color="blue">{post.category}</Tag>,
                <span key="likes">❤️ {post.likes}</span>,
                <span key="comments">💬 {post.comments}</span>,
                <Link to={`/post/${post.id}`}>
                  <Button type="primary" size="small">阅读全文</Button>
                </Link>
              ]}
            >
              <Meta
                title={<Link to={`/post/${post.id}`} className="post-title-link">{post.title}</Link>}
                description={
                  <>
                    <div className="post-meta">
                      <span className="post-author">{post.author}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                    <p className="post-excerpt">{getExcerpt(post.content)}</p>
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <Tag key={index} color="green">{tag}</Tag>
                      ))}
                    </div>
                  </>
                }
              />
            </Card>
          ))}
        </div>
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={posts.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            showTotal={(total) => `共 ${total} 篇文章`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;