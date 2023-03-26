// Represents a cell in the grid can either

// be grass, water, house, tree, or empty
export enum CellType {
    Grass = 0,
    House = 1,
    Tree = 2,
    Empty = 4
}

const CELL_SIZE = 64;

import Image from 'next/image'

const MAPPING = {
    0: '/grass.png',
    1: '',
    2: '',
    3: '',
    4: '',
}

export default function Cell(props) {
    if(props.value == CellType.Empty) {
        return (
            <div className='w-16 h-16'>
            </div>
        ) 
    }

    return (
        <div className='w-16 h-16'>
            <Image className="z-0" alt="" width="64" height="64" src={MAPPING[props.value]} />
            <Image className="z-10" alt="grass" width="64" height="64" src='/grass.png' />
        </div>
    )
}
