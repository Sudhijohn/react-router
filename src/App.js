import React, { Suspense } from 'react';
import './style.css';
import { Routes, Route, Navigate } from 'react-router';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Loader from './loader/Loader';
import PostProvider from './context/postProvider';

export default function App() {
  return (
    <PostProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:postId/*" element={<Post />}></Route>
          <Route path="*" element={<Navigate to="/posts" />}></Route>
        </Routes>
      </Suspense>
    </PostProvider>
  );
}
