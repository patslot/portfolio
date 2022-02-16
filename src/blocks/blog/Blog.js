import React, { useEffect } from 'react';
// import dataBlogCard from "../../data/blog/blog";
import useHttp from '../../hook/useHttp';
import { getAllPosts } from '../../lib/api';
const Blog = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
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

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p> No post </p>;
  }
  const allPost = loadedQuotes.data.blogPostCollection.items;
  console.log(allPost);
  return (
    <section id="blog" className="block spacer p-top-xl">
      <div className="wrapper">
        <h2 className="text-right">
          <a
            title="Blogging"
            className="transform-scale-h"
            href={process.env.PUBLIC_URL + '/journal'}
          >
            <span className="line">Blogging</span>
          </a>
        </h2>
      </div>

      <div className="bg-gray-light ptb-blog">
        <div className="wrapper">
          <div className="row gutter-width-lg">
            {allPost &&
              allPost.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="card card-post">
                      <div className="card-top position-relative">
                        <a
                          title={item.title}
                          href={
                            process.env.PUBLIC_URL +
                            '/works-inside/' +
                            item.slug
                          }
                        >
                          <div className="img object-fit overflow-hidden">
                            <div className="object-fit-cover transform-scale-h">
                              <img
                                className="card-top-img"
                                src={item.heroImage.url}
                                alt={item.heroImage.description}
                              />
                            </div>
                          </div>
                        </a>

                        {/* <div className="card-category">
                          <a
                            title={item.categoryTitle}
                            className="btn btn-sm btn-light transform-scale-h border-0"
                            href={process.env.PUBLIC_URL + item.categoryLink}
                          >
                            {item.categoryTitle}
                          </a>
                        </div> */}
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            title={item.title}
                            href={process.env.PUBLIC_URL + item.link}
                          >
                            {item.title}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
