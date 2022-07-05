import React, { Fragment, useEffect } from 'react';

import useHttp from '../hook/useHttp';
import { getAllPosts } from '../lib/api';

import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import Styes from './Blog.module.scss';

const Blog = () => {
  document.body.classList.add('blog');
  document.body.classList.add('bg-fixed');
  document.body.classList.add('bg-line');
  const {
    sendRequest,
    status,
    data: loadedPosts,
    error,
  } = useHttp(getAllPosts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending') {
    return <div>pending</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === 'completed' && (!loadedPosts || loadedPosts.length === 0)) {
    return <p> No post </p>;
  }
  const allPost = loadedPosts.data.blogPostCollection.items;
  console.log(allPost);

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Journal | Life is sweet & sour</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <section id="page-content" className="spacer p-top-xl">
          <div id="blog">
            <ul className={Styes.blogWrapper}>
              {allPost.map((post, key) => {
                return (
                  <li key={key}>
                    <a className={Styes.gridItem} href={post.slug}></a>
                    <h3>{post.title}</h3>
                    <img
                      src={post.heroImage.url}
                      alt={post.heroImage.description}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Blog;
