import Image from 'next/image';
import github from 'public/github.svg';
import linkedin from 'public/linkedin.svg';

interface People {
	name: string;
	github?: string;
	linkedin?: string;
}

function filterAndSortContributors(contributors: People[]): People[] {
	return contributors.sort((a, b) => {
		const nameA = a.name.toLowerCase();
		const nameB = b.name.toLowerCase();

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});
}

const people = [
	{
		name: 'Aaron Bumanglag',
		github: 'https://github.com/akbuma',
		linkedin: 'https://www.linkedinin.com/in/akbuma',
	},
	{
		name: 'Abeer Faizan',
		github: 'https://github.com/abeer-f',
		linkedin: 'http://www.linkedinin.com/in/abeerfaizan',
	},
	{
		name: 'Adam Singer',
		github: 'https://github.com/spincycle01',
		linkedin: 'https://linkedinin.com/in/adsing',
	},
	{
		name: 'Ahsan Rao',
		github: 'https://github.com/ahsan-rao',
		linkedin: 'https://linkedinin.com/in/ahsan-rao',
	},
	{
		name: 'Alex Wolinsky',
		github: 'https://github.com/aw2934',
		linkedin: 'https://www.linkedinin.com/in/alex-wolinsky-80ab591b2/',
	},
	{
		name: 'Alex Yu',
		github: 'https://github.com/buddhajjigae',
		linkedin: 'https://www.linkedinin.com/in/alexjihunyu/',
	},
	{
		name: 'Andrew Cho',
		github: 'https://github.com/andrewjcho84',
		linkedin: 'https://www.linkedinin.com/in/andrewjcho84/',
	},
	{
		name: 'Anthony Torrero',
		github: 'https://github.com/Anthonytorrero',
		linkedin: 'https://www.linkedinin.com/in/anthony-torrero-4b8798159/',
	},
	{
		name: 'Ben Cauffman',
		github: 'https://github.com/BenCauffman',
		linkedin: 'https://linkedinin.com/in/benjamin-cauffman',
	},
	{
		name: 'Bianca Picasso',
		github: 'https://github.com/BiancaPicasso',
		linkedin: 'https://www.linkedinin.com/in/bianca-picasso/',
	},
	{
		name: 'Brian Han',
		github: 'https://github.com/brianjshan',
		linkedin: 'https://www.linkedinin.com/in/brianjisoohan/',
	},
	{
		name: 'Bryan Chau',
		github: 'https://github.com/bchauu',
		linkedin: 'https://www.linkedinin.com/in/chaubryan1',
	},
	{
		name: 'Calvin Cao',
		github: 'https://github.com/calvincao',
		linkedin: 'https://www.linkedinin.com/in/calvincao9/',
	},
	{
		name: 'Carly Jackson',
		github: 'https://github.com/carlyjackson',
		linkedin: 'https://www.linkedinin.com/in/carly-jackson-ab9010231/',
	},
	{
		name: 'Charles Finocchiaro',
		github: 'https://github.com/null267',
		linkedin: 'https://www.linkedinin.com/in/charles-finocchiaro-62440040/',
	},
	{
		name: 'Chelsea Fewer',
		github: 'https://github.com/chelseyeslehc',
		linkedin: 'https://www.linkedinin.com/in/chelsey-fewer/',
	},
	{
		name: 'Chris Tang',
		github: 'https://github.com/chrisjtang',
		linkedin: 'https://www.linkedinin.com/in/chrisjtang/',
	},
	{
		name: 'Christian Padilla',
		github: 'https://github.com/ChristianEdwardPadilla',
		linkedin: 'https://linkedinin.com/in/ChristianEdwardPadilla',
	},
	{
		name: 'Crystal Lim',
		github: 'https://github.com/crlim',
		linkedin: 'https://www.linkedinin.com/in/crystallim/',
	},
	{
		name: 'Daniel Reilley',
		github: 'https://github.com/dreille',
		linkedin: 'https://www.linkedinin.com/in/daniel-reilley',
	},
	{
		name: 'Darin Ngau',
		github: 'https://github.com/dnngau',
		linkedin: 'https://www.linkedinin.com/in/darin-ngau/',
	},
	{
		name: 'Daryl Foster',
		github: 'https://github.com/MadinventorZero',
		linkedin: 'https://www.linkedinin.com/in/darylfosterma/',
	},
	{
		name: 'Diego Vazquez',
		github: 'https://github.com/diegovazquezny',
		linkedin: 'https://www.linkedin.com/in/diegovazquezny/',
	},
	{
		name: 'Edward Park',
		github: 'https://github.com/eddypjr',
		linkedin: 'http://www.linkedin.com/in/edwardparkwork',
	},
	{
		name: 'Elena Conn',
		github: 'https://github.com/elenaconn',
		linkedin: 'https://www.linkedin.com/in/elena-conn/',
	},
	{
		name: 'Eliot Nguyen',
		github: 'https://github.com/ibeeliot',
		linkedin: 'https://www.linkedin.com/in/ibeeliot',
	},
	{
		name: 'Evan Crews',
		github: 'https://github.com/Evan-Crews',
		linkedin: 'https://www.linkedin.com/in/evan-crews/',
	},
	{
		name: 'Fredo Chen',
		github: 'https://github.com/fredosauce',
		linkedin: 'https://www.linkedin.com/in/fredochen/',
	},
	{
		name: 'Huy Pham',
		github: 'https://github.com/huypham048',
		linkedin: 'https://www.linkedin.com/in/huypham048/',
	},
	{
		name: 'Jesse Zuniga',
		github: 'https://github.com/jzuniga206',
		linkedin: 'https://www.linkedin.com/in/jesse-zuniga',
	},
	{
		name: 'Jin Soo Lim',
		github: 'https://github.com/jinsoolim',
		linkedin: 'https://www.linkedin.com/in/jin-soo-lim-3a567b1b3/',
	},
	{
		name: 'Jonathan Calvo Ramirez',
		github: 'https://github.com/jonocr',
		linkedin: 'https://www.linkedin.com/in/jonathan-calvo/',
	},
	{
		name: 'Julie Wu',
		github: 'https://github.com/yutingwu4',
		linkedin: 'https://www.linkedin.com/in/jwuarchitect/',
	},
	{
		name: 'Katrina Henderson',
		github: 'https://github.com/kchender',
		linkedin: 'https://www.linkedin.com/in/kchender/',
	},
	{
		name: 'Ken Bains',
		github: 'https://github.com/ken-Bains',
		linkedin: 'https://www.linkedin.com/in/ken-Bains/',
	},
	{
		name: 'Kevin Park',
		github: 'https://github.com/xkevinpark',
		linkedin: 'https://www.linkedin.com/in/xkevinpark/',
	},
	{
		name: 'Khuong Nguyen',
		github: 'https://github.com/khuongdn16',
		linkedin: 'https://www.linkedin.com/in/khuong-nguyen/',
	},
	{
		name: 'Linh Tran',
		github: 'https://github.com/linhatran',
		linkedin: 'https://www.linkedin.com/in/linhatran',
	},
	{
		name: 'Luke Madden',
		github: 'https://github.com/lukemadden',
		linkedin: 'https://www.linkedin.com/in/lukemadden/',
	},
	{
		name: 'Michael Ng',
		github: 'https://github.com/mikogome',
		linkedin: 'www.linkedin.com/in/michaelng2',
	},
	{
		name: 'Miles Wright',
		github: 'https://github.com/Miles818',
		linkedin: 'https://www.linkedin.com/in/miles-m-wright/',
	},
	{
		name: 'Mitchel Severe',
		github: 'https://github.com/mitchelsevere',
		linkedin: 'https://www.linkedin.com/in/misevere/',
	},
	{
		name: 'Natalie Vick',
		github: 'https://github.com/natattackvick',
		linkedin: 'https://www.linkedin.com/in/vicknatalie/',
	},
	{
		name: 'Philip Hua',
		github: 'https://github.com/pmhua',
		linkedin: 'https://www.linkedin.com/in/philip-minh-hua/',
	},
	{
		name: 'Ron Fu',
		github: 'https://github.com/rfvisuals',
		linkedin: 'https://www.linkedin.com/in/ronfu/',
	},
	{
		name: 'Salvatore Saluga',
		github: 'https://github.com/SalSaluga',
		linkedin: 'https://www.linkedin.com/in/salvatore-saluga/',
	},
	{
		name: 'Sean Sadykoff',
		github: 'https://github.com/sean1292',
		linkedin: 'https://www.linkedin.com/in/sean-sadykoff/',
	},
	{
		name: 'Shana Hoehn',
		github: 'https://github.com/slhoehn',
		linkedin: 'http://www.linkedin.com/in/shana-hoehn',
	},
	{
		name: 'Shlomo Porges',
		github: 'https://github.com/ShlomoPorges',
		linkedin: 'https://linkedin.com/shlomoporges',
	},
	{
		name: 'Stephen Kim',
		github: 'https://github.com/stephenkim612',
		linkedin: 'http://www.linkedin.com/in/stephenkim612',
	},
	{
		name: 'Stormi Hashimoto',
		github: 'https://github.com/stormikph',
		linkedin: 'https://www.linkedin.com/in/stormikph/',
	},
	{
		name: 'Thomas Lukasiewicz',
		github: 'https://github.com/tlukasiewicz89',
		linkedin: 'https://www.linkedin.com/in/thomas-lukasiewicz-27676273/',
	},
	{
		name: 'Tolga Mizrakci',
		github: 'https://github.com/tolgamizrakci',
		linkedin: 'https://linkedin.com/in/tolga-mizrakci',
	},
	{
		name: 'Tony Ito-cole',
		github: 'https://github.com/tonyito',
		linkedin: 'https://www.linkedin.com/in/tony-ito-cole',
	},
	{
		name: 'Tyler Sullberg',
		github: 'https://github.com/tsully',
		linkedin: 'https://www.linkedin.com/in/tyler-sullberg',
	},
	{
		name: 'Ulrich Neujahr',
		github: 'https://github.com/nobrackets',
		linkedin: 'http://www.linkedin.com/in/nobrackets',
	},
	{
		name: 'William Cheng',
		github: 'https://github.com/WilliamCheng12345',
		linkedin: 'https://www.linkedin.com/in/william-cheng-0723/',
	},
	{
		name: 'William Rittwage',
		github: 'https://github.com/wbrittwage',
		linkedin: 'https://www.linkedin.com/in/william-rittwage/',
	},
	{
		name: 'William Yoon',
		github: 'https://github.com/williamdyoon',
		linkedin: 'https://www.linkedin.com/in/williamdyoon/',
	},
	{
		name: 'Yuanji Huang',
		github: 'https://github.com/kr1spybacon',
		linkedin: 'https://www.linkedin.com/in/yuanjihuang/',
	},
	{
		name: 'Liam Roh',
		github: 'https://github.com/liamroh',
		linkedin: 'https://www.linkedin.com/in/liam-roh/',
	},
	{
		name: 'Ahnaf Khan',
		github: 'https://github.com/AhnafKhvn',
		linkedin: 'https://www.linkedin.com/in/ahnaf-khan-844a70193',
	},
	{
		name: 'Victor Martins',
		github: 'https://github.com/martins5225',
		linkedin: 'https://www.linkedin.com/in/victor-martins-542611186/',
	},
	{
		name: 'Denton Wong',
		github: 'https://github.com/dentonwong',
		linkedin: 'https://www.linkedin.com/in/denton-wong/',
	},
	{
		name: 'Hernan Damazo',
		github: 'https://github.com/dentonwong',
		linkedin: 'https://www.linkedin.com/in/hernan-wong/',
	},
];

const sortedPeople = filterAndSortContributors(people);

export default function Team() {
	return (
		<div id="meettheteam" className=" py-24 sm:py-32">
			<div className="mx-auto  max-w-7xl gap-x-8 gap-y-20 px-6">
				<div className="my-10 ">
					<h1 className="text-6xl font-bold text-left">Our Team</h1>
					<p className="my-5 text-gray-500">
						Checkout our wonderful contributors
					</p>
				</div>
				<ul
					role="list"
					className="grid gap-x-5 gap-y-8 sm:grid-cols-5 sm:gap-y-9 xl:col-span-2"
				>
					{sortedPeople.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-3">
								<div>
									<h3 className="text-lg font-medium leading-7 tracking-tight text-gray-300">
										{person.name}
									</h3>
									<div className="flex gap-x-4 my-4 items-center">
										<a href={person.github} target="_blank">
											<Image width={30} height={30} src={github} alt="logo" />
										</a>
										<a href={person.linkedin} target="_blank">
											<Image width={30} height={30} src={linkedin} alt="logo" />
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
