const ServicesHome = () => {
  return (
    <section className="bg-gray-400 text-center">
      <div className="container">
        <ul className="list-unstyled row align-items-center justify-content-center pt-md-4 pb-md-4 mx-lg-5 mb-0 pt-4 pb-0 pl-0">
          <li className="col-6 col-md-3 mb-lg-0 mb-4">
            <i className="d-inline-flex h1 mb-2">
              <img
                className="svg text-secondary"
                src="icons/two-line-stars.svg"
                replace-to-svg
              />
            </i>
            <p className="title mb-0">
              Delivery From
              <br />
              US warehouse
            </p>
          </li>
          <li className="col-6 col-md-3 mb-lg-0 mb-4">
            <i className="d-inline-flex h1 mb-2">
              <img
                className="svg text-secondary"
                src="icons/fast-delivery.svg"
                replace-to-svg
              />
            </i>
            <p className="title mb-0">
              Delivery From
              <br />
              US warehouse
            </p>
          </li>
          <li className="col-6 col-md-3 mb-lg-0 mb-4">
            <i className="d-inline-flex h1 mb-2">
              <img
                className="svg text-secondary"
                src="icons/winner-award.svg"
                replace-to-svg
              />
            </i>
            <p className="title mb-0">
              Award-winning <br />
              beauty
            </p>
          </li>
          <li className="col-6 col-md-3 mb-lg-0 mb-4">
            <i className="d-inline-flex h1 mb-2">
              <img
                className="svg text-secondary"
                src="icons/moneyback.svg"
                replace-to-svg
              />
            </i>
            <p className="title mb-0">
              Money back
              <br /> guarantee
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { ServicesHome };
