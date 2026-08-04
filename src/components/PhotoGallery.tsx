import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/towingData';
import { GalleryPhoto } from '../types';
import { Sparkles, Maximize2, X, Phone, Truck } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-amber-600" />
            Equipment & Fleet Gallery
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
            Our Modern Towing Rig Fleet
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Clean, maintained, heavy-duty equipment ready to handle everything from sports sedans to off-road pickup trucks.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-64 rounded-3xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-amber-400"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md">
                  {photo.category}
                </span>
                <h3 className="font-display font-extrabold text-lg text-white">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900 text-white p-2.5 rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-96 sm:h-[480px] bg-slate-900">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Zacks Towing Fleet
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-slate-950">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {selectedPhoto.caption}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
