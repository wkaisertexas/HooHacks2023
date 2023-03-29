import { stringify } from "querystring";

import Logo from "./Logo";

export default function Toolbar(props) {
    const viewModel = props.viewModel;

    const prettyMoney = (money) => {
        let amount = Math.log10(money);
        if (amount < 3) {
            return `$${Math.round(money)}`
        }else if(amount < 6){
            return `$${Math.round(money / 1000)}K`
        }else if(amount < 9){
            return `$${Math.round(money / 1000000)}M`
        }else if(amount < 12){
            return `$${Math.round(money / 1000000000)}B`
        }
        return `$${Math.round(money)}`
    }

    const prettyPower = (pop) => {
        let amount = Math.log10(pop);
        if (amount < 3) {
            return `${Math.round(pop)} MWH`;
        }
        return `${Math.round(pop / 1000)} GWH`;
    }

    const prettyPop = (pop) => {
        let amount = Math.log10(pop);
        if (amount < 3) {
            return `${Math.round(pop)}`;
        }
        return `${Math.round(pop / 1000)} K`;
    }

    return (
        <div className='items-start'>
        <div className='flex flex-row space-x-2'>
            <div>
                <p onClick={() => viewModel.toggleStatGraph('cash')} className='bg-teal-700 text-white px-2 py-1 rounded-sm'>Cash: {prettyMoney(viewModel.money)}</p>
            </div>
            <div>
                <p onClick={() => viewModel.toggleStatGraph('power')} className="px-2 py-1 rounded-sm text-white bg-orange-600">Power ⚡️: {prettyPower(viewModel.power)}</p>
            </div>
            <div>
                <p onClick={() => viewModel.toggleStatGraph('population')} className="px-2 py-1 rounded-sm text-white bg-green-500">Population: {prettyPop(viewModel.population)}</p>
            </div>
            <div >
                <p onClick={() => viewModel.toggleStatGraph('date')} className="px-2 py-1 rounded-sm text-white bg-black">{viewModel.getDate()}</p>
            </div>

            <div>
                <p onClick={() => viewModel.toggleStatGraph('time')} className="px-2 py-1 rounded-sm text-white bg-purple-700">Time: {viewModel.getTime()}</p>
            </div>
            {viewModel.paused ? <p className="px-2 py-1 rounded-sm text-white bg-red-500" onClick={viewModel.toggleTime}>Play</p> : <p className="px-2 py-1 rounded-sm text-white bg-green-500" onClick={viewModel.toggleTime}>Pause</p>}
        </div>
        <Logo />
        </div>
    )
}