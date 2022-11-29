const Instagram = (props: any) => {
  const { content } = props;
  console.log('Ins', content)
  return (
    <section className="instagram pt-4 text-center bg-primary-light container-fluid">
      <div className="row">
        <div className="col-11 col-lg-6 text-center mx-auto pb-4">
          <p className="h2" role="heading">{content.title}</p>
          <p className="h4">
            <a href="https://www.instagram.com/cocoandeve/" target="_blank" className="text-dark text-underline" aria-label="Go to CocoandEve Instagram" title="opens in a new window">@cocoandeve</a>
          </p>
          <p className="h4 font-weight-normal mb-0">{content.description}</p>
        </div>
      </div>
      <div id="Instafeed-1" className="instagram--feed instagram-{{ section.id }} p-1 p-lg-0" data-section-id="{{ section.id }}" data-section-type="instagram">
        <div className="row flex-nowrap p-sm-0 pb-sm-1 p-md-1">
          <div className="instagram--feed--left col-12 p-0">
            <div className="row  m-0">
              <div className="col-12 col-lg-8 p-0">
                <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
              </div>
              <div className="col-12 col-lg-4 p-0">
                <div className="row m-0 ">
                  <div className="col-lg-12 col-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-6 col-lg-12 p-0 ">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-4 p-0">
                <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
              </div>
              <div className="col-6 col-lg-4 p-0">
                <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
              </div>
              <div className="col-lg-4 p-0 d-none d-md-inline-block">
                <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
              </div>
            </div>
          </div>
          <div className="instagram--feed--right col-12 d-none p-0 d-md-inline-block">
            <div className="row  m-0">
              <div className="col-lg-6 p-0">
                <div className="row  m-0">
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-12 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="row m-0">
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6  p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                  <div className="col-lg-6 p-0">
                    <a href="#" target="_blank" className="d-block instagram--feed--link" aria-label="Instagram Feed" title="opens in a new window"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Instagram };