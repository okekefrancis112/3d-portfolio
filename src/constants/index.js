import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  solidity,
  hardhat,
  keble,
  lamda,
  web3bridge,
  covalent,
  threejs,
  echo,
  slack,
  youtube,
  vibe,
  cote,
  discord,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web3 Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    title: "Solidity",
    icon: solidity,
  },
  {
    title: "hardhat",
    icon: hardhat,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Keble",
    icon: keble,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Web3bridge",
    icon: web3bridge,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "web3 Developer",
    company_name: "Covalent",
    icon: covalent,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Lamda",
    icon: lamda,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Francis proved me wrong.",
    name: "Adebisi Borokini",
    designation: "CPO",
    company: "Keble",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Francis does.",
    name: "Akerele Oluwasogo",
    designation: "COO",
    company: "Leadleap",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn",
  },
  {
    testimonial:
      "After Francis optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Valentine Offiah",
    designation: "CTO",
    company: "Keble",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Easton",
  },
];

const projects = [
  {
    name: "Echo",
    description:
      "A production-ready, AI-powered customer support platform built end-to-end as a scalable B2B SaaS. The system delivers real-time AI chat powered by programmable agents, voice-based support, and an intelligent knowledge base using embeddings and RAG. It supports automated resolution, seamless human handoff, and multi-tenant workspaces with team management, authentication, and subscription billing. The platform includes an embeddable support widget, an operator dashboard for managing conversations, and enterprise-grade observability and security.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "ai-agents", color: "blue-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "convex", color: "pink-text-gradient" },
      { name: "vapi", color: "blue-text-gradient" },
      { name: "clerk", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
      { name: "turborepo", color: "blue-text-gradient" },
      { name: "sentry", color: "green-text-gradient" },
    ],
    image: echo,
    live_link: "https://echo-web-bnur.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/echo",
  },
  {
    name: "Slack",
    description:
    "A full-stack, real-time team communication platform inspired by Slack, built end-to-end with support for multi-tenant workspaces, channels, and direct messaging. The application features live message delivery, threaded conversations, reactions, message editing and deletion, image attachments, and role-based access control. Users can create workspaces and channels, invite members via secure invite codes, and collaborate seamlessly in both group and 1:1 conversations. Deployed on Vercel using a modern React and Next.js stack.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "real-time", color: "blue-text-gradient" },
      { name: "websockets", color: "green-text-gradient" },
      { name: "rbac", color: "pink-text-gradient" },
      { name: "next-auth", color: "blue-text-gradient" },
      { name: "shadcn-ui", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "render", color: "blue-text-gradient" },
      { name: "clerk", color: "green-text-gradient" },
    ],
    image: slack,
    live_link: "https://slack-clone-8vhk.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/slack-clone",
  },
  {
    name: "Youtube Clone",
    description:
      "A full-stack YouTube video platform built end-to-end with modern web technologies. The application features advanced video streaming with quality controls, real-time video processing, AI-powered transcription and content generation, and a full Creator Studio with analytics. Users can upload and manage videos, interact through comments, likes, and subscriptions, and access personalized feeds with watch history tracking. Designed with a modular architecture for scalability and deployed using a production-ready stack."
    ,
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "trpc", color: "blue-text-gradient" },
      { name: "mux", color: "green-text-gradient" },
      { name: "ai-features", color: "pink-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
      { name: "drizzleorm", color: "green-text-gradient" },
      { name: "clerk", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "blue-text-gradient" },
      { name: "shadcn-ui", color: "green-text-gradient" },
    ],
    image: youtube,
    live_link: "https://you-tube-clone-7sz9.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/youtube-clone",
  },
  {
    name: "Vibe",
    description:
      "An AI-powered application builder that generates full-stack projects from natural language prompts. The platform uses programmable AI agents orchestrated with background jobs to generate code, provision databases, and execute applications securely inside cloud sandboxes. It features live project previews, a developer dashboard, authentication and billing, usage-based credits, and AI-assisted pull request reviews—demonstrating a complete AI-first SaaS workflow from generation to deployment.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "ai-agents", color: "blue-text-gradient" },
      { name: "inngest", color: "green-text-gradient" },
      { name: "trpc", color: "pink-text-gradient" },
      { name: "prisma", color: "blue-text-gradient" },
      { name: "neon", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
      { name: "clerk", color: "blue-text-gradient" },
    ],
    image: vibe,
    live_link: "https://vibe-ai-ptfw.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/vibe",
  },
  {
    name: "Cote Royale",
    description:
  "A high-end, animated luxury fragrance website inspired by modern premium design aesthetics. The project features a full-screen video hero, smooth page transitions, and dynamically routed fragrance detail pages. Built with a modular, component-driven architecture, the site delivers a responsive and immersive user experience across devices, combining refined motion design with a clean, minimal UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "animations", color: "blue-text-gradient" },
      { name: "ui-ux", color: "green-text-gradient" },
      { name: "react-router", color: "pink-text-gradient" },
      { name: "responsive-design", color: "blue-text-gradient" },
      { name: "github-pages", color: "green-text-gradient" },
    ],
    image: cote,
    live_link: "https://cote-royale.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/cote-royale",
  },
  {
    name: "Discord Clone",
    description:
      "A full-stack, real-time Discord clone built end-to-end with support for servers, channels, and 1:1 conversations. The platform features live messaging with real-time edits and deletions, role-based member management, file attachments, and infinite message loading. It supports text, audio, and video channels, including 1:1 video calls powered by LiveKit. The app includes a complete invite system, responsive UI, light/dark mode, and is built with modern web technologies for production-ready performance.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "real-time", color: "pink-text-gradient" },
      { name: "socket.io", color: "blue-text-gradient" },
      { name: "livekit", color: "green-text-gradient" },
      { name: "prisma", color: "pink-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "clerk", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "shadcn-ui", color: "blue-text-gradient" },
    ],
    image: discord,
    live_link: "https://dis-cord-yyop.onrender.com",
    source_code_link: "https://github.com/okekefrancis112/discord-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
