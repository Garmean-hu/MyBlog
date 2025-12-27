import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card, Form, Input, Select, Button, Space, Tag, Typography, message } from 'antd';
import { getPostById, addPost, updatePost, deletePost, getAllTags } from '../../api/mockData';
import './index.css';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const WritePost = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags] = useState(getAllTags());
  
  // 检查是否为编辑模式
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const post = getPostById(id);
      if (post) {
        form.setFieldsValue({
          title: post.title,
          category: post.category,
          content: post.content
        });
        setSelectedTags(post.tags);
      }
    }
  }, [id, form]);
  
  // 如果用户未登录，重定向到登录页面
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const categories = ['技术', '经验分享', '生活随笔', '读书笔记', '其他'];

  // 处理标签变化
  const handleTagsChange = (tags) => {
    setSelectedTags(tags);
  };

  // 处理表单提交
  const handleSubmit = (values) => {
    const postData = {
      ...values,
      tags: selectedTags
    };
    
    try {
      if (isEditing) {
        // 编辑文章
        updatePost(id, postData);
        message.success('文章编辑成功');
      } else {
        // 发布新文章
        addPost(postData, user);
        message.success('文章发布成功');
      }
      
      // 提交成功后跳转到首页
      navigate('/');
    } catch (error) {
      message.error('操作失败，请重试');
      console.error('文章操作失败:', error);
    }
  };

  // 处理文章删除
  const handleDelete = () => {
    try {
      deletePost(id);
      message.success('文章删除成功');
      navigate('/');
    } catch (error) {
      message.error('删除失败，请重试');
      console.error('文章删除失败:', error);
    }
  };

  return (
    <div className="write-post-page">
      <div className="write-post-container">
        <Card title={<Title level={2}>{isEditing ? '编辑文章' : '写文章'}</Title>} className="write-post-card">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              category: '技术',
              tags: []
            }}
          >
            <Form.Item
              name="title"
              label="标题"
              rules={[{ required: true, message: '请输入文章标题' }]}
            >
              <Input placeholder="请输入文章标题" size="large" />
            </Form.Item>
            
            <Space.Compact style={{ width: '100%' }}>
              <Form.Item
                name="category"
                label="分类"
                rules={[{ required: true, message: '请选择文章分类' }]}
                style={{ flex: 1, marginRight: 8 }}
              >
                <Select placeholder="请选择分类">
                  {categories.map(category => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              
              <Form.Item
                label="标签"
                style={{ flex: 1 }}
              >
                <Select
                  mode="tags"
                  placeholder="请选择或输入标签"
                  value={selectedTags}
                  onChange={handleTagsChange}
                  options={availableTags.map(tag => ({ label: tag, value: tag }))}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Space.Compact>
            
            <div className="selected-tags-section">
              <Title level={5}>已选标签</Title>
              {selectedTags.length > 0 ? (
                <div className="selected-tags">
                  {selectedTags.map(tag => (
                    <Tag key={tag} color="blue" closable onClose={() => {
                      const newTags = selectedTags.filter(t => t !== tag);
                      setSelectedTags(newTags);
                    }}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              ) : (
                <Text type="secondary">还没有选择标签</Text>
              )}
            </div>
            
            <Form.Item
              name="content"
              label="内容"
              rules={[{ required: true, message: '请输入文章内容' }]}
            >
              <TextArea
                placeholder="请输入文章内容（支持Markdown格式）"
                rows={20}
                style={{ resize: 'vertical' }}
              />
            </Form.Item>
            
            <Form.Item className="form-actions">
              <Space size="large">
                <Button type="default" onClick={() => navigate('/')}>
                  取消
                </Button>
                {isEditing && (
                  <Button type="danger" onClick={handleDelete}>
                    删除文章
                  </Button>
                )}
                <Button type="primary" htmlType="submit">
                  {isEditing ? '保存修改' : '发布文章'}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default WritePost;