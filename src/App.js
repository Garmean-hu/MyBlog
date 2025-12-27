import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Archive from './pages/Archive';
import About from './pages/About';
import WritePost from './pages/WritePost';
import Auth from './pages/Auth';
import UserInfo from './pages/UserInfo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                {/* 公开页面 */}
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Auth />} />
                
                {/* 需要登录的页面 */}
                <Route path="/archive" element={
                  <PrivateRoute>
                    <Archive />
                  </PrivateRoute>
                } />
                <Route path="*" element={
                  <PrivateRoute>
                    <NotFound />
                  </PrivateRoute>
                } />
                <Route path="/write" element={
                  <PrivateRoute>
                    <WritePost />
                  </PrivateRoute>
                } />
                <Route path="/write/:id" element={
                  <PrivateRoute>
                    <WritePost />
                  </PrivateRoute>
                } />
                <Route path="/user-info" element={
                  <PrivateRoute>
                    <UserInfo />
                  </PrivateRoute>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
