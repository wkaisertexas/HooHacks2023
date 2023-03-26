// game.tsx functional component
import Grid from './Grid';
import Toolbar from './Toolbar';

export default function Game(props) {
    return (
        <div className='flex flex-col justify-between w-full h-full'>
            <Toolbar viewModel={props.viewModel} /> 

            <p>This is the game</p>
            <Grid viewModel={props.viewModel}/> 

            <p>This is the footer below</p>
        </div>
    )
}