import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  
  // 获取原始访问
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 模拟登录/注册成功，创建用户数据
    const userData = {
      id: 1,
      name: isLogin ? '测试用户' : formData.name,
      email: formData.email,
      avatar: 'https://cdn.pixabay.com/photo/2022/11/27/13/22/tree-7619791_640.jpg',
      role: 'user' // 默认角色为普通用户
    };
    
    // 调用登录函数
    login(userData);
    
    // 操作成功后跳转到原始访问页面或首页
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">{isLogin ? '登录' : '注册'}</h1>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">用户名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="请输入用户名"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">邮箱</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="请输入邮箱"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">密码</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="请输入密码"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              {isLogin ? '登录' : '注册'}
            </button>
          </form>
          
          <div className="auth-toggle">
            <p>
              {isLogin ? '还没有账户？' : '已有账户？'}
              <button 
                type="button" 
                className="auth-toggle-btn"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? '注册' : '登录'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth ; 