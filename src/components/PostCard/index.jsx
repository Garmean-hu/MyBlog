import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PostCard = ({ post }) => {
  // 截取文章摘要，最多显示200个字符
  const getExcerpt = (content) => {
    // 移除markdown格式
    const plainText = content.replace(/```[\s\S]*?```/g, '').replace(/#+\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '');
    // 截取前200个字符
    return plainText.length > 200 ? `${plainText.substring(0, 200)}...` : plainText;
  };

  return (
    <article className="post-card">
      <div className="post-card-header">
        <h2 className="post-card-title">
          <Link to={`/post/${post.id}`} className="post-card-link">
            {post.title}
          </Link>
        </h2>
        <div className="post-card-meta">
          <span className="post-card-author">{post.author}</span>
          <span className="post-card-date">{post.date}</span>
          <span className="post-card-category">{post.category}</span>
        </div>
      </div>
      <div className="post-card-content">
        <p>{getExcerpt(post.content)}</p>
      </div>
      <div className="post-card-footer">
        <div className="post-card-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="post-card-tag">
              #{tag}
            </span>
          ))}
        </div>
        <div className="post-card-stats">
          <span className="post-card-stat">
            ❤️ {post.likes}
          </span>
          <span className="post-card-stat">
            💬 {post.comments}
          </span>
        </div>
      </div>
      <div className="post-card-read-more">
        <Link to={`/post/${post.id}`} className="read-more-link">
          阅读全文 →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;