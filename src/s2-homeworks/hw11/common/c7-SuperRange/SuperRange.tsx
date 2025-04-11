import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
        value={props.value} // Передаем массив значений
        // onChange={(event, value, activeThumb) => {
        //     console.log('Slider onChange:', value, 'Active thumb:', activeThumb); // Логируем значения
        //     props.onChange && props.onChange(event, value, activeThumb); // Вызываем переданный обработчик
        // }}
        onChange={props.onChange} // Вызываем обработчик изменений
      min={props.min}
      max={props.max}
    
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 4,
                '& .MuiSlider-thumb': {
                    height: 14, 
                    width: 14,
                    backgroundColor: '#fff', 
                    border: '2px solid #00CC22',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',  
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.28, 
                    backgroundColor: '#bfbfbf', 
                },
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
