import React from 'react'
import storeImg from '../assets/images/store.png';
import crewCertificateImg from '../assets/images/certificate-icon.png';
import shipImg from '../assets/images/cargo.png';
import safetyImg from '../assets/images/safety.png';

const Services = () => {
	return (
		<section id="services" className="pt-36 pb-32">
			<div className="container">
				<div className="w-full px-5 sm:px-7">
					<h2
						className="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-primary-blue-light md:text-3xl">
						our services</h2>
					<div className="mx-auto flex w-full flex-wrap justify-around">
						<div className="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
							<img src={storeImg} alt="Provisions Store" className="mx-auto w-28" />
							<h3 className="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">
								provisions store</h3>
							<p className="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
								Our vast provision stores include rare and exclusive foods and specialty items imported
								from around the world. Wide variety of products, perishable and non
								perishable, such as meats, chicken, fish, canned, dairy, etc. All the while you can be
								assured of freshness, quality, and best value.
							</p>
						</div>
						<div className="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
							<img src={crewCertificateImg} alt="Crew Certificate" className="mx-auto w-28" />
							<h3 className="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">Crew
								Certificate</h3>
							<p className="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
								Assisting you in obtaining and managing essential crew certificates, ensuring that your
								crew members are compliant with industry standards and regulations.
							</p>
						</div>
						<div className="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
							<img src={shipImg} alt="Ship Documents" className="mx-auto w-28" />
							<h3 className="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">Ship
								documents</h3>
							<p className="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
								We offer comprehensive Ship Documents services to ensure smooth and compliant maritime
								operations. Allowing you to focus on what matters most: safe and efficient
								navigation. With our Ship Documents service, you can sail with confidence, knowing that
								your paperwork is in expert hands.
							</p>
						</div>
						<div className="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
							<img src={safetyImg} alt="Safety Equipments" className="mx-auto w-28" />
							<h3 className="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">safety
								equipments</h3>
							<p className="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
								We know that having the necessary safety equipment is the priority for vessels, so we
								have inventory and provide the different elements necessary for any need,
								such as flares, life jackets, life rings, epirb and anothers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services