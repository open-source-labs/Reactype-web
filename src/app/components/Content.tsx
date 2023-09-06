import React from 'react';

interface Features {
	title: string;
	paragraph: string;
	image: string;
	alt: string;
}

const content: Features[] = [
	{
		title: 'Live Code Preview',
		paragraph:
			'See your code preview update in real time as you build. React hooks are enabled for application lifecycle management. ',
		image: 'url',
		alt: 'url',
	},
	{
		title: 'State Management',
		paragraph:
			'React Hooks are enabled to handle your state across components. Also, pass in props from a parent component with the click of a button!',
		image: 'url2',
		alt: 'url',
	},
	{
		title: 'Integrated CSS Editor with Live Demo',
		paragraph:
			'Copy & paste existing stylesheets or create live in the CSS Editor. As you create new instances and add styling, watch as your code dynamically renders a live demo.',
		image: 'url2',
		alt: 'url',
	},
];

const Content: React.FC = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-16">
			{content.map((item, index) => (
				<div
					key={index}
					className="grid gap-8 gap-y-20 lg:grid-cols-2 items-center justify-items-center"
				>
					<div className={index % 2 === 0 ? 'w-full' : 'lg:order-last w-full'}>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={item.image}
							alt={item.alt}
						/>
					</div>
					<div className={index % 2 === 0 ? 'lg:order-last' : ''}>
						<div className="flex flex-col justify-center items-center">
							<div className="mb-6 text-center max-w-sm">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
									{item.title}
								</h2>
								<p className="text-base text-center text-gray-400 md:text-lg">
									{item.paragraph}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Content;
