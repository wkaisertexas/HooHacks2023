import React, {useState} from 'react';
import Cell from './Cell';

export default function Grid({numRows, numCols}) {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i < numRows; i++){
            rows.push(Array.from(Array(numCols), () => false));
        }
        return rows;
    })
    
    const setCell = (row, col, val) => {
        const newGrid = [...grid];
        newGrid[row][col] = val;
        setGrid(newGrid);
    }
    
    return (
        <div className='grid'>
            {
                grid.map((row, rowIdx) => (
                    <div className='row' key={rowIdx}>
                        {
                        row.map((col, colIdx) => (
                            col
                        ))
                        }
                    </div>
                ))
            }
            <Cell />
        </div>
    )
}