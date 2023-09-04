import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
	return (
		<section className="py-12 sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col items-center">
					<div className="text-center">
						<p className="text-lg font-medium text-gray-500 font-pj">
							Over 2k people have starred ReacType on GitHub
						</p>
						<h2 className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl font-pj">
							Hear what people say about ReacType
						</h2>
					</div>

					<div className="relative mt-10 md:mt-24 md:order-2">
						<div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
							<div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
						</div>

						<div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“You made it so simple. My new site is so much faster
												and easier to work with than my old site. I just choose
												the page, make the change.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Leslie Alexander
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Freelance React Developer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“Simply the best. Better than all the rest. I’d
												recommend this product to beginners and advanced users.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Jacob Jones
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Digital Marketer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“I cannot believe that I have got a brand new landing
												page after getting Omega. It was super easy to edit and
												publish.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Jenny Wilson
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Graphic Designer
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testimonial;
