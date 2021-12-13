import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <section id="contact" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="text-center">
                    <h3 className="mb-0 after">Like my work? Need a freelance Web developer? <br/>You can contact me now!
                    </h3>

                    <div className="block spacer p-top-lg">
                        <Link title="Contact" to={ process.env.PUBLIC_URL + "/contacts" } className="btn btn-dark btn-bold transform-scale-h border-0">Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
