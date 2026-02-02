
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import photo1 from '/img/1.jpeg';
import photo2 from '/img/2.jpeg';
import photo3 from '/img/3.jpeg';
import photo4 from '/img/4.jpeg';
import photo5 from '/img/5.jpeg';
import photo6 from '/img/6.jpeg';
import photo7 from '/img/7.jpeg';
import photo8 from '/img/8.jpeg';
import photo9 from '/img/9.jpeg';
import photo10 from '/img/10.jpeg';
import photo11 from '/img/11.jpeg';
import photo12 from '/img/12.jpeg';
import photo13 from '/img/13.jpeg';
import photo14 from '/img/14.jpeg';
import photo15 from '/img/15.jpeg';


// Sample images for the photo gallery
const photos = [
  {
    id: 1,
    url: photo1,
    alt: "Dance Performance 1",
  },
  {
    id: 2,
    url: photo2,
    alt: "Dance Performance 2",
  },
  {
    id: 3,
    url: photo3,
    alt: "Dance Performance 3",
  },
  {
    id: 4,
    url: photo4,
    alt: "Dance Performance 4",
  },
  {
    id: 5,
    url: photo5,
    alt: "Dance Performance 5",
  },
  {
    id: 6,
    url: photo6,
    alt: "Dance Performance 6",
  },
  {
    id: 7,
    url: photo7,
    alt: "Dance Performance 6",
  },
  {
    id: 8,
    url: photo8,
    alt: "Dance Performance 6",
  },
  {
    id: 9,
    url: photo9,
    alt: "Dance Performance 7",
  },
  {
    id: 10,
    url: photo10,
    alt: "Dance Performance 8",
  },
  {
    id: 11,
    url: photo11,
    alt: "Dance Performance 9",
  },
  {
    id: 12,
    url: photo12,
    alt: "Dance Performance 10",
  },
  {
    id: 13,
    url: photo13,
    alt: "Dance Performance 11",
  },
  {
    id: 14,
    url: photo14,
    alt: "Dance Performance 12",
  },
  {
    id: 15,
    url: photo15,
    alt: "Dance Performance 13",
  }
];

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section id="photos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative">
          Photo Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-dancer-accent mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? photos : photos.slice(0, 6)).map((photo) => (
            <div
              key={photo.id}
              className="aspect-square overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {photos.length > 8 && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Mostra meno" : "Mostra di più"}
            </Button>
          </div>
        )}
        
        <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedPhoto && (
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotosSection;
