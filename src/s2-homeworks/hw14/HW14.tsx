import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'

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
        .then((res) => {
            return { data: { techs: res.data.techs.filter((tech) => tech.includes(find)) } }; // Фильтруем данные
        })
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message);
            return { data: { techs: [] } }; // Возвращаем пустой массив techs в случае ошибки
        });
};

const HW14 = () => {
    const [find, setFind] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [techs, setTechs] = useState<string[]>([]);

    const sendQuery = (value: string) => {
        setLoading(true);
        getTechs(value)
            .then((res) => {
                setTechs(res?.data.techs || []); // Устанавливаем только отфильтрованные данные
            })
            .finally(() => setLoading(false));
    };

    const onChangeText = (value: string) => {
        setFind(value);
        setSearchParams({ find: value }); // Обновляем параметры URL
    };

    useEffect(() => {
        const params = Object.fromEntries(searchParams); // Преобразуем параметры URL в объект
        const findValue = params.find || ''; // Если параметр find отсутствует, используем пустую строку
        sendQuery(findValue); // Загружаем данные
        setFind(findValue); // Устанавливаем значение в поле ввода
    }, [searchParams]);

    const mappedTechs = techs.map((t) => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ));

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
    );
};

export default HW14;