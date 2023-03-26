// game.tsx functional component
import Grid from './Grid';
import Toolbar from './Toolbar';
import Menu from './Menu';

export default function Game(props) {
    return (
        <>
        <Grid viewModel={props.viewModel}/> 
        <div className='fixed flex flex-col h-screen w-screen justify-between'>
            <Toolbar viewModel={props.viewModel} />
            <Menu viewModel={props.viewModel} />
        </div>
        </>
    )
}