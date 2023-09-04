import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ReacType',
	description: 'A visual prototyping tool for React developers',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
