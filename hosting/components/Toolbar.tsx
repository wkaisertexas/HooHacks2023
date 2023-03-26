import { stringify } from "querystring";

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
            return `${Math.round(pop)} Pop.`;
        }
        return `${Math.round(pop / 1000)} K Pop.`;
    }

    return (
        <div className='flex flex-row justify-between'>
            <p className='bg-teal-700 text-white px-2 py-1 rounded-sm'>Cash: {prettyMoney(viewModel.money)}</p>
            
            <p className="px-2 py-1 rounded-sm text-white bg-orange-600">Power ⚡️: {prettyPower(viewModel.power)}</p>
            
            <p className="px-2 py-1 rounded-sm text-white bg-green-500">Population: {prettyPop(viewModel.population)}</p>

            <p className="px-2 py-1 rounded-sm text-white bg-black">{viewModel.getDate()}</p>

            {viewModel.paused ? <p className="px-2 py-1 rounded-sm text-white bg-red-500" onClick={viewModel.toggleTime}>Play</p> : <p className="px-2 py-1 rounded-sm text-white bg-green-500" onClick={viewModel.toggleTime}>Pause</p>}
        </div>
    )
}