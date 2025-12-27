import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Tag, Button, Typography, Divider } from 'antd';
import { getPostById } from '../../api/mockData';
import './index.css';

const { Title, Text, Paragraph } = Typography;

const PostDetail = () => {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="post-detail-page">
        <div className="post-detail-container">
          <Card title="文章不存在" className="not-found-card">
            <Paragraph>抱歉，您访问的文章不存在或已被删除。</Paragraph>
            <Link to="/">
              <Button type="primary">返回首页</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  // 处理文章内容，将markdown代码块转换为带有样式的代码块
  const renderContent = () => {
    const content = post.content;
    // 处理代码块
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = content.split(codeBlockRegex);
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // 代码块
        return (
          <div key={index} className="code-block-container">
            <pre className="code-block">
              <code>{part}</code>
            </pre>
          </div>
        );
      } else {
        // 普通文本，按换行符分割为段落
        return part.split('\n\n').map((paragraph, pIndex) => (
          <Paragraph key={`${index}-${pIndex}`} className="post-detail-paragraph">
            {paragraph}
          </Paragraph>
        ));
      }
    });
  };

  return (
    <div className="post-detail-page">
      <div className="post-detail-container">
        <Card className="post-detail-card">
          <header className="post-detail-header">
            <Title level={1} className="post-detail-title">{post.title}</Title>
            <div className="post-detail-meta">
              <Text strong>{post.author}</Text>
              <Text className="post-meta-divider">|</Text>
              <Text>{post.date}</Text>
              <Text className="post-meta-divider">|</Text>
              <Tag color="blue">{post.category}</Tag>
            </div>
            <div className="post-detail-tags">
              {post.tags.map((tag, index) => (
                <Tag key={index} color="green" className="post-tag">
                  {tag}
                </Tag>
              ))}
            </div>
          </header>
          
          <Divider />
          
          <div className="post-detail-content">
            {renderContent()}
          </div>
          
          <Divider />
          
          <footer className="post-detail-footer">
            <div className="post-detail-stats">
              <Text className="post-stat">❤️ {post.likes}</Text>
              <Text className="post-stat-divider">|</Text>
              <Text className="post-stat">💬 {post.comments}</Text>
            </div>
          </footer>
        </Card>
        
        <div className="post-detail-actions">
          <Link to="/">
            <Button type="primary" className="back-button">返回首页</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;