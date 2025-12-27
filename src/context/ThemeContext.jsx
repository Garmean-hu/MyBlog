import React, { createContext, useState, useContext, useEffect } from 'react';

// 创建主题上下文
const ThemeContext = createContext();

// 自定义Hook，用于访问主题上下文
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 主题提供者组件
export const ThemeProvider = ({ children }) => {
  // 从localStorage获取主题，默认浅色主题
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  // 切换主题
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // 主题变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // 更新文档根元素的data-theme属性
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
