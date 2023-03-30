const plants = [
    // {
    //     name: 'Coal',
    //     description: 'Coal is a fossil fuel that is formed from the remains of dead plants and animals. It is the most abundant fossil fuel and is used to generate electricity and heat homes and businesses.',
    //     cost: 100,
    //     power: 1,
    //     pollution: 1,
    //     image: '/coal.png',
    // },
    {
        name: 'Nuclear',
        description: 'Nuclear power is the use of nuclear reactions that release nuclear energy to generate heat, which most frequently is then used in steam turbines to produce electricity in a nuclear power plant.',
        cost: 1000,
        power: 10,
        pollution: 0,
        image: '/nuclear.png',
        size: [2, 2],
    },
    {
        name: 'Solar',
        description: 'Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), or indirectly using concentrated solar power (CSP).',
        cost: 10000,
        power: 100,
        pollution: 0,
        image: '/solar.png',
        size: [1, 1],
    },
    {
        name: 'Wind',
        description: 'Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.',
        cost: 100000,
        power: 1000,
        pollution: 0,
        image: '/wind.png',
        size: [1, 2],
    },
    // {
    //     name: 'Hydro',
    //     description: 'Hydropower, or water power, is power derived from the energy of falling or fast-flowing water, which may be harnessed for useful purposes. Hydropower is a renewable energy source.',
    //     cost: 1000000,
    //     power: 10000,
    //     pollution: 0,
    //     image: '/hydro.png',
    // },
    // {
    //     name: 'Geothermal',
    //     description: 'Geothermal energy is thermal energy generated and stored in the Earth. Thermal energy is the energy that determines the temperature of matter. The geothermal energy of the Earth\'s crust originates from the original formation of the planet and from radioactive decay of materials (in particular uranium).',
    //     cost: 10000000,
    //     power: 100000,
    //     pollution: 0,
    //     image: '/geothermal.png',
    // },
]

import React, {useState} from 'react';
import Image from 'next/image';

export default function Menu(props){
    const [openedMenu, setOpenedMenu] = useState(false);

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    }
    if(!openedMenu){
        return (
        <h1 className='stroke-1 rounded-lg p-2 m-2' onClick={toggleMenu}>
            <Image src='/menu.svg' alt='Menu' width={50} height={50}/>
        </h1>
        )
    }

    return (
        <div className='flex flex-col justify-center bg-white rounded-lg p-5 m-2 '>
            <div className='flex flex-col items-start'>
                <p className='text-3xl font-bold'>Power Plants</p>
                <p className='text-md font-semibold' onClick={toggleMenu}>Close Menu</p>
            </div>
            <div className='overflow-x-scroll flex space-x-2'>
                {plants.map((plant) => {
                    return (
                        <div className='card flex flex-row border-4 border-black p-2 rounded-md space-x-2 items-center'>
                            <div className='flex flex-col'>
                                <h2 className='text-3xl font-bold'>{plant.name}</h2>
                                <p>{plant.description}</p>
                                <p><strong>Cost:</strong> {plant.cost}</p>
                                <p><strong>Power:</strong> {plant.power}</p>
                                <p><strong>Pollution:</strong> {plant.pollution}</p>
                            </div>

                           <div className='border-2 border-black h-min rounded-md p-1'>
                                <Image className={`w-[${16 * plant.size[0]}rem]`} width='128' height='128' alt={plant.description} src={plant.image}/>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
) 
}