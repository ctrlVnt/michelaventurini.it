
import { Card, CardContent } from "@/components/ui/card";
import about from '/img/about.jpg'

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
                src={about} 
                alt="Dancer Portrait" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-dancer-accent -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Sono <span className="text-dancer-accent">Michela Venturini</span></h3>
            <p className="text-lg text-gray-700">
              Insegnante e acrobata aerea, specializzata nel cerchio aereo con 
              un amore per spin e dinamica ma pratic anche tessuto e cinghie aeree (long loop).
              Mi ritengo molto creativa, organizzata, precisa e responsabile.
              Mi piace imparare sempre cose nuove e trasmetterle al prossimo!
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Experience</h4>
                  <p className="text-gray-700">1+ anni</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Performance</h4>
                  <p className="text-gray-700">Spettacoli locali</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Styles</h4>
                  <p className="text-gray-700">Cerchio dinamico e spin, cinghie, long loop e tessuto</p>
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
