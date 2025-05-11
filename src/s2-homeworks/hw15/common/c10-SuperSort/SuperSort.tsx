import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? '🔽'
        : sort === up
            ? '🔼'
            : '↕️'

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
            <span>{value}</span>
            <span id={id + '-icon-' + sort}>{icon}</span>
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

        </span>
    )
}

export default SuperSort
