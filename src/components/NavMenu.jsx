import React from 'react'

const NavMenu = () => {
	return (
		<nav id="nav-menu"
			className="absolute -top-56 right-1 w-full max-w-[250px] rounded-lg bg-slate-800 py-4 shadow-xl transition duration-300 lg:static lg:flex lg:max-w-full lg:bg-transparent lg:shadow-none lg:transition-none">
			<ul tabIndex="0" className="space-y-2 lg:flex lg:translate-x-0 lg:space-y-0">
				<li className="group">
					<a id="nav-link" href="#home"
						className="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Home</a>
				</li>
				<li tabIndex="0" className="dropdown-hover group dropdown">
					<a id="nav-link" href="#about"
						className="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">About
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
						className="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Services</a>
				</li>
				<li className="group">
					<a id="nav-link" href="#footer"
						className="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Contacts</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavMenu