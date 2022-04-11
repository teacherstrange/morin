import Image from 'next/image'
import Footer from '@/components/module/footer'
import Header from '@/components/module/header'
import Layout from '@/components/module/layout'
import MorinButton from '@/components/utils/morinButton'
import EventCard from '@/components/module/eventCard'
import colors from '@/helpers/colors'

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
]

const Events = () => {
  return (
    <Layout>
      <Header />

      <div className="w-full bg-morin-skyBlue">
        <div className="relative w-full h-48 rounded-b-2xl overflow-hidden sm:h-60 md:h-80 lg:h-[470px]">
          <div className="relative w-full h-full">
            <Image
              priority
              src="/event/banner.jpg"
              placeholder="/event/banner.png"
              alt="Events"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full absolute-center text-center pt-12 px-8">
            <h1 className="font-nutmeg font-bold text-ctitle text-white leading-tight lg:text-h2 xl:text-h1">
              Latest Events
            </h1>
          </div>
        </div>

        <div className="px-4 my-5 md:my-10 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              {eventsData?.map((item, index) => (
                <div className="w-full" key={`${item.title}[${index}]`}>
                  <EventCard
                    imgSrc={item.image}
                    imgAlt={item.title}
                    type={item.type}
                    date={item.date}
                    title={item.title}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
            <div className="w-full mt-5 md:mt-10">
              <MorinButton
                arrow={false}
                color={colors.morinBlue}
                onClick={() => console.log('load more')}
              >
                Show More
              </MorinButton>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}

export default Events
