const RealResultsCard = (props: any) => {
  const { content, activeClass } = props;
  return (
    <>
      <div className={`carousel-item col-9 col-lg-3 result-card ${activeClass}`}>
        <picture className="embed-responsive bg-shimmer">
          {content.image_media ? (
            <>
              <source srcSet={content.image_media.url} media="(min-width: 992px)" />
              <img className="embed-responsive-item fit--cover" alt="/" src={content.image_media.url} loading="lazy"/>
            </>
          ) : (
            <>
              <source srcSet={content.image_old} media="(min-width: 992px)" />
              <img className="embed-responsive-item fit--cover" alt="/" src={content.image_old} loading="lazy"/>
            </>
          )}
        </picture>
        <div className="p-2 bg-white h-100">
          <p className="d-flex justify-content-between align-items-center mb-0">
            <img className="svg text-primary h4 mb-0" src="icons/five-stars.svg" replace-to-svg />
          </p>
          <p>
            <strong>{content.label}:&nbsp;</strong>
            <a href={content.url} title={content.reviewon} className="text-underline">
              {content.reviewon}
            </a>
          </p>
          <p>{content.body}</p>
          <p className="text-underline font-weight-bold">{content.author}</p>
        </div>
      </div>

    </>
  )
}

export { RealResultsCard };