import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 4,
                '& .MuiSlider-thumb': {
                    height: 14, // Размер маркера
                    width: 14,
                    backgroundColor: '#fff', // Цвет маркера
                    border: '2px solid #00CC22', // Граница маркера
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)', // Эффект при наведении
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.28, // Прозрачность линии
                    backgroundColor: '#bfbfbf', // Цвет линии
                },
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
