import Content from './components/Content';
import Download from './components/Download';
import Features from './components/Features';
import Hero from './components/Hero';
import Image from 'next/image';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
export default function Home() {
	return (
		<div>
			<Hero />
			<Content />
			<Features />
			<Testimonial />
			<Download />
			<Team />
		</div>
	);
}
