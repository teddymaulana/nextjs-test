import { useQuery } from 'react-query';

import { Meta } from '@/layouts/Meta';
import { HeroCarousel } from '@/layouts/sections/HeroCarousel';
import { HomeRanges } from '@/layouts/sections/HomeRanges';
import { Logos } from '@/layouts/sections/Logos';
import { ProductCarousel } from '@/layouts/sections/ProductCarousel';
import { ServicesHome } from '@/layouts/sections/ServicesHome';
import { Main } from '@/templates/Main';
import { getHomepage } from '@/utils/api';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const { data, status } = useQuery('Sections', getHomepage);
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
      <HeroCarousel status={status} content={heroCarousel}></HeroCarousel>
      <ProductCarousel
        status={status}
        content={sectionProducts}
      ></ProductCarousel>
      <HomeRanges status={status} content={sectionRanges}></HomeRanges>
      <ServicesHome></ServicesHome>
      <Logos status={status} content={sectionLogo}></Logos>
    </Main>
  );
};

export default Index;
