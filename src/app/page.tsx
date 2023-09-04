import Hero from './components/Hero';
import Image from 'next/image';
import Team from './components/Team';

export default function Home() {
	return (
		<div>
			<Hero />
			<Team />
		</div>
	);
}
