import React from 'react';

const AboutContent = () => {
    return (
        <div id="about" className="block">
            <h2>
                <span className="line">A passionate</span><br/> front-end developer, designer in media.
            </h2>

            <div className="row bg-half-ring-left gutter-width-lg">
                <div className="col align-self-top pl-0">
                    <div className="img object-fit">
                        <div className="object-fit-cover">
                            <img src="assets/img/myphoto2.jpg" alt="Pat Kwok" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="col align-self-center description">
                    <h4>I’m Pat Kwok</h4>

                    <p>I have over 10 years experience of web development and i worked in a sales department of a media company in Hong Kong. I was responsible for manage and develop digital products for clients.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
