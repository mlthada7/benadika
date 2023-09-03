import React from 'react'

const About = () => {
	return (
		<section id="about" className="flex min-h-screen items-center">
			<div className="container">
				<div className="flex flex-wrap justify-around">
					<div className="w-full px-5 sm:px-7 md:px-8 lg:w-1/2 lg:max-w-lg xl:max-w-xl">
						<h2 className="mb-5 text-2xl font-bold capitalize tracking-wide text-primary-red md:text-3xl">About
							Us</h2>
						<p className="mb-10 text-base text-slate-700 md:text-justify lg:text-lg">
							<span className="font-semibold text-primary-blue">PT. BENAWA ADIKA DARYA</span> is a ship
							chandler and food supplier based in Jakarta, Indonesia. Benawa Ship Chandlers
							is a dedicated team and offer a high standard of service and quality of provision and
							technical stores at a very competitive prices to meet your requirments.
						</p>
					</div>
					<div className="w-full px-5 sm:px-7 lg:w-1/2 lg:max-w-lg lg:pt-14 xl:max-w-xl">
						<p className="text-base text-slate-700 md:text-justify lg:text-lg">
							Our orientation is to maintain an ever-growing customer base with our outstanding service
							and quality guarantee. Provide the highest standards of quality with
							cost-effective prices, fast delivery, efficient services and are committed to customer
							satisfaction. Selection is another important factor getting the correct
							products in the hands of our customer
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About