"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimeTogetherProps {
    startDate: string;
}

const TimeTogether: React.FC<TimeTogetherProps> = ({ startDate }) => {
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const start = new Date(startDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = now - start;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <Card className="w-full max-w-2xl mx-auto text-center bg-pink-50 shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-900 text-center"></CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-pink-600">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-extrabold">{timeElapsed.days}</span>
                    <span className="text-sm uppercase">Dias</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-extrabold">{timeElapsed.hours}</span>
                    <span className="text-sm uppercase">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-extrabold">{timeElapsed.minutes}</span>
                    <span className="text-sm uppercase">Minutos</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-extrabold">{timeElapsed.seconds}</span>
                    <span className="text-sm uppercase">Segundos</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default TimeTogether;
