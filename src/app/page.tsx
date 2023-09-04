import Features from './components/Features';
import Hero from './components/Hero';
import Image from 'next/image';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

export default function Home() {
	return (
		<div>
			<Hero />
			<Features />
			<Testimonial />
			<Team />
		</div>
	);
}
