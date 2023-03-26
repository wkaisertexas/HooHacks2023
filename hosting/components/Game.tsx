// game.tsx functional component
import Grid from './Grid';
import Toolbar from './Toolbar';
import Menu from './Menu';
import Graph from './Graph';

export default function Game(props) {
    return (
        <>
        <Grid viewModel={props.viewModel}/> 
        <div className='p-2 fixed flex flex-col h-screen w-screen justify-between'>
            <Toolbar viewModel={props.viewModel} />
            <div className='flex flex-row'>
            <Graph viewModel={props.viewModel} />
            <Menu viewModel={props.viewModel} />
            </div>
        </div>
        </>
    )
}