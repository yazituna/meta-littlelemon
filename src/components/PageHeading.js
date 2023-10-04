import React from "react";

const PageHeading = (props) => {
  return (
    <>
      <section className="page-heading-container">
        <div className="row-page-heading">
            <h1 className="display-title text-color-primary-yellow page-heading-text">{props.heading}</h1>
            <h3 className="sub-title text-color-light page-heading-text">{props.subtitle}</h3>
        </div>
      </section>
    </>
  );
};

export default PageHeading;