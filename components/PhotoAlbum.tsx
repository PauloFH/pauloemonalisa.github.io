"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Photo {
    src: string;
    alt: string;
    caption?: string;
}

interface PhotoAlbumProps {
    photos: Photo[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    return (
        <Card className="w-full max-w-4xl mx-auto bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-pink-700 text-center">Nossas Memórias em Fotos</CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel className="w-full">
                    <CarouselContent>
                        {photos.map((photo, index) => (
                            <CarouselItem key={index}>
                                <div
                                    className="relative w-full h-72 sm:h-96 cursor-pointer overflow-hidden rounded-lg shadow-md group"
                                    onClick={() => setSelectedPhotoIndex(index)}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {photo.caption && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {photo.caption}
                                        </div>
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>

                <Dialog open={selectedPhotoIndex !== null} onOpenChange={() => setSelectedPhotoIndex(null)}>
                    <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
                        {selectedPhotoIndex !== null && (
                            <Carousel
                                opts={{
                                    startIndex: selectedPhotoIndex,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {photos.map((photo, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full h-[70vh] flex items-center justify-center">
                                                <Image
                                                    src={photo.src}
                                                    alt={photo.alt}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="rounded-lg"
                                                />
                                                {photo.caption && (
                                                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 p-2 rounded text-white text-center">
                                                        {photo.caption}
                                                    </div>
                                                )}
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                            </Carousel>
                        )}
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
};

export default PhotoAlbum;
