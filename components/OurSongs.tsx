import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const musicList = [
    { file: 'A Cor É Rosa - Silva.mp3', title: 'A Cor É Rosa', artist: 'Silva' },
    { file: 'Alinhamento Milenar - Jão.mp3', title: 'Alinhamento Milenar', artist: 'Jão' },
    { file: 'AO TEU LADO - Liniker.mp3', title: 'AO TEU LADO', artist: 'Liniker' },
    { file: 'Beija Eu - Silva.mp3', title: 'Beija Eu', artist: 'Silva' },
    { file: 'Caipirinha de Milão.mp3', title: 'Caipirinha de Milão', artist: 'Totô de Babalong' },
    { file: 'Grão de Areia - Rubel.mp3', title: 'Grão de Areia', artist: 'Rubel' },
    { file: 'Não Faz Diferença - Davi Sabbag.mp3', title: 'Não Faz Diferença', artist: 'Davi Sabbag' },
    { file: 'Religião - Jão.mp3', title: 'Religião', artist: 'Jão' },
    { file: 'Sorte - Silva & Linker.mp3', title: 'Sorte', artist: 'Silva & Liniker' },
    { file: 'TUDO - Liniker.mp3', title: 'TUDO', artist: 'Liniker' },
    { file: 'VELUDO MARROM - Liniker.mp3', title: 'VELUDO MARROM', artist: 'Liniker' },
];

const OurSongs: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [albumArt, setAlbumArt] = useState<string>('/window.svg');
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentSong = musicList[currentTrack];

    useEffect(() => {
        const fetchAlbumArt = async () => {
            try {
                const searchTerm = encodeURIComponent(`${currentSong.title} ${currentSong.artist}`);
                const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=1`);
                const data = await response.json();
                
                if (data.results && data.results.length > 0) {
                    const artworkUrl = data.results[0].artworkUrl100.replace('100x100', '600x600');
                    setAlbumArt(artworkUrl);
                } else {
                    setAlbumArt('/window.svg');
                }
            } catch (error) {
                console.error("Error fetching album art from iTunes:", error);
                setAlbumArt('/window.svg');
            }
        };

        fetchAlbumArt();

        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setProgress((audio.currentTime / audio.duration) * 100 || 0);
        };

        const handleTrackEnd = () => handleNext();

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleTrackEnd);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleTrackEnd);
        };
    }, [currentTrack]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(e => console.error("Error playing audio:", e));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, currentTrack]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentTrack((prev) => (prev + 1) % musicList.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + musicList.length) % musicList.length);
        setIsPlaying(true);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;

        const progressBar = e.currentTarget;
        const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
        const newTime = (clickPosition / progressBar.offsetWidth) * audio.duration;
        audio.currentTime = newTime;
    };

    return (
        <Card className="w-full max-w-md mx-auto bg-pink-50 text-blue-900 shadow-lg rounded-lg">
            <CardHeader className="text-center pt-6">
                <CardTitle className="text-3xl font-bold">Nossas Músicas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
                <img 
                    src={albumArt} 
                    alt="Capa do Álbum" 
                    className="w-64 h-64 object-cover rounded-lg shadow-md transition-all duration-500"
                    onError={() => setAlbumArt('/window.svg')}
                />
                
                <div className="w-full text-center pt-4">
                    <h3 className="text-xl font-semibold truncate">{currentSong.title}</h3>
                    <p className="text-md text-blue-700">{currentSong.artist}</p>
                    <div className="w-full bg-pink-200 rounded-full h-2 mt-3 cursor-pointer" onClick={handleProgressClick}>
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-2">
                    <Button onClick={handlePrev} className="bg-transparent hover:bg-pink-100 text-blue-900 p-2 rounded-full">
                        <SkipBack size={28} />
                    </Button>
                    <Button onClick={handlePlayPause} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
                        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                    </Button>
                    <Button onClick={handleNext} className="bg-transparent hover:bg-pink-100 text-blue-900 p-2 rounded-full">
                        <SkipForward size={28} />
                    </Button>
                </div>

                <audio ref={audioRef} src={`/musics/${currentSong.file}`} crossOrigin="anonymous" />
            </CardContent>
        </Card>
    );
};

export default OurSongs;
