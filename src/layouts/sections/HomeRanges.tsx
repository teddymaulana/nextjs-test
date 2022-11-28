import Link from 'next/link';
import { Fragment } from 'react';

const HomeRanges = (props: any) => {
  const { status, content } = props;

  return (
    <>
      {status === 'success' && (
        <section className="pb-md-5 justify-content-center container  pt-5 pb-0 text-center">
          <div className="row">
            <div className="col-10 col-lg-8 mx-auto p-0 pb-1">
              <h1 className="d-none d-md-block mb-1">{content.title}</h1>
              <h2 className="h1 d-block d-md-none mb-1" role="heading">
                {content.mobile_title}
              </h2>
              <Fragment>{content.text}</Fragment>
            </div>
          </div>
          <div className="row playground playground--simple mb-md-0 mb-3">
            <div className="col-md-4 px-g">
              <Link href={content.range_1.button_link} className="text-body">
                <figure className="playground--simple-square bg-secondary-light position-relative mb-g mb-md-3 pb-md-0 mt-3 overflow-hidden">
                  <picture className="d-block">
                    <source
                      srcSet={content.range_1.image.url}
                      media="(min-width: 992px)"
                    />
                    <img
                      className="w-100"
                      src={content.range_1.image_mobile.url}
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="p-md-5 p-2 text-left">
                    <strong className="hero-font-size mb-md-4 mb-3">
                      {content.range_1.Title}
                    </strong>
                    <p className="playground__subtitle mt-1">
                      {content.range_1.text}
                    </p>
                  </figcaption>
                </figure>
              </Link>
              <Link href="#" className="btn btn-lg btn-primary">
                {content.range_1.button_label}
              </Link>
            </div>
            <div className="col-md-4 px-g">
              <Link href={content.range_2.button_link} className="text-body">
                <figure className="playground--simple-square bg-primary-light-second position-relative mb-g mb-md-3 pb-md-0 mt-3 overflow-hidden">
                  <picture className="d-block">
                    <source
                      srcSet="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/body.png?v=1662715287"
                      media="(min-width: 992px)"
                    />
                    <img
                      className="w-100"
                      src="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/body_1.png?v=1662715287"
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="p-md-5 p-2 text-left">
                    <strong className="hero-font-size mb-md-4 mb-3">
                      {content.range_2.Title}
                    </strong>
                    <p className="playground__subtitle mt-1">
                      {content.range_2.text}
                    </p>
                  </figcaption>
                </figure>
              </Link>
              <Link
                href={content.range_2.button_link}
                className="btn btn-lg btn-primary"
              >
                {content.range_2.button_label}
              </Link>
            </div>
            <div className="col-md-4 px-g">
              <Link href={content.range_3.button_link} className="text-body">
                <figure className="playground--simple-square bg-yellow-light position-relative mb-g mb-md-3 pb-md-0 mt-3 overflow-hidden">
                  <picture className="d-block">
                    <source
                      srcSet="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/tan_1.png?v=1662715284"
                      media="(min-width: 992px)"
                    />
                    <img
                      className="w-100"
                      src="https://cdn.shopify.com/s/files/1/0286/1327/9779/files/tan_2.png?v=1662715284"
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="p-md-5 p-2 text-left">
                    <strong className="hero-font-size mb-md-4 mb-3">
                      {content.range_3.Title}
                    </strong>
                    <p className="playground__subtitle mt-1">
                      {content.range_3.text}
                    </p>
                  </figcaption>
                </figure>
              </Link>
              <Link
                href={content.range_3.button_link}
                className="btn btn-lg btn-primary"
              >
                {content.range_3.button_label}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export { HomeRanges };
