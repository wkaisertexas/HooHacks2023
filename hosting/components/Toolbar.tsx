export default function Toolbar(props) {
    const viewModel = props.viewModel;

    return (
        <div className='flex flex-row justify-between'>
            <p>${viewModel.money}</p>
            <p>{viewModel.power} MWH</p>
            
            <p>{viewModel.population} Pop</p>
        </div>
    )
}