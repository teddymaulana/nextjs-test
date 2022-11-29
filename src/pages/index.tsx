
import { Meta } from '@/layouts/Meta';
import { HeroCarousel } from '@/layouts/sections/HeroCarousel';
import { HomeRanges } from '@/layouts/sections/HomeRanges';
import { Logos } from '@/layouts/sections/Logos';
import { ProductCarousel } from '@/layouts/sections/ProductCarousel';
import { RealResults } from '@/layouts/sections/RealResults';
import { ServicesHome } from '@/layouts/sections/ServicesHome';
import { Instagram } from '@/layouts/sections/Instagram';
import { Main } from '@/templates/Main';
import { getHomepage, getRealResults } from '@/utils/api';
import { AppConfig } from '@/utils/AppConfig';

const Index = (props: any) => {
  const { homepage, realResults } = props;
  let heroCarousel = [];
  let sectionRanges = [];
  let sectionLogo = [];
  let sectionProducts = [];
  let sectionInstagram = [];
  let realResultsData = {};
  let products = [];
  if (homepage.status === 'success') {
    heroCarousel = homepage.data.Sections.find(function (i: any) {
      /* eslint-disable no-underscore-dangle */
      return i.__component === 'section.slideshow';
    })[`slide_${AppConfig.store}`];

    sectionRanges = homepage.data.Sections.find(function (i: any) {
      return i.__component === 'section.featured-collection';
    });

    sectionLogo = homepage.data.Sections.find(function (i: any) {
      return i.__component === 'section.editors';
    });

    sectionInstagram = homepage.data.Sections.find(function (i: any) {
      return i.__component === 'section.instagram';
    });

    sectionProducts = homepage.data.Sections.find(function (i: any) {
      return i.__component === 'section.featured-products';
    });

    products = homepage.data.productData;

    console.log('homepage', homepage);
  }

  if (realResults.status === 'success') {
    realResultsData = realResults.data;
  }
  

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation 2"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {heroCarousel && (<HeroCarousel status={homepage.status} content={heroCarousel}></HeroCarousel>)}
      <ProductCarousel
        status={homepage.status}
        content={sectionProducts}
        products={products}
      ></ProductCarousel>
      {sectionRanges &&  (<HomeRanges status={homepage.status} content={sectionRanges}></HomeRanges>)}
      <ServicesHome></ServicesHome>
      {sectionLogo && (<Logos status={homepage.status} content={sectionLogo}></Logos>)}
      <RealResults reviews={realResultsData}></RealResults>
      <Instagram content={sectionInstagram}></Instagram>
    </Main>
  );
};

export async function getStaticProps() {
  const dataHomepage = await getHomepage();
  const dataReviews = await getRealResults();
  return {
    props: {
      homepage: {
        data: dataHomepage,
        status: 'success'
      },
      realResults: {
        data: dataReviews,
        status: 'success'
      }
    }
  }
}

export default Index;
