import React, { createContext, useState, useContext, useEffect } from 'react';

// 创建AuthContext
const AuthContext = createContext();

// 自定义Hook，用于访问AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider组件，用于提供登录状态管理
export const AuthProvider = ({ children }) => {
  // 初始化用户状态
  const [user, setUser] = useState(null);

  // 组件挂载时从localStorage获取用户信息，实现持久化登录
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 登录函数
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 更新用户信息函数
  const updateUser = (userData) => {
    const updatedUser = {
      ...user,
      ...userData
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // 退出登录函数
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // 提供给子组件的值
  const value = {
    user,
    login,
    updateUser,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};