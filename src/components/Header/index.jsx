import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import './index.css';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            Garmean博客网
          </NavLink>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            首页
          </NavLink>
          <NavLink
            to="/archive"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            归档
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            关于
          </NavLink>
          <NavLink
            to="/write"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            写文章
          </NavLink>
          
          {/* 主题切换按钮 */}
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? '切换到深色主题' : '切换到浅色主题'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          {isAuthenticated ? (
            <div className="user-dropdown">
              <div className="user-dropdown-toggle">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="user-avatar" 
                />
                <span className="user-name">{user.name}</span>
              </div>
              <div className="user-dropdown-menu">
                <div className="user-dropdown-info">
                  <div className="user-dropdown-avatar">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  <div>
                    <div className="user-dropdown-name">{user.name}</div>
                    <div className="user-dropdown-email">{user.email}</div>
                  </div>
                </div>
                <div className="user-dropdown-divider"></div>
                <button className="user-dropdown-item" onClick={() => {
                  navigate('/write');
                }}>
                  写文章
                </button>
                <button className="user-dropdown-item" onClick={() => {
                  navigate('/user-info');
                }}>
                  个人中心
                </button>
                <button className="user-dropdown-item user-dropdown-item-logout" onClick={handleLogout}>
                  退出登录
                </button>
              </div>
            </div>
          ) : (
            <NavLink
              to="/auth"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              登录
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;