import ProductCard from '@/layouts/compounds/ProductCard';
import product from 'next-seo/lib/jsonld/product';

const ProductCarousel = (props: any) => {
  const { products, content } = props;
  console.log('ProductCarousel', products);

  return (
    <section
      id="product-carousel-ab-original"
      className="product-carousel py-4"
    >
      <ul
        className="nav nav-tabs nav-tabs--product justify-content-center mx-auto mb-2 text-center"
        role="tablist"
      >
        {[1, 2, 3].map(
          (idx) =>
            content[`featured_product_tab${idx}`] && (
              <li key={`navItem${idx}`} className="nav-item">
                <a
                  className={`nav-link text-decoration-none h4 font-weight-normal mb-0 ${
                    content.featured_product_active === idx ? 'active' : ''
                  }`}
                  data-toggle="tab"
                  href={`#${content[`featured_product_tab${idx}`]
                    .toLowerCase()
                    .replace(' ', '-')}`}
                  role="tab"
                  aria-controls="new"
                >
                  {content[`featured_product_tab${idx}`]}
                </a>
              </li>
            )
        )}
      </ul>
      <div className="tab-content px-sm-0 px-md-2 container text-center">
        <div
          className="tab-pane fade carousel slide carousel--loop carousel--swipe"
          id="new"
          role="tabpanel"
          aria-labelledby="new-tab"
          data-slide-number="4"
        >
          <div className="carousel--centered pt-2">
            <div className="carousel-inner row mx-0 flex-nowrap" role="listbox">
              {products.map((product:any) => <ProductCard content={product}></ProductCard>)}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade carousel slide carousel--loop carousel--swipe show active"
          id="bestsellers"
          role="tabpanel"
          aria-labelledby="bestsellers"
          data-slide-number="4"
        >
          <div className="carousel--centered pt-2">
            <div className="carousel-inner row mx-0 flex-nowrap" role="listbox">
              {products.map((product:any) => <ProductCard content={product}></ProductCard>)}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade carousel slide carousel--loop carousel--swipe show active"
          id="value-sets"
          role="tabpanel"
          aria-labelledby="value-sets"
          data-slide-number="4"
        >
          <div className="carousel--centered pt-2">
            <div className="carousel-inner row mx-0 flex-nowrap" role="listbox">
              {products.map((product:any, index: number) => <ProductCard content={product} activeClass={index === 0 ? 'active' : ''}></ProductCard>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCarousel };
