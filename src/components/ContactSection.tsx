
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative">
          Contattami
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-dancer-accent mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informazioni di contatto</h3>
            <p className="text-gray-700 mb-8">
            Sono disponibile per spettacoli, collaborazioni, docenze e workshop. 
            Sentiti libero di contattarci per discutere di come possiamo creare qualcosa di bello insieme.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-dancer-accent mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">michelaventurini41@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-dancer-accent mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+39 338 138 6806</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-dancer-accent mr-4" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Grugliasco, TO</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-dancer-accent hover:bg-amber-600 text-black"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
