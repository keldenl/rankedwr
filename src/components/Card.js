import React, { Children } from 'react';
import { Typography } from "@mui/material";
import './Card.css'


export function Card({ Icon, title, children }) {
    const childrenArray = Children.toArray(children)
    const isCarousal = childrenArray.length > 1;

    return (
        <div className='card-container'>
            <Typography variant="h6" className='card-title' sx={{
                fontWeight: 'bolder',
                display: 'flex',
                alignItems: 'center',
                gap: 1/2
            }}>
                <Icon />{title.toUpperCase()}
            </Typography>
            <div className={`${isCarousal ? 'carousal' : ''}`}>
                {childrenArray.map(c =>
                    <div className={`card ${isCarousal ? 'carousal-child' : ''}`}>
                        {c}
                    </div>
                )}
            </div>
        </div>
    )
}