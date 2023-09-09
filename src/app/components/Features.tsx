import React, { useState } from 'react';

const features = [
	{
		icon: (
			<svg
				className="mx-auto"
				width="46"
				height="46"
				viewBox="0 0 46 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'Context Manager',
		description:
			'Create, update, and delete context that you can later assign to specific components. A tree will allow you to visualize the context hierarchy.',
	},
	{
		icon: (
			<svg
				className="mx-auto"
				width="46"
				height="46"
				viewBox="0 0 46 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27 27H19V45H27V27Z"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9 37H1V45H9V37Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M45 17H37V45H45V17Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5 17L15 7L23 15L37 1"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M28 1H37V10"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'D3 Visualization',
		description:
			'View dynamically created components/HTML elements in the component tree. Also check the State Management Tab for a D3 state flow diagram.',
	},
	{
		icon: (
			<svg
				className="mx-auto"
				width="46"
				height="46"
				viewBox="0 0 46 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27 27H19V45H27V27Z"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9 37H1V45H9V37Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M45 17H37V45H45V17Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5 17L15 7L23 15L37 1"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M28 1H37V10"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'Next.js and Gatsby.js',
		description:
			'Add Next.js specific Link and Image components to link components to user-created pages and take advantage of Next.js image optimization.',
	},
	{
		icon: (
			<svg
				className="mx-auto"
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
					fill="#D4D4D8"
				/>
				<path
					d="M9 9H33"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9 17H33"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M1 25H13V31H29V25H41"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'React Router',
		description:
			'Easily create routes with the Switch and Link router elements.',
	},
	{
		icon: (
			<svg
				className="mx-auto"
				width="46"
				height="42"
				viewBox="0 0 46 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'Export Test Suites',
		description:
			'With the click of a checkbox, you can export your components with Jest and Enzyme tests for not just React, but Next and Gatsby apps as well! The exported folder will include pre-configured Webpack, Jest, and Typescript files along with tests for your project.',
	},
	{
		icon: (
			<svg
				className="mx-auto"
				width="44"
				height="44"
				viewBox="0 0 44 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
					fill="#D4D4D8"
					stroke="#161616"
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		),
		title: 'Interactive Dashboard',
		description:
			'Collaborate with others through the new interactive dashboard.',
	},
];

const Features = () => {
	return (
		<section className="py-12 sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl font-pj">
						Make every step user-centric
					</h2>
					<p className="mt-4 text-base leading-7 text-gray-500 sm:mt-8 font-pj">
						The user can create components by dragging instances of these
						components and HTML elements onto the canvas.
					</p>
				</div>

				<div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
					{features.map((feature, index) => (
						<div key={index} className="md:p-8 lg:p-14">
							{feature.icon}
							<h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">
								{feature.title}
							</h3>
							<p className="mt-5 text-base text-gray-400 font-pj">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
