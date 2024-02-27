import {
  Home,
  Terminal,
  Security,
  ViewInAr,
  Groups,
  Cloud,
  Repeat,
  LaptopMac,
  PestControl
} from "@mui/icons-material";

const navLinks = [
  {
    id: "about",
    title: "[  About,",
  },
  {
    id: "work",
    title: "Work,",
  },
  {
    id: "contact",
    title: "Contact ]",
  },
];

const iconArray = [
  <Home key="1" sx={{ fontSize: "4rem", color: "#2fd64d" }} />,
  <Terminal key="2" sx={{ fontSize: "4rem", color: "#1d97f7" }}/>,
  <Cloud key="3" sx={{ fontSize: "4rem", color: "#f0c000" }} />,
  <ViewInAr key="4" sx={{ fontSize: "4rem", color: "#fb4c64" }} />,
  <Groups key="5" sx={{ fontSize: "4rem", color: "#1667d1" }} />,
  <Security key="6" sx={{ fontSize: "4rem", color: "#be5be8" }} />,
  <LaptopMac key="7" sx={{ fontSize: "4rem", color: "#fe9c06" }} />,
  <Repeat key="8" sx={{ fontSize: "4rem", color: "#f6352b" }} />,
  <PestControl key="9" sx={{ fontSize: "4rem", color: "#50ed6a" }} />,
];

const ServiceData = [
  {
    header: "A Home For Your Code",
    content:
      "Transform ReacType into your centralized hub for all coding projects. Seamlessly import and export your projects, ensuring effortless collaboration and the freedom to resume work whenever inspiration strikes.",
  },
  {
    header: "React, Gatsby, and Next",
    content:
      "Enhance ReacType with Next.js's powerful features by integrating Next.js specific Link and Image components. Connect users directly to their created pages with efficient routing.",
  },
  {
    header: "Cloud Based",
    content:
      "We harnesses the power of the cloud, providing seamless access to projects from anywhere which enables useres to collaborate effortlessly, enhancing productivity and flexibility.",
  },
  {
    header: "D3 Visualization",
    content:
      "Explore dynamically generated components in the component tree view. Additionally, dive into the State Management Tab to visualize a D3 state flow diagram, providing insights into your application's architecture.",
  },
  {
    header: "Collaborative Workspace",
    content:
      "Engage in collaborative coding sessions by joining dedicated rooms where users can seamlessly code, chat, or even conduct real-time video conferences, fostering productive and efficient teamwork.",
  },
  {
    header: "Safe and Secure",
    content:
      "With industry-leading authorization and authentication practices this robust implementation ensures protection against unauthorized access, safeguarding users' information and projects.",
  },
  {
    header: "Automated Testing",
    content:
      "The package includes pre-configured Webpack, Jest, and TypeScript files, along with meticulously crafted tests, ensuring reliability and robustness for your project launch period.",
  },
  {
    header: "State Management",
    content:
      "Effortlessly manage state, ensuring streamlined state management across your application. Simplify prop passing from parent components, enhancing code readability and maintainability.",
  },
  {
    header: "Debug",
    content:
      "View stack traces, visualize query runs over time, inspect app state, and drill into all dependencies. Version control changes in ReacType with Git and use PRs to merge updates.",
  },
];

const testimonials = [
  {
    quote:
      "I thought it was impossible to make an app as beautiful as our product, but the ReacType team proved me wrong.",
    name: "Sara Lee",
    title: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    quote:
      "I've never met a web developement team who truly cares about their clients' success.",
    name: "Chris Homes",
    title: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    quote:
      "After the ReacType team optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    title: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const dropDownMenuTitles = ["Solutions", "Learn", "About"];
const dropDownMenuItems = [
  ["React.js", "Next.js", "Gatsby.js"],
  ["Docs", "Blog", "Videos"],
  ["Github", "LinkedIn"],
];

const people = [
  {
    firstName: "Aaron",
    lastName: "Bumanglag",
    github: "https://github.com/akbuma",
    linkedin: "https://www.linkedinin.com/in/akbuma",
  },
  {
    firstName: "Abeer",
    lastName: "Faizan",
    github: "https://github.com/abeer-f",
    linkedin: "http://www.linkedinin.com/in/abeerfaizan",
  },
  {
    firstName: "Adam",
    lastName: "Singer",
    github: "https://github.com/spincycle01",
    linkedin: "https://linkedinin.com/in/adsing",
  },
  {
    firstName: "Adam",
    lastName: "Vanek",
    github: "https://github.com/atvanek",
    linkedin: "https://linkedin.com/in/atvanek",
  },
  {
    firstName: "Ahsan",
    lastName: "Rao",
    github: "https://github.com/ahsan-rao",
    linkedin: "https://linkedinin.com/in/ahsan-rao",
  },
  {
    firstName: "Alex",
    lastName: "Wolinsky",
    github: "https://github.com/aw2934",
    linkedin: "https://www.linkedinin.com/in/alex-wolinsky-80ab591b2/",
  },
  {
    firstName: "Alex",
    lastName: "Yu",
    github: "https://github.com/buddhajjigae",
    linkedin: "https://www.linkedinin.com/in/alexjihunyu/",
  },
  {
    firstName: "Andrew",
    lastName: "Cho",
    github: "https://github.com/andrewjcho84",
    linkedin: "https://www.linkedinin.com/in/andrewjcho84/",
  },
  {
    firstName: "Anthony",
    lastName: "Torrero",
    github: "https://github.com/Anthonytorrero",
    linkedin: "https://www.linkedinin.com/in/anthony-torrero-4b8798159/",
  },
  {
    firstName: "Ben",
    lastName: "Cauffman",
    github: "https://github.com/BenCauffman",
    linkedin: "https://linkedinin.com/in/benjamin-cauffman",
  },
  {
    firstName: "Bianca",
    lastName: "Picasso",
    github: "https://github.com/BiancaPicasso",
    linkedin: "https://www.linkedinin.com/in/bianca-picasso/",
  },
  {
    firstName: "Brian",
    lastName: "Han",
    github: "https://github.com/brianjshan",
    linkedin: "https://www.linkedinin.com/in/brianjisoohan/",
  },
  {
    firstName: "Bryan",
    lastName: "Chau",
    github: "https://github.com/bchauu",
    linkedin: "https://www.linkedinin.com/in/chaubryan1",
  },
  {
    firstName: "Calvin",
    lastName: "Cao",
    github: "https://github.com/calvincao",
    linkedin: "https://www.linkedinin.com/in/calvincao9/",
  },
  {
    firstName: "Carly",
    lastName: "Jackson",
    github: "https://github.com/carlyjackson",
    linkedin: "https://www.linkedinin.com/in/carly-jackson-ab9010231/",
  },
  {
    firstName: "Charles",
    lastName: "Finocchiaro",
    github: "https://github.com/null267",
    linkedin: "https://www.linkedinin.com/in/charles-finocchiaro-62440040/",
  },
  {
    firstName: "Chelsea",
    lastName: "Fewer",
    github: "https://github.com/chelseyeslehc",
    linkedin: "https://www.linkedinin.com/in/chelsey-fewer/",
  },
  {
    firstName: "Chris",
    lastName: "Tang",
    github: "https://github.com/chrisjtang",
    linkedin: "https://www.linkedinin.com/in/chrisjtang/",
  },
  {
    firstName: "Christian",
    lastName: "Padilla",
    github: "https://github.com/ChristianEdwardPadilla",
    linkedin: "https://linkedinin.com/in/ChristianEdwardPadilla",
  },
  {
    firstName: "Crystal",
    lastName: "Lim",
    github: "https://github.com/crlim",
    linkedin: "https://www.linkedinin.com/in/crystallim/",
  },
  {
    firstName: "Daniel",
    lastName: "Reilley",
    github: "https://github.com/dreille",
    linkedin: "https://www.linkedinin.com/in/daniel-reilley",
  },
  {
    firstName: "Darin",
    lastName: "Ngau",
    github: "https://github.com/dnngau",
    linkedin: "https://www.linkedinin.com/in/darin-ngau/",
  },
  {
    firstName: "Daryl",
    lastName: "Foster",
    github: "https://github.com/MadinventorZero",
    linkedin: "https://www.linkedinin.com/in/darylfosterma/",
  },
  {
    firstName: "Diego",
    lastName: "Vazquez",
    github: "https://github.com/diegovazquezny",
    linkedin: "https://www.linkedin.com/in/diegovazquezny/",
  },
  {
    firstName: "Edward",
    lastName: "Park",
    github: "https://github.com/eddypjr",
    linkedin: "http://www.linkedin.com/in/edwardparkwork",
  },
  {
    firstName: "Elena",
    lastName: "Conn",
    github: "https://github.com/elenaconn",
    linkedin: "https://www.linkedin.com/in/elena-conn/",
  },
  {
    firstName: "Eliot",
    lastName: "Nguyen",
    github: "https://github.com/ibeeliot",
    linkedin: "https://www.linkedin.com/in/ibeeliot",
  },
  {
    firstName: "Evan",
    lastName: "Crews",
    github: "https://github.com/Evan-Crews",
    linkedin: "https://www.linkedin.com/in/evan-crews/",
  },
  {
    firstName: "Fredo",
    lastName: "Chen",
    github: "https://github.com/fredosauce",
    linkedin: "https://www.linkedin.com/in/fredochen/",
  },
  {
    firstName: "Garrett",
    lastName: "Hutson",
    github: "/https://github.com/GarrettHutson",
    linkedin: "https://www.linkedin.com/in/garrett-hutson-84144b237",
  },
  {
    firstName: "Huy ",
    lastName: "Pham",
    github: "https://github.com/huypham048",
    linkedin: "https://www.linkedin.com/in/huypham048/",
  },
  {
    firstName: "Ian",
    lastName: "Davis",
    github: "https://github.com/iancdavis",
    linkedin: "https://www.linkedin.com/in/icdavis/",
  },
  {
    firstName: "Jesse",
    lastName: "Zuniga",
    github: "https://github.com/jzuniga206",
    linkedin: "https://www.linkedin.com/in/jesse-zuniga",
  },
  {
    firstName: "Jin",
    lastName: "Soo Lim",
    github: "https://github.com/jinsoolim",
    linkedin: "https://www.linkedin.com/in/jin-soo-lim-3a567b1b3/",
  },
  {
    firstName: "Jonathan",
    lastName: "Calvo Ramirez",
    github: "https://github.com/jonocr",
    linkedin: "https://www.linkedin.com/in/jonathan-calvo/",
  },
  {
    firstName: "Julie",
    lastName: "Wu",
    github: "https://github.com/yutingwu4",
    linkedin: "https://www.linkedin.com/in/jwuarchitect/",
  },
  {
    firstName: "Katrina",
    lastName: "Henderson",
    github: "https://github.com/kchender",
    linkedin: "https://www.linkedin.com/in/kchender/",
  },
  {
    firstName: "Ken",
    lastName: "Bains",
    github: "https://github.com/ken-Bains",
    linkedin: "https://www.linkedin.com/in/ken-Bains/",
  },
  {
    firstName: "Kevin",
    lastName: "Park",
    github: "https://github.com/xkevinpark",
    linkedin: "https://www.linkedin.com/in/xkevinpark/",
  },
  {
    firstName: "Khuong",
    lastName: "Nguyen",
    github: "https://github.com/khuongdn16",
    linkedin: "https://www.linkedin.com/in/khuong-nguyen/",
  },
  {
    firstName: "Laura",
    lastName: "Forden",
    github: "https://github.com/lauraafor",
    linkedin: "https://www.linkedin.com/in/la-forden",
  },
  {
    firstName: "Lauren",
    lastName: "Leer",
    github: "https://github.com/LALeer",
    linkedin: "https://www.linkedin.com/in/lauren-leer",
  },
  {
    firstName: "Linh",
    lastName: "Tran",
    github: "https://github.com/linhatran",
    linkedin: "https://www.linkedin.com/in/linhatran",
  },
  {
    firstName: "Luke",
    lastName: "Madden",
    github: "https://github.com/lukemadden",
    linkedin: "https://www.linkedin.com/in/lukemadden/",
  },
  {
    firstName: "Matteo ",
    lastName: "Diterlizzi",
    github: "https://github.com/MatteoDiter",
    linkedin: "www.linkedin.com/in/matteo-diterlizzi-564166107/",
  },
  {
    firstName: "Michael",
    lastName: "Ng",
    github: "https://github.com/mikogome",
    linkedin: "www.linkedin.com/in/michaelng2",
  },
  {
    firstName: "Mike",
    lastName: "Dunnmon",
    github: "https://github.com/mdunnmon",
    linkedin: "www.linkedin.com/in/michaeldunnmon/",
  },
  {
    firstName: "Miles",
    lastName: "Wright",
    github: "https://github.com/Miles818",
    linkedin: "https://www.linkedin.com/in/miles-m-wright/",
  },
  {
    firstName: "Mitchel",
    lastName: "Severe",
    github: "https://github.com/mitchelsevere",
    linkedin: "https://www.linkedin.com/in/misevere/",
  },
  {
    firstName: "Natalie",
    lastName: "Vick",
    github: "https://github.com/natattackvick",
    linkedin: "https://www.linkedin.com/in/vicknatalie/",
  },
  {
    firstName: "Philip ",
    lastName: "Hua",
    github: "https://github.com/pmhua",
    linkedin: "https://www.linkedin.com/in/philip-minh-hua/",
  },
  {
    firstName: "Rachel",
    lastName: "Kucharski",
    github: "https://github.com/rachelk585",
    linkedin: "https://www.linkedin.com/in/rachelkucharski/",
  },
  {
    firstName: "Ron",
    lastName: "Fulast",
    github: "https://github.com/rfvisuals",
    linkedin: "https://www.linkedin.com/in/ronfu/",
  },
  {
    firstName: "Rose",
    lastName: "Jiang",
    github: "https://github.com/jujupro",
    linkedin: "https://www.linkedin.com/in/rose-jiang",
  },
  {
    firstName: "Salvatore",
    lastName: "Saluga",
    github: "https://github.com/SalSaluga",
    linkedin: "https://www.linkedin.com/in/salvatore-saluga/",
  },
  {
    firstName: "Sang",
    lastName: "Kil",
    github: "https://github.com/Skilzsz",
    linkedin: "https://www.linkedin.com/in/sanghkil",
  },
  {
    firstName: "Sean",
    lastName: "Sadykoff",
    github: "https://github.com/sean1292",
    linkedin: "https://www.linkedin.com/in/sean-sadykoff/",
  },
  {
    firstName: "Shana ",
    lastName: "Hoehn",
    github: "https://github.com/slhoehn",
    linkedin: "http://www.linkedin.com/in/shana-hoehn",
  },
  {
    firstName: "Shirley",
    lastName: "Liu",
    github: "https://github.com/yijunliu90",
    linkedin: "https://www.linkedin.com/in/yijunliu/",
  },
  {
    firstName: "Shlomo",
    lastName: "Porges",
    github: "https://github.com/ShlomoPorges",
    linkedin: "https://linkedin.com/shlomoporges",
  },
  {
    firstName: "Stephen",
    lastName: "Kim",
    github: "https://github.com/stephenkim612",
    linkedin: "http://www.linkedin.com/in/stephenkim612",
  },
  {
    firstName: "Stormi ",
    lastName: "Hashimoto",
    github: "https://github.com/stormikph",
    linkedin: "https://www.linkedin.com/in/stormikph/",
  },
  {
    firstName: "Thomas",
    lastName: "Lukasiewicz",
    github: "https://github.com/tlukasiewicz89",
    linkedin: "https://www.linkedin.com/in/thomas-lukasiewicz-27676273/",
  },
  {
    firstName: "Tolga",
    lastName: "Mizrakci",
    github: "https://github.com/tolgamizrakci",
    linkedin: "https://linkedin.com/in/tolga-mizrakci",
  },
  {
    firstName: "Tony",
    lastName: "Ito-cole",
    github: "https://github.com/tonyito",
    linkedin: "https://www.linkedin.com/in/tony-ito-cole",
  },
  {
    firstName: "Tyler",
    lastName: "Sullberg",
    github: "https://github.com/tsully",
    linkedin: "https://www.linkedin.com/in/tyler-sullberg",
  },
  {
    firstName: "Ulrich",
    lastName: "Neujahr",
    github: "https://github.com/nobrackets",
    linkedin: "http://www.linkedin.com/in/nobrackets",
  },
  {
    firstName: "William",
    lastName: "Cheng",
    github: "https://github.com/WilliamCheng12345",
    linkedin: "https://www.linkedin.com/in/william-cheng-0723/",
  },
  {
    firstName: "William",
    lastName: "Rittwage",
    github: "https://github.com/wbrittwage",
    linkedin: "https://www.linkedin.com/in/william-rittwage/",
  },
  {
    firstName: "Xiao",
    lastName: "Wang",
    github: "https://github.com/wang9hu",
    linkedin: "https://www.linkedin.com/in/xiao-wang-03183285/",
  },
  {
    firstName: "Yohan",
    lastName: "Jeon",
    github: "https://github.com/Yoheze",
    linkedin: "https://www.linkedin.com/in/yohan-jeon1",
  },
  {
    firstName: "William",
    lastName: "Yoon",
    github: "https://github.com/williamdyoon",
    linkedin: "https://www.linkedin.com/in/williamdyoon/",
  },
  {
    firstName: "Yuanji",
    lastName: "Huang",
    github: "https://github.com/kr1spybacon",
    linkedin: "https://www.linkedin.com/in/yuanjihuang/",
  },
  {
    firstName: "Liam",
    lastName: "Roh",
    github: "https://github.com/liamroh",
    linkedin: "https://www.linkedin.com/in/liam-roh/",
  },
  {
    firstName: "Ahnaf",
    lastName: "Khan",
    github: "https://github.com/AhnafKhvn",
    linkedin: "https://www.linkedin.com/in/ahnaf-khan-844a70193",
  },
  {
    firstName: "Victor",
    lastName: "Martins",
    github: "https://github.com/martins5225",
    linkedin: "https://www.linkedin.com/in/victor-martins-542611186/",
  },
  {
    firstName: "Denton",
    lastName: "Wong",
    github: "https://github.com/dentonwong",
    linkedin: "https://www.linkedin.com/in/denton-wong/",
  },
  {
    firstName: "Hernan",
    lastName: "Damazo",
    github: "https://github.com/raulclassico7",
    linkedin: "https://www.linkedin.com/in/raul-hernan-damazo-chang-9440ab191",
  },
  {
    firstName: "Sophia",
    lastName: "Bui",
    github: "https://github.com/sophia-bui",
    linkedin: "https://www.linkedin.com/in/sophiabui/",
  },
  {
    firstName: "Rick",
    lastName: "McGrath",
    github: "https://github.com/r-mcgrath",
    linkedin: "https://www.linkedin.com/in/rick-mcgrath-b1617126b/",
  },
  {
    firstName: "Hadrian",
    lastName: "Chan",
    github: "https://github.com/HadriChan",
    linkedin: "https://www.linkedin.com/in/hadrian-chan-445a8622a/",
  },
  {
    firstName: "Nam",
    lastName: "Halast",
    github: "https://github.com/namos2502",
    linkedin: "https://www.linkedin.com/in/namos2502/",
  },
  {
    firstName: "Sonya",
    lastName: "Hu",
    github: "https://github.com/sonyahu15",
    linkedin: "https://www.linkedin.com/in/sonyahu25/",
  },
  {
    firstName: "Cyrus",
    lastName: "Burns",
    github: "https://github.com/cyburns",
    linkedin: "https://www.linkedin.com/in/cyburns/",
  },
  {
    firstName: "Jon",
    lastName: "Wage",
    github: "https://github.com/johnwage",
    linkedin: "https://www.linkedin.com/in/johnwage/",
  },
  {
    firstName: "Brian",
    lastName: "Yan",
    github: "https://github.com/BrianYanGitHub",
    linkedin: "https://www.linkedin.com/in/brianyan7",
  },
  {
    firstName: "Yameng",
    lastName: "Zhang",
    github: "https://github.com/Eliza612",
    linkedin: "https://www.linkedin.com/in/yameng-zhang612/",
  },
];

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="mx-auto"
        width="46"
        height="46"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
        />
      </svg>
    ),
    title: "Context Manager",
    description:
      "Create, update, and delete context that you can later assign to specific components. A tree will allow you to visualize the context hierarchy.",
  },
  {
    icon: (
      <svg
        className="mx-auto"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 27H19V45H27V27Z"
          stroke="#d4d4d8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 37H1V45H9V37Z"
          fill="#d4d4d8"
          stroke="#d4d4d8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M45 17H37V45H45V17Z"
          fill="#d4d4d8"
          stroke="#d4d4d8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 17L15 7L23 15L37 1"
          stroke="#d4d4d8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 1H37V10"
          stroke="#d4d4d8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "D3 Visualization",
    description:
      "View dynamically created components/HTML elements in the component tree. Also check the State Management Tab for a D3 state flow diagram.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="mx-auto"
        width="46"
        height="46"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
    title: "Collaboration Rooms",
    description:
      "Join a room and collaborate with others in real time. Watch fellow developers collaborate with mouse tracking, or turn off the feature locally.",
  },
];

export {
  navLinks,
  iconArray,
  testimonials,
  dropDownMenuTitles,
  dropDownMenuItems,
  people,
  ServiceData,
  features,
};
