import {useState, useEffect} from 'react';

const MONEY = 2_000_000_000;
const POWER = 1000000;
const POPULATION = 100_000;
const POLLUTION = 80;
const HAPPINESS = 1000000;
const BASE_TIME = 0; // days since 2000

const MOVE_SPEED = 1; // moves per second

export default function GameViewModel() {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    // grid
    const [grid, setGrid] = useState([]);
    
    // game stats
    const [money, setMoney] = useState(MONEY);
    const [power, setPower] = useState(POWER);
    const [population, setPopulation] = useState(POPULATION);
    const [pollution, setPollution] = useState(POLLUTION);
    const [happiness, setHappiness] = useState(HAPPINESS);
    const [time, setTime] = useState();

    // user progression
    const [gameState, setGameState] = useState(1);

    // position
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // mark intents
    const handleKeyPress = (e) => {
        switch(e.key){
            case 'ArrowUp':
                // moves up

                break;
            case 'ArrowDown':
                // move down
                break;
            case 'ArrowLeft':
                // move left
                break;
            case 'ArrowRight':
                // move right
                break;
            default:
                break;
        }
    }

    return {
        money,
        power,
        population,
        pollution,
        happiness,
        time, setTime,
        gameState, setGameState,
        grid
    }
}; 