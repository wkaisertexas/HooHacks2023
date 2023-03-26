import React, {useState} from 'react';
import Cell from './Cell';

const NUMROWS = 20;
const NUMCOLS = 20;

export default function Grid(props) {
    const [viewModel, setViewModel] = useState(props.viewModel);
    
    const setCell = (row, col, val) => {
        const newGrid = [...viewModel.grid];
        newGrid[row * NUMROWS + col] = val;
        viewModel.setGrid(newGrid);
    }
    
    return (
        <div className='griddy top-0 left-0 absolute -z-10'>
            {
                viewModel.grid.map((elem, id) => (
                    <Cell key={id} value={elem}/>
                ))
            }
        </div>
    )
}``