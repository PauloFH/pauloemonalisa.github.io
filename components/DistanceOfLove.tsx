
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

interface DistanceOfLoveProps {
    city1: string;
    city2: string;
    distanceKm: number;
}

const DistanceOfLove: React.FC<DistanceOfLoveProps> = ({ city1, city2, distanceKm }) => {
    const position1: [number, number] = [-5.839294, -35.201653];
    const position2: [number, number] = [-5.187778, -37.343889];

    return (
        <Card className="w-full max-w-2xl mx-auto text-center bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-900">A Distância do Amor</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-pink-800">
                <p className="mb-4">
                    Apesar dos {distanceKm} quilômetros que separam {city1} e {city2},
                    nosso amor é a ponte que nos conecta, forte e inabalável.
                </p>
                <div style={{ height: '400px', width: '100%' }}>
                    <Map position1={position1} position2={position2} />
                </div>
                <p className="flex items-center justify-center gap-2 font-semibold mt-4">
                    <Heart className="text-red-500 fill-red-500" size={24} />
                    O amor verdadeiro não conhece barreiras.
                    <Heart className="text-red-500 fill-red-500" size={24} />
                </p>
            </CardContent>
        </Card>
    );
};

export default DistanceOfLove;
