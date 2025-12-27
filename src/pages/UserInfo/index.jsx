import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card, Button, Form, Input, Avatar, Typography, Space, Divider, List, Tag, message } from 'antd';
import { getPostsByAuthorId, deletePost } from '../../api/mockData';
import './index.css';

const { Title, Text } = Typography;
const { Item } = Form;

const UserInfo = () => {
  const { user, updateUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [userPosts, setUserPosts] = useState([]);
  
  // 获取用户文章
  useEffect(() => {
    if (isAuthenticated) {
      const posts = getPostsByAuthorId(user.id);
      setUserPosts(posts);
    }
  }, [user.id, isAuthenticated]);
  
  // 如果用户未登录，重定向到登录页面
  if (!isAuthenticated) {
    navigate('/auth');
    return null;
  }
  
  // 处理文章删除
  const handleDeletePost = (postId) => {
    deletePost(postId);
    // 更新文章列表
    setUserPosts(userPosts.filter(post => post.id !== postId));
    message.success('文章删除成功');
  };
  
  // 表单初始值
  const initialValues = {
    name: user.name,
    email: user.email,
    avatar: user.avatar
  };
  
  // 处理表单提交
  const handleSubmit = (values) => {
    updateUser(values);
    setIsEditing(false);
  };
  
  return (
    <div className="user-info-page">
      <div className="user-info-container">
        <Card title="用户信息" className="user-info-card">
          {isEditing ? (
            <Form
              form={form}
              layout="vertical"
              initialValues={initialValues}
              onFinish={handleSubmit}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div className="avatar-section">
                  <Avatar size={128} src={user.avatar} className="user-avatar-large" />
                </div>
                
                <Item
                  name="name"
                  label="昵称"
                  rules={[{ required: true, message: '请输入昵称' }]}
                >
                  <Input placeholder="请输入昵称" />
                </Item>
                
                <Item
                  name="email"
                  label="邮箱"
                  rules={[
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '请输入有效的邮箱地址' }
                  ]}
                >
                  <Input placeholder="请输入邮箱" />
                </Item>
                
                <Item
                  name="avatar"
                  label="头像URL"
                  rules={[
                    { required: true, message: '请输入头像URL' },
                    { type: 'url', message: '请输入有效的URL' }
                  ]}
                >
                  <Input placeholder="请输入头像URL" />
                </Item>
                
                <div className="form-actions">
                  <Button type="primary" htmlType="submit">
                    保存
                  </Button>
                  <Button onClick={() => {
                    setIsEditing(false);
                    form.resetFields();
                  }}>
                    取消
                  </Button>
                </div>
              </Space>
            </Form>
          ) : (
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div className="avatar-section">
                <Avatar size={128} src={user.avatar} className="user-avatar-large" />
              </div>
              
              <div className="user-info-section">
                <Title level={4}>基本信息</Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div className="info-item">
                    <Text strong>昵称：</Text>
                    <Text>{user.name}</Text>
                  </div>
                  <div className="info-item">
                    <Text strong>邮箱：</Text>
                    <Text>{user.email}</Text>
                  </div>
                  <div className="info-item">
                    <Text strong>头像：</Text>
                    <Text>{user.avatar}</Text>
                  </div>
                </Space>
              </div>
              
              <Divider />
              
              <div className="user-actions">
                <Button type="primary" onClick={() => setIsEditing(true)}>
                  编辑信息
                </Button>
              </div>
            </Space>
          )}
        </Card>
        
        {/* 用户文章列表 */}
        <Card title="我的文章" className="user-posts-card" style={{ marginTop: 24 }}>
          {userPosts.length > 0 ? (
            <List
              dataSource={userPosts}
              renderItem={(post) => (
                <List.Item
                  key={post.id}
                  actions={[
                    <Link to={`/write/${post.id}`} key="edit">
                      <Button type="primary" size="small">编辑</Button>
                    </Link>,
                    <Button 
                      type="danger" 
                      size="small" 
                      key="delete"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      删除
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={<Link to={`/post/${post.id}`}>{post.title}</Link>}
                    description={
                      <>
                        <div style={{ marginBottom: 8 }}>
                          <Tag color="blue">{post.category}</Tag>
                          {post.tags.map(tag => (
                            <Tag key={tag} color="green">{tag}</Tag>
                          ))}
                        </div>
                        <div>
                          <Text type="secondary">发布日期：{post.date}</Text> · 
                          <Text type="secondary">点赞：{post.likes}</Text> · 
                          <Text type="secondary">评论：{post.comments}</Text>
                        </div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <Text type="secondary">您还没有发布过文章</Text>
          )}
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;