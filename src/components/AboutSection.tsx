
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-dancer-accent mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Dancer Portrait" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-dancer-accent -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Sono <span className="text-dancer-accent">Michela Venturini</span></h3>
            <p className="text-lg text-gray-700">
              Con oltre 10 anni di esperienza professionale nella danza, ho dedicato la mia vita all'arte del movimento. Il mio viaggio è iniziato all'età di 6 anni e da allora mi sono esibito sui palchi di tutto il mondo. 
            </p>
            <p className="text-lg text-gray-700">
              Il mio stile combina elementi di danza contemporanea, balletto e danza urbana, creando un'espressione unica che racconta storie attraverso il movimento. Credo che la danza sia una delle forme di comunicazione più potenti, che trascende le barriere linguistiche e culturali.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Experience</h4>
                  <p className="text-gray-700">10+ years professional</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Performances</h4>
                  <p className="text-gray-700">200+ international shows</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Awards</h4>
                  <p className="text-gray-700">15 dance competition awards</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Styles</h4>
                  <p className="text-gray-700">Contemporary, Ballet, Urban</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
