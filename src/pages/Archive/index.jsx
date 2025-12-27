import React from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api/mockData';
import { Card, Typography, Timeline, Divider, Statistic, Row, Col } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css';

const { Title, Text } = Typography;

const Archive = () => {
  const posts = getPosts();

  // 按日期降序排序文章
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // 按年份和月份分组文章
  const groupPostsByYearMonth = (posts) => {
    const grouped = {};
    
    posts.forEach(post => {
      const [year, month] = post.date.split('-');
      if (!grouped[year]) {
        grouped[year] = {};
      }
      if (!grouped[year][month]) {
        grouped[year][month] = [];
      }
      grouped[year][month].push(post);
    });
    
    return grouped;
  };

  const postsByYearMonth = groupPostsByYearMonth(sortedPosts);

  // 统计数据
  const totalPosts = posts.length;
  const totalCategories = new Set(posts.map(post => post.category)).size;
  const totalTags = new Set(posts.flatMap(post => post.tags)).size;
  const years = Object.keys(postsByYearMonth).sort((a, b) => b - a);

  // 准备图表数据
  const chartData = years.map(year => {
    const months = Object.keys(postsByYearMonth[year]);
    const postCount = months.reduce((total, month) => total + postsByYearMonth[year][month].length, 0);
    return {
      year,
      posts: postCount
    };
  });

  return (
    <div className="archive-page">
      <div className="archive-container">
        <Title level={1} className="archive-title">文章归档</Title>
        
        {/* 统计卡片 */}
        <Row gutter={[16, 16]} className="archive-stats">
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="总文章数" value={totalPosts} prefix="📚" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="总分类数" value={totalCategories} prefix="📂" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="总标签数" value={totalTags} prefix="🏷️" />
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* 年度文章统计图表 */}
        <Card title="年度文章统计" className="chart-card">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" fill="#8884d8" name="文章数" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Divider />

        {/* 文章归档 */}
        <Title level={2} className="archive-subtitle">归档列表</Title>
        <div className="archive-content">
          {years.map(year => (
            <Card key={year} title={`${year}年`} className="year-card">
              {Object.entries(postsByYearMonth[year]).sort(([monthA], [monthB]) => monthB - monthA).map(([month, monthPosts]) => (
                <div key={month} className="month-group">
                  <Title level={4} className="month-title">{month}月 ({monthPosts.length}篇)</Title>
                  <Timeline>
                    {monthPosts.map(post => (
                      <Timeline.Item key={post.id}>
                        <div className="timeline-content">
                          <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
                          <div className="post-meta">
                            <Text type="secondary">{post.date} · {post.category}</Text>
                          </div>
                        </div>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </div>
              ))}
            </Card>
          ))}
        </div>
        
        <div className="archive-summary">
          <Text type="secondary">共 {totalPosts} 篇文章，归档于 {years.length} 个年份</Text>
        </div>
      </div>
    </div>
  );
};

export default Archive;