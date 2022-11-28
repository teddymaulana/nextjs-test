const ProductCard = () => {
  console.log('product card');

  return (
    <div className="carousel-item col-9 col-md-3 product-card text-center">
      <a href="#">
        <picture className="embed-responsive embed-responsive-1by1 bg-shimmer m-0">
          <img src="https://via.placeholder.com/384x384" />
        </picture>
      </a>
      <div className="position-relative grow-1 d-flex flex-column px-2 pt-2 pb-0">
        <div className="d-flex justify-content-center mb-1">
          <div
            className="react-yotpo-star"
            data-product-id="4543113265187"
          ></div>
        </div>
        <p className="product-card__title mx-n2 grow-1 d-flex flex-column justify-content-center h4 h-100 font-weight-normal">
          <a href="#" className="text-dark">
            title
          </a>
        </p>
        <p className="text-center">
          <span className="text-linethrough h4 m-1">compare_price</span>
          <span className="text-primary h4">price</span>
        </p>
        <button
          type="button"
          className="btn btn-lg btn-primary add-to-cart btn-block px-0"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
