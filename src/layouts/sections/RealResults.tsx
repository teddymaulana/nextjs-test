import { RealResultsCard } from '@/layouts/compounds/RealResultCard';

const RealResults = (props: any) => {
  const { reviews } = props;
  return (
    <>
      <section className="pt-4 pb-4 bg-yellow-light position-relative" id="real-results">
        <div className="container p-0 p-md-1">
		      <p className="pb-2 mb-0 h1 text-center">Real Results</p>
          <ul className="nav nav-tabs mx-auto nav-tabs--real-results text-center mb-5 justify-content-center d-none d-md-flex" role="tablist">
            <li className="nav-item">
              <a className="nav-link text-decoration-none h4 mb-0 font-weight-normal {% if site.first == 'fr' %}px-g w-auto{% endif %}"
                data-toggle="tab"
                href="#"
                data-target="#tan"
                role="tab">Tan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none h4 mb-0 font-weight-normal {% if site.first == 'fr' %}px-g w-auto{% endif %}"
                data-toggle="tab"
                href="#"
                data-target="#hair"
                role="tab">Hair
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none h4 mb-0 font-weight-normal {% if site.first == 'fr' %}px-g w-auto{% endif %}"
                data-toggle="tab"
                href="#"
                data-target="#body"
                role="tab">Body
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none active h4 mb-0" data-target="#all" data-toggle="tab" href="#" role="tab" aria-controls="all">All</a>
            </li>
          </ul>
          <label for="rangeResultSelect" className="sr-only">Range Real Result</label>
          <select id="rangeResultSelect" data-toggle="select" className="custom-select custom-select-lg mb-4 mx-auto col-6 d-block d-md-none">
            <option value="#all" selected>All</option>
            <option value="#tan">Tan</option>
            <option value="#hair">Hair</option>
            <option value="#body">Body</option>
          </select>

          <div className="carousel slide carousel--loop carousel--real-result" data-slide-number="4" id="tan" data-interval="false">
            <div className="carousel--centered">
              <div className="carousel-inner row flex-nowrap mx-0">
                {reviews.map((rev: any, index: number) => <RealResultsCard content={rev} activeClass={index == 0 ? 'active' : ''} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export { RealResults };