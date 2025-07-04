"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PhotoAlbumProps {
  photos: string[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((prevIndex) => (prevIndex! + 1) % photos.length);
        }
    };

    const handlePrev = () => {
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
        }
    };

    const openDialog = (index: number) => setSelectedPhotoIndex(index);
    const closeDialog = () => setSelectedPhotoIndex(null);

    const renderPhotoThumbnail = (photo: string, index: number) => (
        <div 
            className="relative w-full h-72 cursor-pointer overflow-hidden rounded-lg shadow-md group bg-pink-100" // Altura aumentada para h-72
            onClick={() => openDialog(index)}
        >
            <Image
                src={photo}
                alt={`Nossa foto ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );

    return (
        <Card className="w-full max-w-6xl mx-auto bg-pink-50 shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-900 text-center">Nossas Memórias</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {photos.map((photo, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                {renderPhotoThumbnail(photo, index)}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                </Carousel>

                <Dialog open={selectedPhotoIndex !== null} onOpenChange={closeDialog}>
                    <DialogContent 
                        className="max-w-4xl w-full h-[80vh] p-0 border-none bg-transparent flex items-center justify-center"
                    >
                        {selectedPhotoIndex !== null && (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={photos[selectedPhotoIndex]}
                                    alt={`Nossa foto ${selectedPhotoIndex + 1}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                                <Button 
                                    onClick={handlePrev} 
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                                >
                                    <ChevronLeft size={24} />
                                </Button>
                                <Button 
                                    onClick={handleNext} 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                                >
                                    <ChevronRight size={24} />
                                </Button>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default PhotoAlbum;
