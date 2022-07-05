import React from 'react';
import Styles from './ArticleBlockLayout.module.scss';
const ArticleBlockLayout = () => {
  return (
    <div className={Styles.container}>
      <article>
        <h3>Title</h3>
        <img src="/assets/img/blue_cny.jpg" />
        <p>This is a testing about grid</p>
      </article>
      <article>
        <h3>Title</h3>
        <img src="/assets/img/blue_cny.jpg" />
        <p>This is a testing about grid</p>
      </article>
      <article>
        <h3>Title</h3>
        <img src="/assets/img/blue_cny.jpg" />
        <p>This is a testing about grid</p>
      </article>
    </div>
  );
};

export default ArticleBlockLayout;
