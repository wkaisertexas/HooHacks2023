// Represents a cell in the grid can either

// be grass, water, house, tree, or empty
export enum CellType {
    Grass = 0,
    Water = 1,
    House = 2,
    Tree = 3,
    Empty = 4
}

export default function Cell({type}) {
    return (
        <div className='cell'>
            <p>{type}</p>
        </div>
    )
}
