// Represents a cell in the grid can either

// be grass, water, house, tree, or empty
export enum CellType {
    Grass = 0,
    House = 1,
    Tree = 2,
    Solar = 3,
    Empty = 4,
}

const CELL_SIZE = 64;

import Image from 'next/image'

const MAPPING = {
    '0': '/grass.png',
    '1': '/home_day.png',
    '2': '/trees.png',
    '3': '/solar.png',
    '4': '',
}

export default function Cell(props) {
    if(props.value == CellType.Empty) {
        return (
            <div className='w-[32rem] h-[32rem]'>
            </div>
        ) 
    }

    return (
        <div className=''>
            <Image className='' alt="" width="128" height="128" src={MAPPING[props.value]} />
        </div>
    )
}
