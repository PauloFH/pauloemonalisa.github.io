// app/page.tsx
import TimeTogether from '@/components/TimeTogether';
import PhotoAlbum from '@/components/PhotoAlbum';
import OurSongs from '@/components/OurSongs';
import WhyILoveYou from '@/components/WhyILoveYou';
import DistanceOfLove from '@/components/DistanceOfLove';

export default function Home() {

  const startDate = '2024-04-05T14:30:00';
  const photos = [
    { src: '/images/foto1.jpg', alt: 'Nosso primeiro encontro', caption: 'Primeiro encontro, que nervosismo!' },
  ];

  const songs = [
    {
      title: 'Nome da Música 1',
      artist: 'Artista 1',
      embedUrl: 'https://open.spotify.com/embed/track/SEUIDATRACK?utm_source=generator',
    },
  ];

  const reasons = [
    'Seu abraço que é meu porto seguro.',
  ];

  // Informações de distância
  const yourCity = 'Sua Cidade';
  const herCity = 'Cidade Dela';
  const approximateDistanceKm = 350;


  return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
        <div className="container mx-auto space-y-12 py-10">
          <h1 className="text-5xl font-extrabold text-center text-pink-800 drop-shadow-lg mb-12">
            Para o Amor da Minha Vida, {herCity.split(' ')[0]}!
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
  );
}
