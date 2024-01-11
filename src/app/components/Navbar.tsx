'use client';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import github from 'public/github.svg';
import linkedin from 'public/linkedin.svg';
import logo from 'public/reactype.png';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	// { name: 'Tutorial', href: '/tutorial', current: false },
	// { name: 'Download', href: '/#download', current: false }, // uncomment if you want users to be able to download desktop version
	{ name: 'Meet the Team', href: '/#meettheteam', current: false },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div>
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">ReacType</span>
						<Image
							className="h-8 w-auto"
							width={200}
							height={200}
							src={logo}
							alt="logo"
						/>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-gray-400"
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
					<a
						href="https://app.reactype.dev/#/login"
						className="flex justify-center items-center relative overflow-hidden px-5 py-2.5 rounded-md bg-[#29A38A] font-medium"
					>
						Sign up
					</a>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">ReacType</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="https://app.reactype.dev/#/login"
									className="flex justify-center items-center relative overflow-hidden px-5 py-2.5 rounded-md bg-[#006f73] font-medium"
								>
									Sign up
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</div>
	);
}
