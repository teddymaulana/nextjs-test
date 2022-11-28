
import { Meta } from '@/layouts/Meta';
import { HeroCarousel } from '@/layouts/sections/HeroCarousel';
import { HomeRanges } from '@/layouts/sections/HomeRanges';
import { Logos } from '@/layouts/sections/Logos';
import { ProductCarousel } from '@/layouts/sections/ProductCarousel';
import { ServicesHome } from '@/layouts/sections/ServicesHome';
import { Main } from '@/templates/Main';
import { getHomepage } from '@/utils/api';
import { AppConfig } from '@/utils/AppConfig';

const Index = (props: any) => {
  const { data, status } = props;
  console.log('data3', data);
  let heroCarousel = [];
  let sectionRanges = [];
  let sectionLogo = [];
  let sectionProducts = [];
  if (status === 'success') {
    heroCarousel = data.Sections.find(function (i: any) {
      /* eslint-disable no-underscore-dangle */
      return i.__component === 'section.slideshow';
    })[`slide_${AppConfig.store}`];

    sectionRanges = data.Sections.find(function (i: any) {
      return i.__component === 'section.featured-collection';
    });

    sectionLogo = data.Sections.find(function (i: any) {
      return i.__component === 'section.editors';
    });

    sectionProducts = data.Sections.find(function (i: any) {
      return i.__component === 'section.featured-products';
    });
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
      {heroCarousel && (<HeroCarousel status={status} content={heroCarousel}></HeroCarousel>)}
      <ProductCarousel
        status={status}
        content={sectionProducts}
      ></ProductCarousel>
      {sectionRanges &&  (<HomeRanges status={status} content={sectionRanges}></HomeRanges>)}
      <ServicesHome></ServicesHome>
      {sectionLogo && (<Logos status={status} content={sectionLogo}></Logos>)}
    </Main>
  );
};

export async function getServerSideProps() {
  const dataHomepage = await getHomepage();
  return {
    props: {
      data: dataHomepage,
      status: 'success'
    }
  }
}

export default Index;
