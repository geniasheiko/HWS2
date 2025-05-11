import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
 { page, itemsCountForPage, totalCount, onChange, id = 'hw15'}) => {
    //const lastPage = 10 // пишет студент // вычислить количество страниц
    const lastPage = Math.ceil(totalCount/itemsCountForPage)
const onChangeCallback = (event: any, page: number) => {  //при переключении страницы вызывается 
        // пишет студент                                  //onChange с новой страницей и текущим числом элементов на страницу.
         onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        const newCount = +event.currentTarget.value   //при изменении количества строк на страницу 
        onChange(1, newCount)                        //возвращаемся на первую страницу и передаём новое значение количества.
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                     '& .MuiPaginationItem-root': {
                        color: '#1976d2',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#1976d2',
                        color: 'white',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
