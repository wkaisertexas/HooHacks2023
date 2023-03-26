const plants = [
    {
        name: 'Coal',
        description: 'Coal is a fossil fuel that is formed from the remains of dead plants and animals. It is the most abundant fossil fuel and is used to generate electricity and heat homes and businesses.',
        cost: 100,
        power: 1,
        pollution: 1,
        image: 'coal.png',
    },
    {
        name: 'Nuclear',
        description: 'Nuclear power is the use of nuclear reactions that release nuclear energy to generate heat, which most frequently is then used in steam turbines to produce electricity in a nuclear power plant.',
        cost: 1000,
        power: 10,
        pollution: 0,
        image: 'nuclear.png',
    },
    {
        name: 'Solar',
        description: 'Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), or indirectly using concentrated solar power (CSP).',
        cost: 10000,
        power: 100,
        pollution: 0,
        image: 'solar.png',
    },
    {
        name: 'Wind',
        description: 'Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.',
        cost: 100000,
        power: 1000,
        pollution: 0,
        image: 'wind.png',
    },
    {
        name: 'Hydro',
        description: 'Hydropower, or water power, is power derived from the energy of falling or fast-flowing water, which may be harnessed for useful purposes. Hydropower is a renewable energy source.',
        cost: 1000000,
        power: 10000,
        pollution: 0,
        image: 'hydro.png',
    },
    {
        name: 'Geothermal',
        description: 'Geothermal energy is thermal energy generated and stored in the Earth. Thermal energy is the energy that determines the temperature of matter. The geothermal energy of the Earth\'s crust originates from the original formation of the planet and from radioactive decay of materials (in particular uranium).',
        cost: 10000000,
        power: 100000,
        pollution: 0,
        image: 'geothermal.png',
    },
]

import React, {useState} from 'react';
import Image from 'next/image';

export default function Menu(props){
    const [openedMenu, setOpenedMenu] = useState(false);

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    }

    if(openedMenu){
        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center bg-white rounded-lg p-5'>
                    <p className='text-3xl font-bold'>Plants</p>
                    <p className='text-xl font-bold' onClick={toggleMenu}>Close Menu</p>
                    <div className='flex flex-row justify-center items-center'>
                        {plants.map((plant) => {
                            return (
                                <div className='flex flex-col justify-center items-center'>
                                    <h2>{plant.name}</h2>
                                    {/* <Image alt={plant.description} src={plant.image}/> */}
                                    <p>{plant.description}</p>
                                    <p>Cost: {plant.cost}</p>
                                    <p>Power: {plant.power}</p>
                                    <p>Pollution: {plant.pollution}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    } 

    return (
        <h1 onClick={toggleMenu}>
            <Image src='/menu.svg' alt='Menu' width={50} height={50}/>
        </h1>
        )
}