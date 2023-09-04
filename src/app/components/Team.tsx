import Image from 'next/image';
import github from 'public/github.svg';
import linkedin from 'public/linkedin.svg';

const people = [
	{
		name: 'Leslie Alexander',
		github: 'Co-Founder / CEO',
		linked: 'Co-Founder / CEO',
	},
	{
		name: 'Leslie Alexander',
		github: 'Co-Founder / CEO',
		linked: 'Co-Founder / CEO',
	},
	{
		name: 'Leslie Alexander',
		github: 'Co-Founder / CEO',
		linked: 'Co-Founder / CEO',
	},
	{
		name: 'Leslie Alexander',
		github: 'Co-Founder / CEO',
		linked: 'Co-Founder / CEO',
	},
	{
		name: 'Leslie Alexander',
		github: 'Co-Founder / CEO',
		linked: 'Co-Founder / CEO',
	},
	// More people...
];

export default function Example() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto  max-w-7xl gap-x-8 gap-y-20 px-6">
				<div className="my-10 ">
					<h1 className="text-6xl font-bold text-left">Our Team</h1>
					<p className="my-5 text-gray-500">
						Checkout our wonderful contributors
					</p>
				</div>
				<ul
					role="list"
					className="grid gap-x-8 gap-y-12 sm:grid-cols-5 sm:gap-y-16 xl:col-span-2"
				>
					{people.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<div>
									<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">
										{person.name}
									</h3>
									<div className="flex gap-x-5 px-4 items-center">
										<a href="https://github.com/open-source-labs/ReacType">
											<Image
												className="h-8 w-auto"
												width={200}
												height={200}
												src={github}
												alt="logo"
											/>
										</a>
										<a href="https://www.linkedin.com/company/reactype">
											<Image
												className="h-8 w-auto"
												width={200}
												height={200}
												src={linkedin}
												alt="logo"
											/>
										</a>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
