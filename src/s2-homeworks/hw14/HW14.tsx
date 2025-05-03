import React, { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import { useSearchParams } from 'react-router-dom'

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            { params: { find } }
        )
        //!!
        // .then((res) => {
        //     // Фильтруем данные на клиенте, если сервер возвращает лишние элементы
        //     return { data: { techs: res.data.techs.filter((tech) => tech.includes(find)) } };
        // })
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
            //!!
           return { data: { techs: [] } }
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                if (res?.data.techs) {
                    const filteredTechs = res.data.techs.filter((tech) => 
                    tech.toLowerCase().includes(value.toLowerCase())
                );
                    setTechs(filteredTechs)
                } else {
                    setTechs([])
                }
                // делает студент

                // сохранить пришедшие данные

                //
            })
            .finally(() => setLoading(false))
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент
        const params = Object.fromEntries(searchParams)// извлекает текущие параметры из URL и преобразует их в объект
        params.find = value// обновляет или добавляет параметр 'find' в этот объект
        // добавить/заменить значение в квери урла
        // setSearchParams(
        setSearchParams({ find: value })// заменяет параметры URL, устанавливая 'find' равным введённому значению
        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams) //Object.fromEntries(searchParams) превращает его в обычный объект JS,
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [searchParams])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br />}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
