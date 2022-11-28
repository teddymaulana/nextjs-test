const HeroCarousel = () => {
  return (
    <div
      id="carouselWithRightBullets"
      className="hero-carousel carousel slide"
      data-ride="carousel"
      data-interval="5000"
    >
      <ol class="carousel-indicators carousel-indicators--right">
        <li
          data-target="#carouselWithRightBullets"
          data-slide-to="0"
          class="active rounded-circle border border-white"
        ></li>
        <li
          data-target="#carouselWithRightBullets"
          data-slide-to="1"
          class="rounded-circle border border-white"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="/collections/all">
            <picture className="embed-responsive">
              <source
                srcSet="//cdn.shopify.com/s/files/1/0243/8817/3888/files/221115_BlackFridaySale_DESK_ENG_1140x.jpg?v=1668667077"
                media="(min-width: 992px)"
              />
              <img
                className="embed-responsive-item fit--cover"
                alt="Slide 01"
                src="//cdn.shopify.com/s/files/1/0243/8817/3888/files/221115_BlackFridaySale_MOB_ENG_828x.jpg?v=1668667077"
                loading="lazy"
              />
            </picture>
            <em className="d-flex hero-carousel__note position-absolute text-body pb-lg-g col-8 col-md-9 pb-1">
              *exclusions apply, while stocks last, no code required
            </em>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/collections/all">
            <picture className="embed-responsive">
              <source
                srcSet="//cdn.shopify.com/s/files/1/0243/8817/3888/files/221115_BlackFridaySale_DESK_ENG_1140x.jpg?v=1668667077"
                media="(min-width: 992px)"
              />
              <img
                className="embed-responsive-item fit--cover"
                alt="Slide 01"
                src="//cdn.shopify.com/s/files/1/0243/8817/3888/files/221115_BlackFridaySale_MOB_ENG_828x.jpg?v=1668667077"
                loading="lazy"
              />
            </picture>
            <em className="d-flex hero-carousel__note position-absolute text-body pb-lg-g col-8 col-md-9 pb-1">
              *exclusions apply, while stocks last, no code required
            </em>
          </a>
        </div>
      </div>
    </div>
  );
};

export { HeroCarousel };
