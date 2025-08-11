import React from 'react';
import { IconType } from 'react-icons';

interface SocialProps {
    url: string;
    icon: IconType;
    size?: number;
    color?: string;
}
export function Social({ url, icon, size = 35, color = "white" }: SocialProps) {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {React.createElement(icon, { size, color })}
        </a>
    )
}