import React from 'react';

const Home = () => (
    <section id="hero" className="hero hero-home bg-gray">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-6 text order-2 order-lg-1">
          <h1>Landy &mdash; Bootstrap&nbsp;4 landing page</h1>
          <p className="hero-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
          <div className="CTA"><a href="#features" className="btn btn-primary btn-shadow btn-gradient link-scroll">Discover More</a><a href="#" className="btn btn-outline-primary">Sign Up Now</a></div>
        </div>
         <div className="col-lg-6 order-1 order-lg-2"> </div>
      </div>
    </div>
  </section>
);

export default Home;
