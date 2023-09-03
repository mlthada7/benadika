import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import About from './About'
import VisionMission from './VisionMission'
import Services from './Services'
import companyLogo from '../assets/images/logo-benadika.png';
import NavMenu from './NavMenu';

const Main = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header
                className={`${isScrolled ? 'navbar-fixed' : ''} absolute top-0 left-0 z-20 flex w-full items-center bg-transparent transition duration-300 ease-in-out`}>
                <div className="container sm:px-3">
                    <div className="relative flex items-center justify-between">
                        <div className="px-4 py-2">
                            <img src={companyLogo} alt="Logo Benawa" className="w-12 md:w-16 lg:w-20" />
                        </div>
                        <div className="flex items-center px-4 py-4">
                            <div id="hamburger-btn"
                                onClick={toggleMenu}
                                // onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`absolute right-4 lg:hidden cursor-pointer ${isMenuOpen ? 'hamburger-active' : ''}`}>
                                {/* TODO: Fixed burger line on top on open */}
                                <span
                                    // id="hamburger"
                                    className={`origin-top-left transition duration-300 ease-in-out ${isScrolled ? 'hamburger-onscroll' : 'hamburger-line'}`}></span>
                                <span
                                    // id="hamburger" 
                                    className={`transition duration-300 ease-in-out ${isScrolled ? 'hamburger-onscroll' : 'hamburger-line'}`}></span>
                                <span
                                    // id="hamburger" 
                                    className={`origin-top-left transition duration-300 ease-in-out ${isScrolled ? 'hamburger-onscroll' : 'hamburger-line'}`}></span>
                            </div>
                            {/* <NavMenu /> */}
                            <nav id="nav-menu"
                                className={`${isMenuOpen ? 'hamburger-show' : ''} absolute -top-56 right-1 w-full max-w-[250px] rounded-lg bg-slate-800 py-4 shadow-xl transition duration-300 lg:static lg:flex lg:max-w-full lg:bg-transparent lg:shadow-none lg:transition-none`}>
                                <ul tabIndex="0" className="space-y-2 lg:flex lg:translate-x-0 lg:space-y-0">
                                    <li className="group">
                                        <a id="nav-link" href="#home"
                                            className={`border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl ${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}`}>Home</a>
                                    </li>
                                    <li tabIndex="0" className="dropdown-hover group dropdown">
                                        <a id="nav-link" href="#about"
                                            className={`border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl ${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}`}>About
                                            Us</a>
                                        <ul id="about-dropdown"
                                            className="dropdown-content menu menu-compact w-48 rounded-md bg-primary-blue-light p-2 shadow-lg lg:menu-normal">
                                            {/* <li className='group'> */}
                                            <li>
                                                <a href="#visimisi"
                                                    className="text-slate-100 hover:text-white hover:bg-primary-blue-dark active:bg-primary-red">Vision
                                                    & Mission</a>
                                            </li>
                                            <li className='group'>
                                                <a href="#teams"
                                                    className="text-slate-100 hover:text-white hover:bg-primary-blue-dark active:bg-primary-red">Our
                                                    Teams</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="group">
                                        <a id="nav-link" href="#services"
                                            className={`border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl ${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}`}>Services</a>
                                    </li>
                                    <li className="group">
                                        <a id="nav-link" href="#footer"
                                            className={`border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl ${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}`}>Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main className={`relative ${isMenuOpen ? 'dimmer' : ''}`}>
                <Hero />
                <About />
                <VisionMission />
                <Services />
                {/* Gallery start */}
                {/* <section id="gallery" className="pt-36 pb-32">
                <div className="container">
                    <div className="w-full px-5 sm:px-7 md:px-10 lg:px-7">
                        <div className="mx-auto lg:w-3/4">
                            <h2
                                className="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-primary-blue md:text-3xl">
                                Gallery</h2>
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <img src={activity1Img} alt="Activity 1" className="mb-2 w-5 rounded-md bg-slate-700" />
                                </div>
                                <div className="item">
                                    <img src={activity2Img} alt="Activity 2" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity3Img} alt="Activity 3" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity4Img} alt="Activity 4" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity5Img} alt="Activity 5" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity6Img} alt="Activity 6" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity7Img} alt="Activity 7" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity8Img} alt="Activity 8" className="mb-2 w-full rounded-md" />
                                </div>
                                <div className="item">
                                    <img src={activity9Img} alt="Activity 9" className="mb-2 w-full rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section> */}
                {/* Gallery end */}
                {/* CTA start */}
                <section
                    className="after:to-transparents relative flex h-80 items-center bg-map bg-contain bg-center bg-no-repeat after:absolute after:bottom-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-slate-200 after:content-[''] md:h-96">
                    <div className="container relative z-[10]">
                        <div className="px-5 text-center">
                            <h1 className="text-2xl font-bold capitalize tracking-wide text-slate-800 md:text-3xl">Our services
                                reach all regions in Indonesia</h1>
                            <p className="mt-3 text-base text-slate-800 lg:text-lg">Don't hesitate to contact us to discuss more.
                            </p>
                        </div>
                    </div>
                </section>
                {/* CTA end */}
            </main>

            {/* Scroll-to-top */}
            <a href="#home" id="to-top"
                className="fixed bottom-4 right-4 z-[900] hidden h-14 w-14 rounded-full bg-primary-blue-light p-4 hover:animate-pulse">
                <span className="mx-auto mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
            </a>
        </>
    )
}

export default Main