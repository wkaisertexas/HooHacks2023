import {useState, useEffect} from 'react';

const MONEY = 2_000_000_000;
const POWER = 1000000;
const POPULATION = 100_000;
const POLLUTION = 80;
const HAPPINESS = 1000000;
const BASE_TIME = 0; // days since 2000

const MOVE_SPEED = 1; // moves per second

const NUMROWS = 20;
const NUMCOLS = 20;

const SECONDS_TO_DAYS = 7; // 1 second = 7 days

const SAMPLE_DATA = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
];

export default function GameViewModel() {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const setupBoard = () => {
        const grid = [];
        for(let i = 0; i < NUMROWS * NUMCOLS; i++){
            grid.push(Math.random() > 0.5 ? 0 : 1)
        }
        return grid;
    }

    // game stats
    const [money, setMoney] = useState(MONEY);
    const [power, setPower] = useState(POWER);
    const [population, setPopulation] = useState(POPULATION);
    const [pollution, setPollution] = useState(POLLUTION);
    const [happiness, setHappiness] = useState(HAPPINESS);
    
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(false);
    const [grid, setGrid] = useState(setupBoard);
    const [showGraph, setShowGraph] = useState(false);

    useEffect(() => {
        if(paused) return;

        const interval = setInterval(() => {
            setTime(time + 0.1);
        }, 100);
        return () => clearInterval(interval);
    }, [time]);

    // user progression
    const [gameState, setGameState] = useState(1);

    // position
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // mark intents
    const handleKeyPress = (e) => {
        if(gameState == 0){
            setGameState(1);
            return;
        }

        switch(e.key){
            case 'ArrowUp':
                // moves up
                // gets the duration of the event
                // moves the player
                // updates the time



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

    const toggleTime = () => {
        setPaused(!paused);
    }

    const getDate = () => {
        var date = new Date(2000, 0, 1);
        date.setDate(date.getDate() + time * SECONDS_TO_DAYS);
        var stri = new Date(date).toDateString().split(" ");

        return `${stri[1]} ${stri[3]}`;
    }

    const getTime = () => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = Math.round(time - (hours * 3600) - (minutes * 60));

        if (hours === 0 && minutes === 0){
            return `${seconds}`;
        } else{
            if (hours === 0){
                return `${minutes}:${seconds}`;
            }
        }

        return `${hours}:${minutes}:${seconds}`
    }


    const getCell = (row, col) => {
        return grid[row * NUMROWS + col];
    }

    const setCell = (row, col, val) => {
        const newGrid = [...grid];
        newGrid[row * NUMROWS + col] = val;
        setGrid(newGrid);
    }

    const getProductionInfo = () => {
        return SAMPLE_DATA; // TODO: STUB
    }

    const toggleShowGraph = () => {
        setShowGraph(!showGraph);
    }

    return {
        money, setMoney,
        power, setPower,
        population, setPopulation,
        pollution, setPollution,
        happiness, setHappiness,
        time, setTime, getDate, getTime,
        paused, setPaused, toggleTime,
        x, setX,
        y, setY,
        gameState, setGameState,
        grid, setGrid,

        getProductionInfo, showGraph, toggleShowGraph
    }
}; 