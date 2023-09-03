import { useEffect, useState } from 'react';
import companyLogo from '../assets/images/logo-benadika.png';
import NavMenu from './NavMenu';

const Header = () => {
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
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className={`${isScrolled ? 'navbar-fixed' : ''} absolute top-0 left-0 z-20 flex w-full items-center bg-transparent transition duration-300 ease-in-out`}>
			<div className="container sm:px-3">
				<div className="relative flex items-center justify-between">
					<div className="px-4 py-2">
						<img src={companyLogo} alt="Logo Benawa" className="w-12 md:w-16 lg:w-20" />
					</div>
					<div className="flex items-center px-4 py-4">
						<button id="hamburger-btn" onClick={toggleMenu} className={`${isMenuOpen ? 'hamburger-active' : ''} absolute right-4 lg:hidden`}>
							<span id="hamburger"
								className={`${isMenuOpen ? 'hamburger-onscroll' : 'hamburger-line'} origin-top-left transition duration-300 ease-in-out`}></span>
							<span id="hamburger" className={`${isMenuOpen ? 'hamburger-onscroll' : 'hamburger-line'} transition duration-300 ease-in-out`}></span>
							<span id="hamburger" className={`${isMenuOpen ? 'hamburger-onscroll' : 'hamburger-line'} origin-top-left transition duration-300 ease-in-out`}></span>
						</button>
						{/* <NavMenu /> */}
						<nav id="nav-menu"
							className={`${isMenuOpen ? 'hamburger-show' : ''} absolute -top-56 right-1 w-full max-w-[250px] rounded-lg bg-slate-800 py-4 shadow-xl transition duration-300 lg:static lg:flex lg:max-w-full lg:bg-transparent lg:shadow-none lg:transition-none`}>
							<ul tabIndex="0" className="space-y-2 lg:flex lg:translate-x-0 lg:space-y-0">
								<li className="group">
									<a id="nav-link" href="#home"
										className={`${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl`}>Home</a>
								</li>
								<li tabIndex="0" className="dropdown-hover group dropdown">
									<a id="nav-link" href="#about"
										className={`${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl`}>About
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
										className={`${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl`}>Services</a>
								</li>
								<li className="group">
									<a id="nav-link" href="#footer"
										className={`${isScrolled ? 'navlink-onscroll' : 'text-slate-300 group-hover:text-white'}border-link mx-8 inline-block py-1 text-base font-medium after:content-[''] lg:text-xl`}>Contacts</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header