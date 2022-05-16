import { useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/module/footer';
import Header from '@/components/module/header';
import Layout from '@/components/module/layout';
import StrokeButton from '@/components/micro-module/strokeButton';
import EventCard from '@/components/shared-module/eventCard';
import colors from '@/helpers/colors';
import { useEffectInit } from '@/components/utils/preset';
import { useAppContext } from 'context/state';
import client from '@/helpers/sanity/client';
import urlFor from '@/helpers/sanity/urlFor';

const eventsData = [
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Morin in UPH',
    image: '/event/event-1.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Workshop',
    date: '24 Juli 2021',
    title: 'Cooking Workshop',
    image: '/event/event-2.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Factory Tour with SDN',
    image: '/event/event-3.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Morin in UPH',
    image: '/event/event-1.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Workshop',
    date: '24 Juli 2021',
    title: 'Cooking Workshop',
    image: '/event/event-2.jpg',
    link: '/events/event-id',
  },
  {
    type: 'Group Event',
    date: '24 Juli 2021',
    title: 'Factory Tour with SDN',
    image: '/event/event-3.jpg',
    link: '/events/event-id',
  },
];

const Events = ({eventAPI}) => {
  const ctx = useAppContext();
  useEffect(() => {
    useEffectInit({ context: ctx, mobileDark: false });

    return () => {};
  }, []);

  return (
    <Layout>
      <div className='w-full bg-morin-skyBlue'>
        <div className='relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]'>
          <div className='relative w-full h-full'>
            <Image
              priority
              src='/event/banner.jpg'
              placeholder='/event/banner.png'
              alt='Events'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className='w-full absolute-center text-center pt-12 px-8'>
            <h1 className='font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1'>
              Latest Events
            </h1>
          </div>
        </div>

        <div className='px-4 my-5 md:my-10 md:px-8'>
          <div className='max-w-screen-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
              {eventAPI?.map((item, index) => (
                <div className='w-full' key={`${item.title}[${index}]`}>
                  <EventCard
                    imgSrc={urlFor(item.thumbnail).url()}
                    imgAlt={item.title}
                    type={item.eventCategory[0].title}
                    date={item.date}
                    title={item.title}
                    link={`/events/${item.slug.current}`}
                  />
                </div>
              ))}
            </div>
            <div className='w-full mt-5 md:mt-10'>
              <StrokeButton
                arrow={false}
                color={colors.morinBlue}
                onClick={() => console.log('load more')}
              >
                Show More
              </StrokeButton>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const eventAPI = await client.fetch(`
  *[_type == "eventList"] {
    ...,
    eventCategory[]->,
  }
  `)
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)
  return {
    props: {
      eventAPI,
      seoAPI,
      footerAPI,
    },
  }
}

export default Events;
