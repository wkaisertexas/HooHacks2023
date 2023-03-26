// Represents a cell in the grid can either

// be grass, water, house, tree, or empty
export enum CellType {
    Grass = 0,
    Water = 1,
    House = 2,
    Tree = 3,
    Empty = 4
}

const CELL_SIZE = 64;

import Image from 'next/image'

export default function Cell(props) {
    return (
        // <div className={`cell w-16 h-16`}>
            <Image alt="grass" width="64" height="64" src='/grass.png' />
        // </div>
    )
}
