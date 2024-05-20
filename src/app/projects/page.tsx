// src/app/projects/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image 
                  src="/images/advokatbyra.png"
                  alt="Advokatbyrå Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h2 className="text-3xl font-bold">Advokatbyrå</h2>
                  <p className="mt-1">A professional website for a law firm.</p>
                </div>
              </div>
              <a href="https://advokatbyra.netlify.app/" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white text-center py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                View Project
              </a>
            </div>
            {/* Lägg till fler projekt här */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ProjectsPage;
