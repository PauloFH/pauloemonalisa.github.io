
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface DistanceOfLoveProps {
    city1: string;
    city2: string;
    distanceKm: number;
}

const DistanceOfLove: React.FC<DistanceOfLoveProps> = ({ city1, city2, distanceKm }) => {
    return (
        <Card className="w-full max-w-2xl mx-auto text-center bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-pink-700">A Distância do Amor</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-pink-800">
                <p className="mb-4">
                    Apesar dos {distanceKm} quilômetros que separam {city1} e {city2},
                    nosso amor é a ponte que nos conecta, forte e inabalável.
                </p>
                <p className="flex items-center justify-center gap-2 font-semibold">
                    <Heart className="text-red-500 fill-red-500" size={24} />
                    O amor verdadeiro não conhece barreiras.
                    <Heart className="text-red-500 fill-red-500" size={24} />
                </p>
            </CardContent>
        </Card>
    );
};

export default DistanceOfLove;
