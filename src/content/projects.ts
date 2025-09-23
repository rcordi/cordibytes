import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Real-Time Sign Language Detector",
    description: "Webcam-based ASL detector achieving 95%+ validation accuracy using Python, TensorFlow, OpenCV.",
    image: project1,
    link: "#",
    tech: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Spotify-Style Artist Recommender",
    description: "Collaborative-filtering model to recommend artists from a 100k-play dataset in Python.",
    image: project2,
    link: "#",
    tech: ["Python", "React", "D3.js"],
  },
  {
    title: "SkillTree (HackPrinceton)",
    description: "Web interface visualizing learning paths using Svelte and Tailwind; demoed to 200+ attendees.",
    image: project3,
    link: "#",
    tech: ["TypeScript", "OpenAI API"],
  },
];

export default projects;
