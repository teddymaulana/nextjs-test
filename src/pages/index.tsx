import { HeroCarousel } from '@/layouts/HeroCarousel';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation 2"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <HeroCarousel></HeroCarousel>
    </Main>
  );
};

export default Index;
