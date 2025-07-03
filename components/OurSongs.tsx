import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Song {
    title: string;
    artist: string;
    embedUrl: string;
}

interface OurSongsProps {
    songs: Song[];
}

const OurSongs: React.FC<OurSongsProps> = ({ songs }) => {
    return (
        <Card className="w-full max-w-4xl mx-auto bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-pink-700 text-center">Nossas Músicas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {songs.map((song, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">{song.title} - {song.artist}</h3>
                        <div className="w-full rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src={song.embedUrl}
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                title={`${song.title} by ${song.artist}`}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default OurSongs;
