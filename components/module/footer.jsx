import Container from './container'
import FancyLink from '../utils/fancyLink'
import { InstagramSolid, TwitterSolid, FacebookSolid } from '../utils/svg'
import { defaultHover } from '../utils/tailwind-preset'

const Footer = ({ className, lang }) => {
  return (
    <footer className="px-4 lg:px-8 text-defaultSmall lg:text-default">
      <Container
        className={`relative w-full h-auto flex bg-morin-blue text-white rounded-t-3xl p-8 pt-10 md:flex-row md:justify-between md:px-10 md:pt-10 md:pb-10 lg:pt-16 lg:pb-20 ${className}`}
      >
        {/* LEFT */}
        <div className="flex flex-col w-full mb-8 md:w-3/5 md:max-w-sm md:mb-0 lg:max-w-lg">
          <h2 className="text-ctitleSmall font-bold font-nutmeg lg:text-mtitleBig">
            {lang === 'id' ? 'Mari Tetap Berhubungan!' : `Let's Stay In Touch!`}
          </h2>
          <span className="text-defaultSmall lg:text-default">
            {lang === 'id'
              ? 'Daftar untuk buletin mingguan kami, produk baru, promosi eksklusif, lowongan pekerjaan, dan banyak lagi.'
              : `Sign up for our weekly newsletter, new products, exclusive
              promotions, job openings, and more.`}
          </span>
          <form className="flex w-full mt-5  overflow-hidden lg:mt-6">
            <div className="relative flex flex-nowrap w-full h-10 lg:h-11">
              <input
                className="w-full h-full px-5 pt-1 border-2 rounded-l-2xl border-white first-letter:default-type text-defaultSmall leading-tight placeholder-white placeholder:opacity-60 outline-none bg-transparent lg:w-[calc(100%-100px)] lg:pt-[2px] lg:text-default"
                type="email"
                placeholder="Your Email"
              />
              <FancyLink
                destination=""
                className="h-full flex-grow-0 border-2 rounded-r-2xl border-l-0 border-white  pl-4 pr-6 pt-1 text-center default-type text-defaultSmall leading-none hover:bg-white hover:text-morin-blue transition-all duration-300 lg:w-24 lg:pt-[2px] lg:text-default"
              >
                {lang === 'id' ? 'Kirim' : 'Submit'}
              </FancyLink>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className="flex w-full md:w-2/5 md:justify-start md:ml-auto md:mt-auto h-full">
          <div className="flex flex-wrap flex-col w-1/2 space-y-3 md:w-auto md:ml-auto lg:min-w-[100px] lg:space-y-4">
            <FancyLink
              destination="/"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Beranda' : 'Home'}
            </FancyLink>
            <FancyLink
              destination="/about"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Tentang Kami' : 'About Us'}
            </FancyLink>
            <FancyLink
              destination="/product"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Produk' : 'Products'}
            </FancyLink>
            <FancyLink
              destination="/recipes"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Resep' : 'Recipes'}
            </FancyLink>
            <FancyLink
              destination="/events"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Acara' : 'Events'}
            </FancyLink>
            <FancyLink
              destination="/get-morin"
              className={`footer-link ${defaultHover}`}
            >
              {lang === 'id' ? 'Dapatkan Morin!' : 'Get Morin!'}
            </FancyLink>
          </div>
          <div className="flex flex-wrap flex-col justify-between w-1/2 md:w-auto md:ml-14 xl:mx-24">
            <div className="flex flex-wrap flex-col space-y-3 lg:space-y-4">
              <FancyLink
                destination="/faq"
                className={`footer-link ${defaultHover}`}
              >
                {lang === 'id' ? 'Tanya Jawab' : 'Faq'}
              </FancyLink>
              <FancyLink
                destination="/contact"
                className={`footer-link ${defaultHover}`}
              >
                {lang === 'id' ? 'Kontak Kami' : 'Contact Us'}
              </FancyLink>
            </div>
            <div className="w-full flex flex-col justify-end mt-auto">
              <div className="flex justify-start w-full space-x-1.5 lg:space-x-3 mb-4 lg:mb-4">
                <FancyLink
                  destination="/"
                  blank={true}
                  className={`relative  ${defaultHover}`}
                >
                  <InstagramSolid className="w-9 h-9" />
                </FancyLink>
                <FancyLink
                  destination="/"
                  blank={true}
                  className={`relative  ${defaultHover}`}
                >
                  <TwitterSolid className="w-9 h-9" />
                </FancyLink>
                <FancyLink
                  destination="/"
                  blank={true}
                  className={`relative  ${defaultHover}`}
                >
                  <FacebookSolid className="w-9 h-9" />
                </FancyLink>
              </div>
              <span className="">© Morin Food 2021</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
