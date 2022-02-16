import React from 'react';
import WorkinSideData from '../../data/workinside/workinsidedata';
// import useHttp from '../../hook/useHttp';
// import { getSinglePost } from '../../lib/api';
const WorkInside = (props) => {
  const workinside = WorkinSideData.find((work) => work.id === props.workId);

  // const {
  //   sendRequest,
  //   status,
  //   data: loadedQuotes,
  //   error,
  // } = useHttp(getSinglePost, true);

  // useEffect(() => {
  //   sendRequest(props.slug);
  // }, [sendRequest, props.slug]);

  // if (status === 'pending') {
  //   return <div>pending</div>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
  //   return <p> No post </p>;
  // }
  // const workinside = loadedQuotes.data.blogPostCollection.items[0];
  // // const workinside = WorkinSideData.find((work) => work.id === props.workId);

  console.log(workinside);
  if (!workinside) {
    return (
      <section id="page-content">
        <div className="wrapper">
          <div id="single">Work not found</div>
        </div>
      </section>
    );
  }
  return (
    <section id="page-content">
      <div className="wrapper">
        <div id="single">
          <div className="row gutter-width-lg single-content">
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="object-fit-cover">
                <img src={`${workinside.heroImage.url}`} alt="CNY 2021" /> */}
            <div
              className={
                workinside.imageswidth === 'portrait'
                  ? 'col-xl-4 col-lg-4 col-md-4 col-sm-12'
                  : 'col-xl-7 col-lg-7 col-md-7 col-sm-12'
              }
            >
              {workinside.images.map((image, i) => {
                return (
                  <div
                    className={
                      workinside.imageswidth === 'portrait'
                        ? 'img object-fit size-6'
                        : 'img object-fit size-7'
                    }
                    key={i}
                  >
                    <div className="object-fit-cover" key={i}>
                      <img src={`../assets/img/work/${image}`} alt="CNY 2021" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <p className="date">{workinside.date}</p>
              <h1 className="small"> {workinside.title}</h1>
              <div className="description">
                <h5>Background</h5>
                <p>{workinside.background}</p>
              </div>
              <div className="description">
                <h5>Idea</h5>

                <p>{workinside.idea}</p>

                <h5>Product features</h5>

                <ul>
                  {workinside.features.map((feature, i) => {
                    return <li key={i}>{feature}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInside;
