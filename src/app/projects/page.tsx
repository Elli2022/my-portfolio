// src/app/projects/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const projects = [
  {
    img: "/images/advokatbyra.png",
    title: "Advokatbyrå",
    description: "A professional website for a law firm.",
    tech_stack: ["HTML", "CSS", "JavaScript", "React"],
    github_url: "https://github.com/username/advokatbyra",
    demo_url: "https://advokatbyra.netlify.app/"
  },
  {
    img: "/images/calculator.png",
    title: "Calculator",
    description: "Simple Calculator",
    tech_stack: ["HTML", "CSS", "Typescript"],
    github_url: "https://github.com/Elli2022/Elli2022-FE22-js2-mp4-eleonora-nocentini",
    demo_url: "https://easytypescriptcalculus.netlify.app/"
  },
  {
    img: "/images/pokemon.png",
    title: "Pokémon API",
    description: "Catch'em All with Pokémon API",
    tech_stack: ["HTML", "CSS", "Javascript"],
    github_url: "https://github.com/Elli2022/catchem-all-pokemon",
    demo_url: "https://pokemincatchthemall.netlify.app"
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Min Portfölj - Projekt</title>
        <meta
          name="description"
          content="Eleonoras projektportfölj - en mångsidig front-end utvecklare med passion för teknik och programmering."
        />
      </Head>

      <main className="min-h-screen animated-gradient">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-extrabold mb-16 text-center text-gray-800 dark:text-white">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image 
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap mt-4">
                    {project.tech_stack.map((tech, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-1 px-3 rounded-full mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex mt-4">
                    {project.github_url && (
                      <a
                        className="btn SecondaryBtn btn-shadow bg-gray-800 text-white py-2 px-4 rounded-full mr-2"
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    )}
                    {project.demo_url && (
                      <a
                        className="btn PrimaryBtn btn-shadow bg-blue-600 text-white py-2 px-4 rounded-full"
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo ➜
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ProjectsPage;
