            import React from 'react';
import { GithubOutlined, WechatOutlined , QqOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import './index.css';
            
            // 定义FooterItem组件
            const FooterItem = ({ title, links }) => {
              return (
                <div className="footer-item">
                  <h3 className="footer-title">{title}</h3>
                  <ul className="footer-links">
                    {links.map((link, index) => (
                      <li key={index} className="footer-link-item">
                        {link.external ? (
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-link"
                          >
                            {link.text}
                          </a>
                        ) : (
                          <a 
                            href={link.url} 
                            className="footer-link"
                          >
                            {link.text}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            };
            
            const Footer = () => {
              const footerLinks = [
                {
                  title: "导航",
                  links: [
                    { text: "首页", url: "/", external: false },
                    { text: "归档", url: "/archive", external: false },
                    { text: "关于", url: "/about", external: false },
                    { text: "写文章", url: "/write", external: false }
                  ]
                },
                {
                  title: "技术",
                  links: [
                    { text: "React", url: "https://reactjs.org", external: true },
                    { text: "JavaScript", url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript", external: true },
                    { text: "CSS", url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS", external: true },
                    { text: "HTML", url: "https://developer.mozilla.org/zh-CN/docs/Web/HTML", external: true }
                  ]
                },
                {
                  title: "资源",
                  links: [
                    { text: "GitHub", url: "https://github.com", external: true },
                    { text: "Stack Overflow", url: "https://stackoverflow.com", external: true },
                    { text: "MDN Web Docs", url: "https://developer.mozilla.org", external: true },
                    { text: "掘金", url: "https://juejin.cn", external: true }
                  ]
                },
                {
                  title: "联系方式",
                  links: [
                    { text: "邮箱", url: "mailto:example@example.com", external: true },
                    { text: "GitHub", url: "https://github.com", external: true },
                    { text: "微博", url: "https://weibo.com", external: true },
                    { text: "知乎", url: "https://zhihu.com", external: true }
                  ]
                }
              ];
            
              return (
                <footer className="footer">
                  <div className="footer-container">
                    <div className="footer-content">
                      {footerLinks.map((item, index) => (
                        <FooterItem key={index} title={item.title} links={item.links} />
                      ))}
                    </div>
                    <div className="footer-bottom">
                      <p className="footer-copyright">
                        © {new Date().getFullYear()} 我的博客. All Rights Reserved.
                      </p>
                      <div className="footer-social">
                        <Space size="large">
                          <GithubOutlined className="footer-icon" />
                          <WechatOutlined  className="footer-icon" />
                          <QqOutlined className="footer-icon" />
                        </Space>
                      </div>
                    </div>
                  </div>
                </footer>
              );
            };
            
            export default Footer;