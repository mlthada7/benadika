import React from 'react'

const Hero = () => {
	return (
		<section
			className="relative flex min-h-screen items-center bg-hero bg-cover bg-left after:absolute after:bottom-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-slate-900 after:to-transparent after:content-[''] sm:after:bg-gradient-to-tl lg:after:bg-gradient-to-bl">
			<div className="container relative z-[1]">
				<div className="w-full px-8">
					<h1
						className="max-w-sm text-2xl font-extrabold tracking-wider text-slate-100 md:max-w-md md:text-3xl lg:max-w-xl xl:text-4xl">
						We provides a high standard of service and quality
					</h1>
					<p className="mt-3 text-base text-slate-200 lg:max-w-lg lg:text-lg">
						We pride ourselves on delivering top-notch service and exceptional quality to meet the unique
						needs of the maritime industry.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero