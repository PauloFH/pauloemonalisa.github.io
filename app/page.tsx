
import fs from 'fs';
import path from 'path';

import HomeClient from './HomeClient';

export default function Home() {
  const startDate = '2024-06-23T14:00:00';
  const reasons = ['Seu sorriso que ilumina meu dia.'];
  const yourCity = 'Natal';
  const herCity = 'Mossoro';
  const approximateDistanceKm = 300;

  // Carregar fotos do sistema de arquivos
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const allFiles = fs.readdirSync(imagesDirectory);
  const photoFiles = allFiles
    .filter(file => 
        file.toLowerCase().startsWith('foto') && 
        /\.(jpeg|jpg|png)$/i.test(file)
    )
    .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
        return numA - numB;
    })
    .map(file => `/images/${file}`);

  return (
    <HomeClient
      startDate={startDate}
      reasons={reasons}
      yourCity={yourCity}
      herCity={herCity}
      approximateDistanceKm={approximateDistanceKm}
      photos={photoFiles}
    />
  );
}
