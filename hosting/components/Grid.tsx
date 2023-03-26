import React, {useState} from 'react';
import Cell from './Cell';

const NUMROWS = 20;
const NUMCOLS = 20;

export default function Grid(props) {
    const viewModel = props.viewModel;
    
    return (
        <div className='griddy bg-grass top-0 left-0 absolute -z-10'>
            {
                viewModel.grid.map((elem, id) => (
                    <Cell key={id} value={elem}/>
                ))
            }
        </div>
    )
}``