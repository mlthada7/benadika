import React from 'react'
import phoneIcon from '../assets/images/icons8-phone-96.png';
import addressIcon from '../assets/images/address-icon.png';
import emailIcon from '../assets/images/email-icon.png';
import webIcon from '../assets/images/website-icon.png';
import companyLogo from '../assets/images/logo-benadika.png';

const Footer = () => {
	return (
		<footer id="footer" className="footer bg-slate-200 px-5 py-16 text-base sm:px-7 md:px-8 xl:px-20">
			<div className="md:mr-16">
				<img src={companyLogo} alt="Logo Benawa" className="w-24 md:w-16 lg:w-24" />
				<p className="text-lg font-bold">PT. Benawa Adika Darya</p>
			</div>
			<div className="md:mr-16">
				<span className="footer-title">Company</span>
				<a href="#about" className="duration-800 transition ease-in-out hover:text-primary-red">About Us</a>
				<a href="#visimisi" className="duration-800 transition ease-in-out hover:text-primary-red">Vission &
					Mission</a>
				<a href="#services" className="duration-800 transition ease-in-out hover:text-primary-red">Services</a>
				<a href="#teams" className="duration-800 transition ease-in-out hover:text-primary-red">Our Teams</a>
				<a href="#footer" className="duration-800 transition ease-in-out hover:text-primary-red">Contact</a>
			</div>
			<div>
				<span className="footer-title">Contact</span>
				<div className="mb-1 flex">
					<div>
						<img src={phoneIcon} alt="Phone icon" className="mr-2 w-7" />
					</div>
					<div>
						+62 813-9566-2881 - Intan Nurbaety <br />
						+62 812-1205-0045 - Dwi Yuliastuti <br />
						+62 813-8130-0941 - Tri Wibowo <br />
					</div>
				</div>
				<div className="mb-1 flex">
					<img src={addressIcon} alt="Address icon" className="mr-2 h-7 w-7" />
					<div>
						<span className="text-red-800">Head Office:</span> Graha Perdana <br />Jl. Raya Legok No.33,
						RT.003/RW.007<br />
						Jatimekar, Kec. Jatiasih, Kota Bekasi, Jawa Barat, 17422
						<br />
						<span className="text-red-800">Branch Office:</span> Patimban, Subang, West Java - Indonesia
					</div>
				</div>
				<div className="mb-1 flex">
					<img src={emailIcon} alt="Email icon" className="mr-2 w-7" />
					<a href="mailto:ops@benawa.id"
						className="duration-800 transition ease-in-out hover:text-primary-red">ops@benawa.id</a>
				</div>
				<div className="mb-1 flex">
					<img src={webIcon} alt="Web icon" className="mr-2 w-7" />
					<p>
						<a href="www.benawa.id" target="_blank"
							className="duration-800 transition ease-in-out hover:text-primary-red">www.benawa.id</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer