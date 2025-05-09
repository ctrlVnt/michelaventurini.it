
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample images for the photo gallery
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Dance Performance 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Dance Performance 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
    alt: "Dance Performance 3",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Dance Performance 4",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1551989137-334bd6577da3",
    alt: "Dance Performance 5",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    alt: "Dance Performance 6",
  },
];

const PhotosSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  
  return (
    <section id="photos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative">
          Photo Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-dancer-accent mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
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
