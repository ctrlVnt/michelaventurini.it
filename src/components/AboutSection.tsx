
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
            <h3 className="text-3xl font-semibold">I'm <span className="text-dancer-accent">Jane Doe</span></h3>
            <p className="text-lg text-gray-700">
              With over 10 years of professional dance experience, I've dedicated my life to the art of movement. My journey began at the age of 6, and I've since performed on stages across the world.
            </p>
            <p className="text-lg text-gray-700">
              My style combines elements of contemporary, ballet, and urban dance, creating a unique expression that tells stories through motion. I believe that dance is one of the most powerful forms of communication, transcending language and cultural barriers.
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
