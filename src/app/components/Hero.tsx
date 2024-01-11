import Image from 'next/image';
import React from 'react';
import heroImage from 'public/v19mainpage.png';

const Hero = () => {
	return (
		<div>
			{' '}
			<div className="relative isolate px-6 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div className="relative " />
				</div>
				<div className="mx-auto max-w-3xl py-20 sm:py-48 lg:py-40">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
							A visual prototyping tool for React developers
						</h1>
						<p className="mt-6  text-lg leading-8 ">
							Built-in comprehensive type checking with TypeScript and flexible
							exporting in Classic React, Next.js, or Gatsby.js
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="https://app.reactype.dev/#/login"
								className="rounded-md bg-[#29A38A] px-6 py-3 text-lg  font-medium text-white shadow-sm"
							>
								Try Here
							</a>
							{/* <a href="#download" className="text-lg font-medium leading-6">
								Download <span aria-hidden="true">→</span>
							</a> */}
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image width={1100} height={600} src={heroImage} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
