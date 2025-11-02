import type { ProjectType } from "./types";
import Store from "../src/assets/images/Store_item.png"
import Cash from "../src/assets/images/Cash Compass.png"
import Willey from "../src/assets/images/Willey furnitures.png"
import Udux from "../src/assets/images/browndot test.png"

export const ProjectsData:ProjectType[] = [
  {
    id: 1,
    title: 'Jaegwad',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBmaW5hbmNlJTIwYXBwfGVufDF8fHx8MTc2MTgxMTI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://jaegwad.vercel.app/',
    github: 'https://github.com/Dedzz19/Jaegwad',
  },
  {
    id: 2,
    title: 'Cash Compass',
    category: 'Frontend',
    image: Cash,
    tech: ['React'],
    link: 'https://cash-compass.vercel.app/',
    github: 'https://github.com/Dedzz19/Cash-compass',
  },
  {
    id: 3,
    title: 'Store Clone',
    category: 'Frontend',
    image: Store,
    tech: ['React'],
    link: 'https://store-seven-xi.vercel.app/',
    github: 'https://github.com/Dedzz19/store',
  },
  {
    id: 4,
    title: 'Willey Furnitures',
    category: 'Frontend',
    image: Willey,
    tech: ['React',"Tailwindcss"],
    link: 'https://wiley-furnitures.vercel.app/',
    github: 'https://github.com/Dedzz19/Wiley-Furnitures',
  },
  {
    id: 5,
    title: 'Real Estate Api',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTc2MjMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Python', 'Django',],
    link: '#',
    github: 'https://github.com/Dedzz19/real_estate_api',
  },
  {
    id: 6,
    title: 'Udux Clone',
    category: 'Frontend',
    image: Udux,
    tech: ['React', 'motion',"tailwindcss"],
    link: 'https://project-test-lime.vercel.app/',
    github: 'https://github.com/Dedzz19/project_test',
  },
];
