// game.tsx functional component
import Grid from './Grid';
import Toolbar from './Toolbar';
import Menu from './Menu';

export default function Game(props) {
    return (
        <div className='flex flex-col justify-between w-full h-full'>

            <Toolbar viewModel={props.viewModel} />
            <Menu viewModel={props.viewModel} />

            <Grid viewModel={props.viewModel}/> 
        </div>
    )
}