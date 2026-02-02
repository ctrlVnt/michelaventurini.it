
import { Button } from "@/components/ui/button";
import sample from '/video/bg.mp4'

const HeroSection = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg auto bg-center brightness-[0.4]"
      >
        <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="animate-fade-in opacity-0 text-5xl md:text-7xl font-bold text-white mb-6 [animation-delay:100ms]">
          Michela Venturini <span className="text-dancer-accent"> in air</span>
        </h1>
        
        <p className="animate-fade-in opacity-0 text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto [animation-delay:300ms]">
          Benvenut* sul mio sito web personale
        </p>
        
        <div className="animate-fade-in opacity-0 [animation-delay:500ms]">
          <a 
                  href="https://www.instagram.com/venturinimichela_/" 
                  aria-label="Instagram"
                >
            <Button className="bg-dancer-accent hover:bg-amber-600 text-black px-8 py-6 text-lg font-medium">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                  Seguimi su Instagram
              </Button>
           </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white mb-2">Scroll</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
