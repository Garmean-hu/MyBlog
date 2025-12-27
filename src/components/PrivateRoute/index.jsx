import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// 权限校验组件，用于保护需要登录的页面
const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  
  // 如果用户未登录，重定向到登录页面，并保存当前路径用于登录后返回
  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  
  // 如果需要特定角色，且用户角色不匹配，重定向到首页
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  // 用户已登录，返回子组件
  return children;
};

export default PrivateRoute;