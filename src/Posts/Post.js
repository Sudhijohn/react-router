import React from 'react';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './post.module.css';

const Post = () => {
  const { postId } = useParams();
  const {
    state: { post },
  } = useLocation();

  return (
    <div className={styles.container}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button className={styles.btn}>
        <Link className={styles.link} to="/posts">
          Go back
        </Link>
      </button>
    </div>
  );
};

export default React.memo(Post);
