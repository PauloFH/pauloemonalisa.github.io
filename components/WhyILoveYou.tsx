import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WhyILoveYouProps {
    reasons: string[];
}

const WhyILoveYou: React.FC<WhyILoveYouProps> = ({ reasons }) => {
    return (
        <Card className="w-full max-w-2xl mx-auto bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-900 text-center">Por que Eu Te Amo</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-pink-800 space-y-3">
                <p className="text-center italic mb-4">
                    Cada dia ao seu lado é um presente, e há tantas razões pelas quais meu coração escolheu você:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    {reasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                    ))}
                </ul>
                <p className="text-center mt-6 font-semibold">
                    E muitas outras que descobriremos juntos. Você é a minha pessoa favorita!
                </p>
            </CardContent>
        </Card>
    );
};

export default WhyILoveYou;
