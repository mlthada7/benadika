import React from 'react'
import organizationChartImg from '../assets/images/organization-chart.png';

const Teams = () => {
	return (
		<section id="teams" className="bg-slate-800 pt-36 pb-32">
			<div className="container">
				<div className="w-full px-5 sm:px-7 md:px-10 lg:px-7">
					<div className="mx-auto lg:w-3/4">
						<h2
							className="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-slate-100 md:text-3xl">
							Company Structure</h2>
						<img src={organizationChartImg} alt="Organization Chart" className="rounded-lg" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Teams