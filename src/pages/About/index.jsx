import React from 'react';
import { getUser } from '../../api/mockData';
import './index.css';

const About = () => {
  const user = getUser();

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">关于我</h1>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="about-avatar">
              <img src={user.avatar} alt={user.name} className="avatar-img" />
            </div>
            <div className="about-info">
              <h2 className="about-name">{user.name}</h2>
              <p className="about-bio">{user.bio}</p>
            </div>
          </div>
          
          <div className="about-section">
            <h2 className="about-section-title">个人简介</h2>
            <div className="about-section-content">
              <p>
                我是一名热爱技术、专注于前端开发的工程师，拥有多年的Web开发经验。
                我擅长使用React、JavaScript、CSS等技术栈构建现代化的Web应用。
              </p>
              <p>
                我喜欢分享技术知识，撰写技术博客，希望通过我的文章能够帮助更多的开发者。
                我的博客主要关注前端开发、React、JavaScript、性能优化等主题。
              </p>
              <p>
                除了技术，我还喜欢摄影、旅行和阅读。我相信，多样化的兴趣爱好能够帮助我更好地理解世界，
                从而创造出更有价值的产品和内容。
              </p>
            </div>
          </div>
          
          <div className="about-section">
            <h2 className="about-section-title">技术栈</h2>
            <div className="about-skills">
              <div className="skill-category">
                <h3 className="skill-category-title">前端技术</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Redux</span>
                  <span className="skill-tag">Webpack</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-category-title">后端技术</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-category-title">工具与其他</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">Docker</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2 className="about-section-title">联系方式</h2>
            <div className="about-contact">
              <div className="contact-item">
                <span className="contact-label">邮箱：</span>
                <span className="contact-value">example@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub：</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/username
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">微博：</span>
                <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  weibo.com/username
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;