/* eslint-disable no-template-curly-in-string */

// 生成随机日期（2024-01-01 到 2025-12-31）
const getRandomDate = () => {
  const start = new Date('2024-01-01');
  const end = new Date('2025-12-31');
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0];
};

// 生成随机文章数据
const generatePosts = () => {
  const titles = [
    "React 19 新特性详解",
    "TypeScript 高级类型指南",
    "Next.js 15 全栈开发实践",
    "前端架构设计原则",
    "微前端架构实战",
    "Web 性能优化最佳实践",
    "CSS-in-JS 方案对比",
    "前端测试策略",
    "GraphQL 入门与实践",
    "Node.js 性能优化",
    "Docker 容器化部署",
    "CI/CD 流程搭建",
    "Git 高级用法",
    "设计模式在前端的应用",
    "响应式设计最佳实践",
    "无障碍设计指南",
    "WebAssembly 入门",
    "PWA 开发实战",
    "前端安全防护",
    "性能监控与分析",
    "React Hooks 高级应用",
    "Vue 3 Composition API 深入理解",
    "Svelte 框架初探",
    "Solid.js 性能对比",
    "Tailwind CSS 最佳实践"
  ];
  
  const authors = [
    { name: "张三", id: 1 },
    { name: "李四", id: 2 },
    { name: "王五", id: 3 },
    { name: "赵六", id: 4 },
    { name: "孙七", id: 5 }
  ];
  
  const categories = ["技术", "经验分享", "生活随笔", "读书笔记", "其他"];
  
  const tags = [
    "React", "TypeScript", "JavaScript", "CSS", "HTML", "Node.js", "Next.js", "Vue", "Svelte", "Solid.js",
    "前端", "后端", "全栈", "性能优化", "架构设计", "微前端", "测试", "GraphQL", "Docker", "CI/CD",
    "Git", "设计模式", "响应式设计", "无障碍设计", "WebAssembly", "PWA", "安全", "监控", "Hooks", "Composition API"
  ];
  
  const contentTemplate = (title) => {
    return title + "\n\n" +
      "本文将详细介绍" + title.toLowerCase() + "的相关内容，包括核心概念、使用方法、最佳实践等。\n\n" +
      "## 核心概念\n\n" +
      title + "的核心概念包括：\n\n" +
      "1. **概念一**：这是" + title + "的第一个核心概念，它的作用是...\n" +
      "2. **概念二**：这是" + title + "的第二个核心概念，它的作用是...\n" +
      "3. **概念三**：这是" + title + "的第三个核心概念，它的作用是...\n\n" +
      "## 使用方法\n\n" +
      "使用" + title + "的基本步骤如下：\n\n" +
      "```javascript\n" +
      "// 示例代码\n" +
      "const example = () => {\n" +
      "  console.log('Hello, ' + title + '!');\n" +
      "  return 'Success';\n" +
      "};\n" +
      "\n" +
      "example();\n" +
      "```\n\n" +
      "## 最佳实践\n\n" +
      "使用" + title + "的最佳实践包括：\n\n" +
      "1. **最佳实践一**：在使用" + title + "时，应该...\n" +
      "2. **最佳实践二**：在使用" + title + "时，应该...\n" +
      "3. **最佳实践三**：在使用" + title + "时，应该...\n\n" +
      "## 总结\n\n" +
      "通过本文的介绍，相信你已经对" + title + "有了基本的了解。在实际项目中，" + title + "可以帮助我们...\n\n" +
      "希望本文对你有所帮助！";
  };
  
  // 生成25篇文章（5篇原有文章 + 20篇新文章）
  const posts = [];
  
  // 添加原有文章
  posts.push(
    {
      id: 1,
      title: "React Hooks 入门指南",
      author: "张三",
      authorId: 1,
      date: "2024-01-15",
      content: "React Hooks 是 React 16.8 版本引入的新特性，它允许我们在函数组件中使用状态和其他 React 特性。本文将带你入门 React Hooks，包括 useState、useEffect、useContext 等常用 Hooks 的使用方法。\n\n首先，我们来了解 useState Hook，它允许我们在函数组件中添加状态：\n\n```javascript\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n接下来，我们来了解 useEffect Hook，它允许我们在函数组件中执行副作用操作：\n\n```javascript\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // Similar to componentDidMount and componentDidUpdate:\n  useEffect(() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n通过本文的介绍，相信你已经对 React Hooks 有了基本的了解。在实际项目中，Hooks 可以帮助我们编写更加简洁、可维护的代码。",
      category: "技术",
      tags: ["React", "Hooks", "前端"],
      likes: 42,
      comments: 15
    },
    {
      id: 2,
      title: "JavaScript 异步编程最佳实践",
      author: "李四",
      authorId: 2,
      date: "2024-01-10",
      content: "JavaScript 是一门单线程语言，这意味着它一次只能执行一个任务。为了处理耗时操作，JavaScript 提供了异步编程模型。本文将介绍 JavaScript 异步编程的最佳实践，包括回调函数、Promise 和 async/await。\n\n在早期的 JavaScript 中，我们主要使用回调函数来处理异步操作：\n\n```javascript\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback('Data received');\n  }, 1000);\n}\n\nfetchData((data) => {\n  console.log(data); // 输出: Data received\n});\n```\n\n然而，回调函数容易导致回调地狱（Callback Hell），代码可读性差。为了解决这个问题，ES6 引入了 Promise：\n\n```javascript\nfunction fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Data received');\n    }, 1000);\n  });\n}\n\nfetchData()\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n```\n\nES8 引入了 async/await，它是 Promise 的语法糖，让异步代码看起来像同步代码：\n\n```javascript\nasync function fetchData() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve('Data received');\n    }, 1000);\n  });\n}\n\nasync function getData() {\n  try {\n    const data = await fetchData();\n    console.log(data); // 输出: Data received\n  } catch (error) {\n    console.error(error);\n  }\n}\n\ngetData();\n```\n\n在实际项目中，我们应该优先使用 async/await，因为它的代码可读性更好，更容易维护。",
      category: "技术",
      tags: ["JavaScript", "异步编程", "Promise"],
      likes: 35,
      comments: 12
    },
    {
      id: 3,
      title: "CSS Grid 布局完全指南",
      author: "王五",
      authorId: 3,
      date: "2024-01-05",
      content: "CSS Grid 是一种二维布局系统，它允许我们同时在行和列两个方向上排列元素。本文将带你完全掌握 CSS Grid 布局，包括网格容器、网格项、网格线、网格轨道等概念。\n\n首先，我们需要将一个元素设置为网格容器：\n\n```css\n.container {\n  display: grid;\n}\n```\n\n然后，我们可以定义网格的列和行：\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 100px auto 100px;\n  gap: 20px;\n}\n```\n\n接下来，我们可以将网格项放置在特定的网格位置：\n\n```css\n.item1 {\n  grid-column: 1 / 3;\n  grid-row: 1;\n}\n\n.item2 {\n  grid-column: 3;\n  grid-row: 1 / 3;\n}\n```\n\nCSS Grid 提供了丰富的属性和功能，包括响应式设计、自动布局、命名网格线等。通过本文的介绍，相信你已经对 CSS Grid 有了全面的了解。在实际项目中，CSS Grid 可以帮助我们创建复杂的布局，而不需要使用复杂的嵌套结构。",
      category: "技术",
      tags: ["CSS", "Grid", "布局"],
      likes: 28,
      comments: 9
    },
    {
      id: 4,
      title: "学习编程的10个建议",
      author: "赵六",
      authorId: 4,
      date: "2023-12-28",
      content: "学习编程是一个漫长而充满挑战的过程。本文将分享10个学习编程的建议，帮助你更加高效地学习和成长。\n\n1. **设定明确的目标**：在学习编程之前，你需要明确自己的学习目标。你想成为前端开发者、后端开发者还是全栈开发者？\n\n2. **选择合适的编程语言**：根据你的学习目标，选择合适的编程语言。例如，如果你想成为前端开发者，可以学习 HTML、CSS 和 JavaScript；如果你想成为后端开发者，可以学习 Python、Java 或 Node.js。\n\n3. **从基础开始**：学习编程需要从基础开始，掌握基本概念和语法。不要急于学习高级特性，否则会导致基础不扎实。\n\n4. **实践是关键**：编程是一门实践性很强的学科，只有通过不断的实践，才能真正掌握编程技能。\n\n5. **阅读优秀的代码**：阅读优秀的代码可以帮助你学习良好的编程习惯和设计模式。\n\n6. **参与开源项目**：参与开源项目可以帮助你提高编程技能，同时建立自己的作品集。\n\n7. **学习数据结构和算法**：数据结构和算法是编程的核心，掌握它们可以帮助你编写更加高效的代码。\n\n8. **保持好奇心**：编程领域发展迅速，你需要保持好奇心，不断学习新的技术和工具。\n\n9. **寻求帮助**：在学习过程中遇到问题时，不要犹豫，寻求他人的帮助。可以通过论坛、社区或导师来获取帮助。\n\n10. **坚持不懈**：学习编程需要坚持不懈，不要因为遇到困难而放弃。\n\n通过遵循这些建议，相信你可以更加高效地学习编程，成为一名优秀的开发者。",
      category: "经验分享",
      tags: ["编程", "学习方法", "建议"],
      likes: 56,
      comments: 23
    },
    {
      id: 5,
      title: "前端性能优化指南",
      author: "孙七",
      authorId: 5,
      date: "2023-12-20",
      content: "前端性能优化是提高网站用户体验的重要手段。本文将介绍前端性能优化的各种方法，包括资源加载优化、代码优化、渲染优化等。\n\n### 资源加载优化\n1. **减少 HTTP 请求**：合并 CSS 和 JavaScript 文件，使用 CSS Sprites 等技术。\n2. **使用 CDN**：使用内容分发网络（CDN）可以加快资源加载速度。\n3. **压缩资源**：压缩 CSS、JavaScript 和图片等资源。\n4. **使用浏览器缓存**：设置适当的缓存头，让浏览器缓存静态资源。\n5. **延迟加载非关键资源**：使用 lazyload 等技术延迟加载图片和其他非关键资源。\n\n### 代码优化\n1. **减少 DOM 操作**：DOM 操作是昂贵的，应该尽量减少 DOM 操作的次数。\n2. **使用事件委托**：使用事件委托可以减少事件监听器的数量。\n3. **避免使用 eval**：eval 函数会降低代码的执行效率。\n4. **使用 CSS 动画代替 JavaScript 动画**：CSS 动画比 JavaScript 动画更加高效。\n\n### 渲染优化\n1. **使用 CSS transform 和 opacity 进行动画**：这些属性不会触发重排和重绘。\n2. **避免使用 table 布局**：table 布局会导致整个表格重新渲染。\n3. **使用虚拟列表**：对于长列表，使用虚拟列表可以提高渲染性能。\n\n通过本文的介绍，相信你已经了解了前端性能优化的各种方法。在实际项目中，你可以根据具体情况选择合适的优化方法，提高网站的性能和用户体验。",
      category: "技术",
      tags: ["前端", "性能优化", "用户体验"],
      likes: 41,
      comments: 18
    }
  );
  
  // 添加20篇随机文章
  for (let i = 6; i <= 25; i++) {
    const author = authors[Math.floor(Math.random() * authors.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    
    // 随机生成标签（2-5个）
    const randomTags = [];
    const tagCount = Math.floor(Math.random() * 4) + 2;
    const shuffledTags = [...tags].sort(() => 0.5 - Math.random());
    for (let j = 0; j < tagCount; j++) {
      randomTags.push(shuffledTags[j]);
    }
    
    posts.push({
      id: i,
      title,
      author: author.name,
      authorId: author.id,
      date: getRandomDate(),
      content: contentTemplate(title),
      category: categories[Math.floor(Math.random() * categories.length)],
      tags: randomTags,
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 50)
    });
  }
  
  return posts;
};

export const posts = generatePosts();

export const getPosts = () => {
  return posts;
};

export const getPostById = (id) => {
  return posts.find(post => post.id === parseInt(id));
};

export const getPostsByCategory = (category) => {
  return posts.filter(post => post.category === category);
};

// 添加文章
const addPost = (postData, user) => {
  const newPost = {
    id: posts.length + 1,
    ...postData,
    authorId: user.id,
    author: user.name,
    date: new Date().toISOString().split('T')[0],
    likes: 0,
    comments: 0
  };
  posts.push(newPost);
  return newPost;
};

// 编辑文章
const updatePost = (id, postData) => {
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    posts[index] = {
      ...posts[index],
      ...postData
    };
    return posts[index];
  }
  return null;
};

// 删除文章
const deletePost = (id) => {
  const index = posts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    const deletedPost = posts[index];
    posts.splice(index, 1);
    return deletedPost;
  }
  return null;
};

// 根据作者ID获取作者名称
const getAuthorNameById = (authorId) => {
  const authors = [
    { name: "张三", id: 1 },
    { name: "李四", id: 2 },
    { name: "王五", id: 3 },
    { name: "赵六", id: 4 },
    { name: "孙七", id: 5 }
  ];
  const author = authors.find(a => a.id === authorId);
  return author ? author.name : "未知作者";
};

// 根据作者ID获取文章
export const getPostsByAuthorId = (authorId) => {
  return posts.filter(post => post.authorId === parseInt(authorId));
};

// 获取所有可用的标签
const getAllTags = () => {
  const tagsSet = new Set();
  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};

export const getUser = () => {
  return {
    id: 1,
    name: "博客作者",
    avatar: "https://via.placeholder.com/100",
    bio: "热爱技术，分享知识的开发者"
  };
};

// 导出新的功能
export { addPost, updatePost, deletePost, getAllTags };