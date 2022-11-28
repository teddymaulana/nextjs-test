const Logos = (props) => {
  const { status, content } = props;
  return (
    <>
      {status === 'success' && (
        <section className="list-logo container py-4 text-center">
          <p className="h1">{props.Heading}</p>
          <div className="row align-items-center mx-auto flex-row flex-wrap">
            <div className="d-flex col-12 col-lg-11 align-items-center justify-content-center mx-auto flex-row flex-wrap">
              {[1, 2, 3, 4, 5, 6].map(
                (index) =>
                  content[`logo_img_${index}`] && (
                    <picture
                      className="col-4 col-lg-2 py-3"
                      key={`logo${index}`}
                    >
                      <source srcSet={content[`logo_img_${index}`].url} />
                      <img
                        className="mw-100"
                        alt="/"
                        src={content[`logo_img_${index}`].url}
                      />
                    </picture>
                  )
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export { Logos };
