import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './posts.module.css';
import PostContext from './../context/postContext';
import Loader from './../loader/Loader';

const Posts = () => {
  const ptx = useContext(PostContext);
  const [displayLoader, setDisplayLoader] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (res.ok !== true) return;
    return await res.json();
  };

  useEffect(() => {
    setDisplayLoader(true);
    fetchData().then((posts) => {
      ptx.fetchAllPosts(posts);
      setDisplayLoader(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      {displayLoader && <Loader />}
      <h1 className={styles.h1}>Posts </h1>
      <ul>
        {ptx.posts.map((post) => (
          <li className={styles.post} key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              state={{ post }}
              className={styles.link}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
