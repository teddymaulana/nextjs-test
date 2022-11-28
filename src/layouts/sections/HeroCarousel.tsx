const HeroCarousel = (props: any) => {
  return (
    <>
      {props.status === 'success' && (
        <div
          id="carouselWithRightBullets"
          className="hero-carousel carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol className="carousel-indicators carousel-indicators--right">
            {props.content.map((item: any, index: number) => (
              <li
                data-target="#carouselWithRightBullets"
                data-slide-to={index}
                className="active rounded-circle border border-white"
                key={`slidePage${item.id}`}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {props.content.map((item: any, index: number) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={`slide${item.id}`}
              >
                <a href={item.slide_link}>
                  <picture className="embed-responsive">
                    <source
                      srcSet={item.image.url}
                      media="(min-width: 992px)"
                    />
                    <img
                      className="embed-responsive-item fit--cover"
                      alt="Slide 01"
                      src={item.mobile_image.url}
                      loading="lazy"
                    />
                  </picture>
                  <em className="d-flex hero-carousel__note position-absolute text-body pb-lg-g col-8 col-md-9 pb-1">
                    {item.notes}
                  </em>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { HeroCarousel };
