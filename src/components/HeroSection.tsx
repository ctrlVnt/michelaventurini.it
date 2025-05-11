
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
          Benvenuto sul mio sito web personale
        </p>
        
        <div className="animate-fade-in opacity-0 [animation-delay:500ms]">
          <Button 
            onClick={scrollToContact}
            className="bg-dancer-accent hover:bg-amber-600 text-black px-8 py-6 text-lg font-medium rounded-none"
          >
            Contattami!
          </Button>
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
