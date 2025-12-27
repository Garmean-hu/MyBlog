import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">页面不存在</h2>
          <p className="not-found-message">
            抱歉，您访问的页面不存在或已被删除。
          </p>
          <Link to="/" className="not-found-link">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;