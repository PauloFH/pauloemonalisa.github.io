"use client";

import React, { useEffect, useState } from 'react';

interface FallingElementProps {
    id: string;
    type: 'heart' | 'panda';
    left: number;
    size: number;
    duration: number;
    delay: number;
}

const FallingElement: React.FC<FallingElementProps> = ({ id, type, left, size, duration, delay }) => {
    const emojiContent = type === 'heart' ? '❤️' : '🐼';

    return (
        <div
            key={id}
            className={`absolute opacity-0 animate-fall-fade`}
            style={{
                left: `${left}%`,
                fontSize: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        >

            {emojiContent}
        </div>
    );
};

const FallingElements: React.FC = () => {
    const [elements, setElements] = useState<FallingElementProps[]>([]);

    useEffect(() => {
        const generateElement = () => {
            const id = Math.random().toString(36).substring(2, 9);
            const type = Math.random() > 0.5 ? 'heart' : 'panda';
            const left = Math.random() * 100;
            const size = Math.random() * (60 - 20) + 20;
            const duration = Math.random() * (15 - 8) + 8;
            const delay = Math.random() * 5;

            return { id, type: type as 'heart' | 'panda', left, size, duration, delay };
        };

        const initialElements = Array.from({ length: 20 }).map(generateElement);
        setElements(initialElements);

        const interval = setInterval(() => {
            setElements((prevElements) => {
                const updatedElements = prevElements.filter((_, i) => i < 20);
                return [...updatedElements, generateElement()];
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
            {elements.map((el) => (
                <FallingElement key={el.id} {...el} />
            ))}
        </div>
    );
};

export default FallingElements;
