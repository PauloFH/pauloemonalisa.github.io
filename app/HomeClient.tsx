"use client";

import { useState } from 'react';
import TimeTogether from '@/components/TimeTogether';
import PhotoAlbum from '@/components/PhotoAlbum';
import OurSongs from '@/components/OurSongs';
import WhyILoveYou from '@/components/WhyILoveYou';
import DistanceOfLove from '@/components/DistanceOfLove';
import SplashScreen from '@/components/SplashScreen';
import FallingElements from '@/components/FallingElements';

interface HomeClientProps {
  startDate: string;
  reasons: string[];
  yourCity: string;
  herCity: string;
  approximateDistanceKm: number;
  photos: string[];
}

export default function HomeClient({
  startDate,
  reasons,
  yourCity,
  herCity,
  approximateDistanceKm,
  photos,
}: HomeClientProps) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onDismiss={() => setShowSplash(false)} />}

      {!showSplash && (
        <main className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-200 p-8 relative">
          <FallingElements />
          <div className="container mx-auto space-y-12 py-10 relative z-20">
            <h1 className="text-5xl font-extrabold text-center text-blue-900 drop-shadow-lg mb-12">
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
              <OurSongs />
            </section>

            <section id="why-i-love-you">
              <WhyILoveYou reasons={reasons} />
            </section>

            <footer className="text-center text-blue-600 mt-16 text-sm">
              <p>Feito com todo o meu amor para você, {herCity.split(' ')[0]}.</p>
              <p>&copy; {new Date().getFullYear()} Paulo. Todos os direitos reservados ao nosso amor.</p>
            </footer>
          </div>
        </main>
      )}
    </>
  );
}
