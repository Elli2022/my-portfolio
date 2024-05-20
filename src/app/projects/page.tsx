// src/app/projects/page.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto my-8 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">Advokatbyrå</h2>
            <p className="text-gray-700 mb-4">A professional website for a law firm.</p>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image 
                src="/images/advokatbyra.png"
                alt="Advokatbyrå Project"
                width={600}
                height={400}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <a href="https://advokatbyra.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
              View Project
            </a>
          </div>
          {/* Lägg till fler projekt här */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
