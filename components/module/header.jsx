import { useState, useEffect } from 'react'
import Image from 'next/image'
import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/module/container'
import Hamburger from '../utils/hamburger'
import { MorinLogo, SunRay, SunRay15 } from '../utils/svg'

const navData = [
  {
    id: 'nav-1',
    title: 'About',
    value: 'about',
    ariaText: 'Navigate to the About page',
  },
  {
    id: 'nav-2',
    title: 'Products',
    value: 'products',
    ariaText: 'Navigate to the Products page',
  },
  {
    id: 'nav-3',
    title: 'Recipes',
    value: 'recipes',
    ariaText: 'Navigate to the Recipes page',
  },
  {
    id: 'nav-4',
    title: 'Events',
    value: 'events',
    ariaText: 'Navigate to the Events page',
  },
  {
    id: 'nav-5',
    title: 'Get Morin!',
    value: 'get-morin',
    ariaText: 'Navigate to the Get Morin page',
  },
]

export default function Header({ hamburgerColor }) {
  const defaultNav = navData[navData.length - 1]
  const [opened, setOpened] = useState(false)
  const [desktopNav, setDesktopNav] = useState(defaultNav?.value)
  const [thisEl, setThisEl] = useState(null)

  const toggleHamburgermenu = () => {
    setOpened((prev) => {
      const menu = document.querySelector('.mobileMenu')
      const body = document.querySelector('body')

      if (prev) {
        // change into closed state
        body.classList.remove('overflow-hidden')
        menu.classList.remove('opacity-100')
        menu.classList.remove('visible')
        menu.classList.add('opacity-0')
        setTimeout(() => menu.classList.add('invisible'), FIFODuration)
      }

      if (!prev) {
        // change into opened state
        body.classList.add('overflow-hidden')
        menu.classList.remove('opacity-0')
        menu.classList.remove('invisible')
        menu.classList.add('opacity-100')
        menu.classList.add('visible')
      }

      return !prev
    })
  }

  const handleActiveNav = (val, id) => {
    // do navigational function here

    measureEl(id)
    setDesktopNav(val)
  }

  const measureEl = (id) => {
    const parent = document
      .querySelector('.header-switch')
      .getBoundingClientRect()
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect()
    const left = current.left - parent.left

    setThisEl(left)
  }

  useEffect(() => {
    // measureEl(defaultNav?.id);
  }, [])

  const mobileLink = `font-nutmeg font-bold text-white text-mtitleBig leading-none`
  const FIFODuration = 300

  return (
    <header className="default-type header-custom pointer-events-none fixed top-0 left-0 right-0 z-10 w-full pt-8">
      <Container>
        <div className="flex flex-row flex-wrap items-center justify-between">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            className="group pointer-events-auto relative h-14 max-md:ml-3 max-md:p-0"
          >
            <MorinLogo className="relative z-2 h-full w-full" />
            <div className="pointer-events-none absolute  top-[50%] left-[50%] -z-1 translate-x-[-50%] translate-y-[-50%] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <SunRay15 className="h-96 w-96 animate-spin-slow" />
            </div>
          </FancyLink>
          <nav className="flex p-1.5 rounded-[46px] bg-white shadow-header">
            <FancyLink
              destination="/about"
              className="w-[103px] flex justify-center items-center h-8 rounded-full font-semibold leading-none pt-[2px]"
            >
              About
            </FancyLink>
            <FancyLink
              destination="/products"
              className="w-[103px] flex justify-center items-center h-8 rounded-full font-semibold leading-none pt-[2px]"
            >
              Products
            </FancyLink>
            <FancyLink
              destination="/recipe"
              className="w-[103px] flex justify-center items-center h-8 rounded-full font-semibold leading-none pt-[2px]"
            >
              Recipes
            </FancyLink>
            <FancyLink
              destination="/events"
              className="w-[103px] flex justify-center items-center h-8 rounded-full font-semibold leading-none pt-[2px]"
            >
              Events
            </FancyLink>
            <FancyLink
              destination="/"
              className="w-[103px] flex justify-center items-center h-8 rounded-full font-semibold text-white bg-morin-blue leading-none pt-[2px]"
            >
              Get Morin!
            </FancyLink>
          </nav>
          {/* <nav
            className='header-switch pointer-events-auto hidden p-1.5 lg:flex'
            onSubmit={(e) => e.preventDefault()}
          >
            {navData?.map((item) => (
              <div key={item.id} className='header-switch__item h-8'>
                <input
                  type='radio'
                  name='desktop-nav'
                  className='header-switch__input sr-only'
                  id={item.id}
                  value={item.value}
                  checked={item.value === desktopNav}
                  onChange={(e) => handleActiveNav(e.target.value, item.id)}
                />
                <label
                  className='header-switch__label h-full  pt-[2px] leading-none relative flex items-center justify-center rounded-full cursor-pointer select-none'
                  htmlFor={item.id}
                >
                  {item.title}
                </label>
              </div>
            ))}
            {thisEl ? (
              <div
                aria-hidden='true'
                style={{ transform: `translate(${thisEl}px, -50%)` }}
                className='header-switch__marker h-8 '
              />
            ) : (
              ''
            )}
          </nav> */}

          {/* MOBILE */}
          <Hamburger
            className="block lg:hidden"
            opened={opened}
            onClick={() => toggleHamburgermenu()}
            color={hamburgerColor}
          />
          <div
            className={`mobileMenu fixed top-0 left-0 h-screen w-full bg-morin-blue transition ease-in-out duration-${FIFODuration} invisible -z-1 opacity-0 lg:hidden`}
          >
            <div className="absolute -top-3/4 left-1/2 -z-1 -translate-x-1/2">
              <SunRay className="block w-[1000px] animate-spin-slow" />
            </div>
            <div className="relative z-1 flex h-full w-full items-center justify-center pb-20">
              <nav className="flex w-full flex-col space-y-[35px] text-center">
                <FancyLink
                  destination="/about"
                  a11yText="Navigate to the About Page"
                  className={mobileLink}
                >
                  About
                </FancyLink>
                <FancyLink
                  destination="/products"
                  a11yText="Navigate to the Products Page"
                  className={mobileLink}
                >
                  Products
                </FancyLink>
                <FancyLink
                  destination="/recipes"
                  a11yText="Navigate to the Recipes Page"
                  className={mobileLink}
                >
                  Recipes
                </FancyLink>
                <FancyLink
                  destination="/events"
                  a11yText="Navigate to the Events Page"
                  className={mobileLink}
                >
                  Events
                </FancyLink>
                <FancyLink
                  blank={true}
                  destination={'/'}
                  a11yText="Navigate to the about page"
                  className={mobileLink}
                >
                  Get Morin!
                </FancyLink>
              </nav>
              <div className="absolute bottom-20 left-1/2 mx-auto flex w-fit -translate-x-1/2 items-center space-x-1.5 rounded-full bg-white p-1.5">
                <FancyLink
                  destination="/"
                  blank={true}
                  className="flex leading-none"
                >
                  <Image
                    src={`/ig.svg`}
                    alt={'Instagram'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink
                  destination="/"
                  blank={true}
                  className="flex leading-none"
                >
                  <Image
                    src={`/tw.svg`}
                    alt={'Twitter'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
                <FancyLink
                  destination="/"
                  blank={true}
                  className="flex leading-none"
                >
                  <Image
                    src={`/fb.svg`}
                    alt={'Facebook'}
                    width={36}
                    height={36}
                  />
                </FancyLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
