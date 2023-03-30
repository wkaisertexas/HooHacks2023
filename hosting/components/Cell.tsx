// Represents a cell in the grid can either

// be grass, water, house, tree, or empty
export enum CellType {
    Grass = 0,
    House = 1,
    Tree = 2,
    Solar = 3,
    Empty = 4,
    Building = 5,
}

const CELL_SIZE = 64;

import Image from 'next/image'

const MAPPING = {
    '0': '/grass.png',
    '1': '/home_day.png',
    '2': '/trees.png',
    '3': '/solar.png',
    '4': '',
    '5': '/building.png',
}

export default function Cell(props) {
    // allow for images to be dropped into the cell

    if(props.value == CellType.Empty) {
        return (
            <div className='w-[32rem] h-[32rem]'>
            </div>
        ) 
    }

    if(props.value == CellType.Grass){
        return (
            <div>
                <Image alt="" width="128" height="128" src={MAPPING[props.value]} />
            </div>
        )
    }

    return (
        <div className='relative row-span-1 col-span-1'>
            <Image className='absolute z-1 block left-0 right-0' alt="" width="128" height="128" src={MAPPING[CellType.Grass]} />
            <Image className='relative block z-0' alt="" width="128" height="128" src={MAPPING[props.value]} />
        </div>
    )
}