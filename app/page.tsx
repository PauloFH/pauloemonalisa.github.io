
"use client";

import { useState } from 'react';
import TimeTogether from '@/components/TimeTogether';
import PhotoAlbum from '@/components/PhotoAlbum';
import OurSongs from '@/components/OurSongs';
import WhyILoveYou from '@/components/WhyILoveYou';
import DistanceOfLove from '@/components/DistanceOfLove';
import SplashScreen from '@/components/SplashScreen'; // Novo import
import FallingElements from '@/components/FallingElements'; // Novo import

export default function Home() {
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar a visibilidade do splash screen

  const startDate = '2023-06-15T14:30:00'; // Exemplo: 15 de Junho de 2023 às 14:30:00
  const photos = [
    { src: '/images/foto0.JPEG', alt: 'Nosso primeiro encontro', caption: 'Primeiro encontro, que nervosismo!' },
  ];
  const songs = [
    { title: 'Nome da Música 1', artist: 'Artista 1', embedUrl: 'https://open.spotify.com/embed/track/SEUIDATRACK?utm_source=generator' },
  ];
  const reasons = [
    'Seu sorriso que ilumina meu dia.',
  ];
  const yourCity = 'Natal';
  const herCity = 'Mossoro';
  const approximateDistanceKm = 350;


  return (
      <>
        {showSplash && <SplashScreen onDismiss={() => setShowSplash(false)} />}

        {!showSplash && (
            <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8 relative">
              <FallingElements />
              <div className="container mx-auto space-y-12 py-10 relative z-20">
                <h1 className="text-5xl font-extrabold text-center text-pink-800 drop-shadow-lg mb-12">
                  Para o Amor da Minha Vida, Monalisa!
                </h1>

                <section id="time-together">
                  <TimeTogether startDate={startDate} />
                </section>

                <section id="distance-of-love">
                  <DistanceOfLove city1={yourCity} city2={herCity} distanceKm={approximateDistanceKm} />
                </section>

                <section id="photo-album">
                  <PhotoAlbum photos={photos} />
                </section>

                <section id="our-songs">
                  <OurSongs songs={songs} />
                </section>

                <section id="why-i-love-you">
                  <WhyILoveYou reasons={reasons} />
                </section>

                <footer className="text-center text-pink-600 mt-16 text-sm">
                  <p>Feito com todo o meu amor para você, {herCity.split(' ')[0]}.</p>
                  <p>&copy; {new Date().getFullYear()} Paulo. Todos os direitos reservados ao nosso amor.</p>
                </footer>
              </div>
            </main>
        )}
      </>
  );
}
