import { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Layout from '@/components/module/layout';
import Header from '@/components/module/header';
import Footer from '@/components/module/footer';
import Container from '@/components/module/container';
import ScrollTriggerWrapper from '@/components/utils/scrolltrigger.jsx';
import FancyLink from '@/components/utils/fancyLink';
import { fade } from '@/helpers/transitions';
import locooptions from '@/helpers/locooptions';
import colors from '@/helpers/colors';
import PushScrollGlobal from '@/helpers/globalscroll';
import HeroSlider from '@/components/sliders/heroSlider';
import HighlightSlider from '@/components/sliders/highlightSlider';
import InstagramSlider from '@/components/sliders/instagramSlider';
import RecipeSlider from '@/components/sliders/recipeSlider';
import MorinButton from '@/components/utils/morinButton';
import HeroCategory from '@/components/module/heroCategory';
import { HeartSmall, HeartLarge, Scribble } from '@/components/utils/svg';

const categoryData = [
  {
    imgSrc: '/category/category-1.jpg',
    imgProduct: '/category/hover-1.png',
    imgPlaceholder: '/category/category-1.png',
    imgAlt: 'Spreads',
    title: 'Spreads',
    link: '/products/spreads',
  },
  {
    imgSrc: '/category/category-2.jpg',
    imgProduct: '/category/hover-2.png',
    imgPlaceholder: '/category/category-2.png',
    imgAlt: 'Jams',
    title: 'Jams',
    link: '/products/jams',
  },
  {
    imgSrc: '/category/category-3.jpg',
    imgProduct: '/category/hover-3.png',
    imgPlaceholder: '/category/category-3.png',
    imgAlt: 'Toppings',
    title: 'Toppings',
    link: '/products/toppings',
  },
  {
    imgSrc: '/category/category-4.jpg',
    imgProduct: '/category/hover-4.png',
    imgPlaceholder: '/category/category-4.png',
    imgAlt: 'Fillings',
    title: 'Fillings',
    link: '/products/fillings',
  },
];

const recipeData = [
  {
    imgSrc: '/recipe/recipe-1.jpg',
    imgPlaceholder: '/recipe/recipe-1.png',
    imgAlt: 'Mixed Berry Jam Tartlets',
    title: 'Mixed Berry Jam Tartlets',
    link: '/recipe/recipe-id',
  },
  {
    imgSrc: '/recipe/recipe-2.jpg',
    imgPlaceholder: '/recipe/recipe-2.png',
    imgAlt: 'Strawberry Trifle',
    title: 'Strawberry Trifle',
    link: '/recipe/recipe-id',
  },
  {
    imgSrc: '/recipe/recipe-3.jpg',
    imgPlaceholder: '/recipe/recipe-3.png',
    imgAlt: 'Chocolate Fudge Cupcakes',
    title: 'Chocolate Fudge Cupcakes',
    link: '/recipe/recipe-id',
  },
];

const highlightData = [
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Morin in UPH',
    title: 'Morin in UPH',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-2.jpg',
    imgPlaceholder: '/highlight/highlight-2.png',
    imgAlt: 'Cooking Workshop',
    title: 'Cooking Workshop',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Brown Fox Jumps',
    title: 'Brown Fox Jumps',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Morin in UPH',
    title: 'Morin in UPH',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-2.jpg',
    imgPlaceholder: '/highlight/highlight-2.png',
    imgAlt: 'Cooking Workshop',
    title: 'Cooking Workshop',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
  {
    imgSrc: '/highlight/highlight-1.jpg',
    imgPlaceholder: '/highlight/highlight-1.png',
    imgAlt: 'Brown Fox Jumps',
    title: 'Brown Fox Jumps',
    date: '24 Juli 2021',
    link: '/highlight/highlight-id',
  },
];


export default function Home() {
  const containerRef = useRef(null);

  // SET OBJECT ANIMATION
  // const animationObj = {
  //   '(min-width: 751px)': [
  //     () => {
  //       const id = 'si01';
  //       const elem = '.scrollsection .line';
  //       const settings = {
  //         scrollTrigger: {
  //           id: id,
  //           trigger: '.scrollsection', // which page section will be tracked as the scroll trigger
  //           scroller: '#scroll-container', // id of scroll container
  //           scrub: true,
  //           start: 'top 0%',
  //           end: '+=100%',
  //           // onUpdate: (e) => { console.log('1', Math.round(e.progress * 100)) }
  //         },
  //       };
  //       const animation = [
  //         {
  //           set: [
  //             elem,
  //             {
  //               background: 'rgba(253, 230, 138, 1)',
  //             },
  //           ],
  //         },
  //         {
  //           to: [
  //             elem,
  //             {
  //               scaleX: 0,
  //               transformOrigin: 'left center',
  //               background: 'rgba(253, 230, 138, 0)',
  //               ease: 'none',
  //               duration: 1,
  //             },
  //             0,
  //           ],
  //         },
  //       ];
  //       return { id, elem, settings, animation };
  //     },
  //   ],
  //   '(max-width: 750px)': [
  //     () => {
  //       const id = 'si02';
  //       const elem = '.scrollsection .line';
  //       const settings = {
  //         scrollTrigger: {
  //           id: id,
  //           trigger: '.scrollsection', // which page section will be tracked as the scroll trigger
  //           scroller: '#scroll-container', // id of scroll container
  //           scrub: true,
  //           start: 'top 0%',
  //           end: '+=100%',
  //           // onUpdate: (e) => { console.log('2', Math.round(e.progress * 100)) }
  //         },
  //       };
  //       const animation = [
  //         {
  //           set: [
  //             elem,
  //             {
  //               background: 'rgba(253, 230, 138, 0)',
  //             },
  //           ],
  //         },
  //         {
  //           to: [
  //             elem,
  //             {
  //               scaleX: 0,
  //               transformOrigin: 'left center',
  //               background: 'rgba(253, 230, 138, 1)',
  //               ease: 'none',
  //               duration: 2,
  //             },
  //             0,
  //           ],
  //         },
  //       ];
  //       return { id, elem, settings, animation };
  //     },
  //   ],
  // };

  useEffect(() => {
    window.addEventListener('LocoCall', (e) => {
      console.log('triggered', e.detail);
    });
    return () => {};
  }, []);

  return (
    <>
      <NextSeo title='Home' />

      {/* LOCOMOTIVE SCROLL DEFAULT */}
      <LocomotiveScrollProvider
        options={locooptions}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div
          data-scroll-container
          ref={containerRef}
          id='scroll-container'
          className='test test2 test3'
        >
          <div data-scroll-section>
            {/* SCROLL TRIGGER WRAPPER */}
            {/* <ScrollTriggerWrapper animation={animationObj}> */}
              {/* CONTENT STARTS */}
              <Header />
              <LazyMotion features={domAnimation}>
                <m.div
                  initial='initial'
                  animate='enter'
                  exit='exit'
                  variants={fade}
                >
                  <Layout>
                    {/* Slider Section */}
                    <section className='scrollsection'>
                      <HeroSlider className='min-h-screen w-full' />
                    </section>
                    {/* Sticky Section */}
                    <section>
                      <Container
                        border={false}
                        background={colors.offWhite}
                        bgTail={true}
                        safeWidth={false}
                        className='!px-0'
                      >
                        <div className='flex w-full flex-col lg:flex-row flex-nowrap lg:items-start'>
                          {/* Sticky */}
                          <div className='home-sticky w-full shrink-0 px-8 lg:sticky lg:top-[86px] lg:min-w-fit lg:flex lg:min-h-[calc(100vh-86px)] lg:w-3/12 lg:flex-col lg:justify-between 2xl:px-0'>
                            <div className='mt-24 mb-20 lg:mt-7 lg:max-w-sm lg:pr-8 max-w-lg mx-auto'>
                              <h2 className=' mb-5 text-center font-nutmeg text-mtitle font-normal leading-tight text-morin-blue lg:mb-[30px] lg:text-left lg:text-ctitleSmall xl:leading-[32px] '>
                                Jodohnya Roti! Lorem Ipsum sit Amet Lorem Ipsum
                                Amet Lorem.
                              </h2>
                              <MorinButton
                                destination='/products'
                                color={colors.morinBlue}
                                className='lg:mx-0'
                              >
                                See All Products
                              </MorinButton>
                            </div>
                            <div className='mx-auto mb-5 flex flex-wrap justify-center lg:mx-0 lg:mb-10 space-x-4 lg:space-x-6 lg:justify-start'>
                              <div className='relative h-8 w-8 lg:h-12 lg:w-12'>
                                <Image
                                  src={`/halal.svg`}
                                  alt={'Halal'}
                                  layout='fill'
                                  objectFit='contain'
                                />
                              </div>
                              <div className='relative h-8 w-8 lg:h-12 lg:w-12'>
                                <Image
                                  src={`/pom.svg`}
                                  alt={'Badan POM'}
                                  layout='fill'
                                  objectFit='contain'
                                />
                              </div>
                              <div className='relative  -8 w-8 lg:h-12 lg:w-12'>
                                <Image
                                  src={`/topbrand.svg`}
                                  alt={'Top Brand'}
                                  layout='fill'
                                  objectFit='contain'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='shrink w-full '>
                            {categoryData?.map((i) => (
                              <div
                                className='relative min-h-screen overflow-hidden'
                                key={i.title}
                              >
                                <HeroCategory
                                  imgSrc={i.imgSrc}
                                  imgProduct={i.imgProduct}
                                  imgPlaceholderProduct={i.imgProduct}
                                  imgPlaceholder={i.imgPlaceholder}
                                  imgAlt={i.imgAlt}
                                  title={i.title}
                                  link={i.link}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </Container>
                    </section>
                    <section>
                      <Container
                        border={true}
                        background={colors.morinPeach}
                        bgTail={true}
                        safeWidth={true}
                      >
                        <div className='flex w-full flex-wrap'>
                          <div className='mb-8 w-full text-center md:w-7/12 md:text-left lg:mb-5 xl:mb-11 xl:w-8/12'>
                            <h2 className='relative mx-auto mb-4 max-w-[175px] font-nutmeg text-ctitle font-bold leading-tight text-morin-red md:mx-0 md:mb-2 md:max-w-fit lg:text-h2 lg:leading-tight xl:text-h1'>
                              Recipes <br className='md:hidden' /> from Love
                              <div className='absolute -top-0.5 left-[calc(100%-15px)] w-8 md:hidden'>
                                <HeartSmall className='md:hidden' />
                              </div>
                              <div className='lg:w-18 absolute -top-1 left-[calc(100%+5px)] hidden w-14 md:block lg:top-2 lg:left-[calc(100%+10px)] xl:w-24'>
                                <HeartLarge className='hidden md:block' />
                              </div>
                            </h2>
                            <p className='mx-auto max-w-[300px] text-[9px] text-morin-red sm:text-defaultSmall md:mx-0 lg:max-w-[500px] lg:text-default xl:max-w-[600px]'>
                              Lorem Ipsum Dolor sit Amet Lorem Ipsum Dolor sit
                              Amet Lorem Ipsum Dolor sit Amet Lorem Ipsum Amet
                              Lorem Ipsum.
                            </p>
                            {/* <div className="block min-w-[175px] mx-auto lg:hidden">
                              <RecipeTitleMobile />
                            </div>
                            <div className="hidden lg:block">
                              <RecipeTitleDesktop />
                            </div> */}
                          </div>
                          <div className='order-3 w-full md:order-none md:ml-auto md:w-fit md:pl-12'>
                            <MorinButton
                              destination='/recipes'
                              color={colors.morinRed}
                            >
                              See All Recipes
                            </MorinButton>
                          </div>
                          <div className='-mx-8 mb-8 w-[calc(100%+64px)] md:-mx-4 md:mb-0 md:w-[calc(100%+32px)]'>
                            <RecipeSlider data={recipeData} />
                          </div>
                        </div>
                      </Container>
                    </section>
                    <section>
                      <Container
                        border={true}
                        background={colors.morinSkyBlue}
                        bgTail={true}
                        safeWidth={true}
                        classNameOuter='pb-0'
                      >
                        <div className='flex w-full flex-wrap'>
                          <div className='mb-6 w-full text-center md:w-7/12 md:text-left lg:mb-10 xl:mb-14 xl:w-8/12'>
                            <h2 className='relative mx-auto mb-0 max-w-[160px] pb-5 font-nutmeg text-ctitle font-bold leading-none text-morin-blue md:mx-0 md:mb-2 md:w-fit md:max-w-none md:pb-0 lg:text-h2'>
                              Events Highlight
                              <div className='absolute left-1/2 bottom-0 h-3.5 w-full -translate-x-1/2 md:left-auto md:right-0 md:-bottom-4 md:w-40 md:translate-x-0 lg:-bottom-5 lg:h-5 lg:w-60'>
                                <Scribble />
                              </div>
                            </h2>
                          </div>
                          <div className='ml-auto hidden w-fit pl-12 md:block'>
                            <MorinButton
                              destination='/events'
                              color={colors.morinBlue}
                            >
                              See All Events
                            </MorinButton>
                          </div>
                        </div>
                      </Container>
                      <div className='relative overflow-hidden bg-morin-skyBlue px-8 pb-10 md:px-0 xl:pb-14'>
                        <HighlightSlider data={highlightData} />
                        <div className='mx-auto mt-7 w-fit md:hidden'>
                          <MorinButton
                            destination='/events'
                            color={colors.morinBlue}
                          >
                            See All Events
                          </MorinButton>
                        </div>
                        <div
                          className={`absolute bottom-0 -z-1 h-10 w-full translate-y-full bg-morin-skyBlue`}
                        />
                      </div>
                    </section>
                    <section>
                      <Container
                        border={true}
                        bgTail={true}
                        safeWidth={true}
                        background={colors.white}
                        classNameOuter='pb-0'
                      >
                        <div className='mb-8 flex w-full flex-wrap'>
                          <h2 className='mx-auto mt-0 mb-2 w-full max-w-[260px] text-center font-nutmeg text-mtitleSmall font-normal leading-tight text-morin-blue md:mx-0 md:mb-0 md:w-[calc(100%-135px)] md:max-w-none md:pr-4 md:text-left lg:text-ctitle xl:text-mtitleBig'>
                            Get Daily Inspirations from our Social Media
                          </h2>
                          <div className='w-full md:flex md:w-32 md:items-end'>
                            <FancyLink
                              destination='https://www.instagram.com/morin_jam/'
                              blank
                              className='mx-auto flex h-6 w-fit flex-wrap items-center rounded-full bg-morin-blue px-4 text-defaultSmall font-semibold text-white md:mb-1.5 md:mr-0 xl:h-7 xl:text-default'
                            >
                              <span className='pt-0.5 xl:pt-1'>@morin_jam</span>
                            </FancyLink>
                          </div>
                        </div>
                      </Container>
                      <div className='pb-10 xl:pb-14'>
                        <InstagramSlider />
                      </div>
                    </section>
                    <Footer />
                  </Layout>
                </m.div>
              </LazyMotion>
              {/* CONTENT ENDS */}
            {/* </ScrollTriggerWrapper> */}
          </div>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}
