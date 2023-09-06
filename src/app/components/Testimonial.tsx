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
						<div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
							<div className="flex flex-col overflow-hidden shadow-xl border border-slate-600 rounded-md">
								<div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-300 font-pj">
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
											<p className="text-base font-bold text-gray-300 font-pj">
												Jacob Jones
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-300">
												Digital Marketer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl border border-slate-600 rounded-md">
								<div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-300 font-pj">
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
											<p className="text-base font-bold text-gray-300 font-pj">
												Jacob Jones
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-300">
												Digital Marketer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl border border-slate-600 rounded-md">
								<div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
									<div className="flex-1">
										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-300 font-pj">
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
											<p className="text-base font-bold text-gray-300 font-pj">
												Jacob Jones
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-300">
												Digital Marketer
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
