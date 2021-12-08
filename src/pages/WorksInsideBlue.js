import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

const WorksInsideBlue = () => {
  document.body.classList.add("single");
  document.body.classList.add("single-portfolio");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");
  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>
          Works Inside | Blue Insurance Chinese New Year campaign site
        </title>

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

      <main id="main" className="site-main bg-half-ring-right bg-half-ring-top">
        <section id="page-content">
          <div className="wrapper">
            <div id="single">
              <div className="row gutter-width-lg single-content">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="img object-fit size-6">
                    <div className="object-fit-cover">
                      <img
                        src="assets/img/work/bluecny/bluecny1.jpg"
                        alt="CNY 2021"
                      />
                    </div>
                  </div>

                  
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <p className="date">
                    <span className="large">21</span> Jan, 2021
                  </p>

                  <h1 className="small">
                    Chinese New Year Blue insurance campaign site
                  </h1>
                  <div className="description">
                    <h5>Background</h5>
                    <p>
                      Blue insurance want to promote their campaign during CNY
                      peroid. Their target in the campaign is get public
                      awareness and also want to gather some contact of
                      potential customer.
                    </p>
                  </div>
                  <div className="description">
                    <h5>Idea</h5>

                    <p>
                      We made a simple html game which work on mobile and
                      desktop. the game was counting the number of shake in
                      mobile phone or number of click in desktop site in limited
                      time. After player finish the game, they need to submit
                      their contact. After the campaign peroid, we sent the
                      prizes to top score players.
                    </p>

                    <h5>Product features</h5>

                    <ul>
                      <li>Backend was used google cloud app engine by python</li>
                      <li>Frontend was wrote by Angular JS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default WorksInsideBlue;
