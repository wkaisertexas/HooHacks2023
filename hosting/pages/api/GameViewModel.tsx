import {useState, useEffect} from 'react';
import { CellType } from '../../components/Cell';

const MONEY = 2_000_000_000;
const POWER = 1000000;
const POPULATION = 30_000;
const POLLUTION = 80;
const HAPPINESS = 1000000;
const BASE_TIME = 0; // days since 2000

const MOVE_SPEED = 1; // moves per second

const NUMROWS = 20;
const NUMCOLS = 20;

const SECONDS_TO_DAYS = 7; // 1 second = 7 days
const NUM_TREES = 150;
const NUM_BUILDINGS = 30;

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

const POP_PER_HOUSE = 500;
const SAVE_INTERVAL = 31; // every 31 days
const TIME_INTERVAL = 100; // miliseconds
const UPDATE_INTERVAL = 3000; // miliseconds

const POPULATION_GROWTH = 0.081; // 8.1% per year
const DEMAND_GROWTH = 0.03; // 3% per year

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
            grid.push(0)
        }

        let num_building = NUM_BUILDINGS;
        for(let i = 0; i < NUM_BUILDINGS; i++){
            placeTile(grid, CellType.Building, (r) => Math.pow(r, 2));    
        }
        
        let num_houses = Math.floor(POPULATION / POP_PER_HOUSE);
        for(let i = 0; i < num_houses; i++){
            placeTile(grid, CellType.House, (r) => Math.pow(r, 4));
        }

        for(let i = 0; i < NUM_TREES; i++){
            placeTile(grid, CellType.Tree, (r) => 1.5 * Math.pow(r, 1/2));
        }

        return grid;
    }

    const placeTile = (grid, typeType, modifier) => {
        while(true){
            var r = Math.random();
            let theta = Math.random() * 2 * Math.PI;

            if(modifier != null){
                r = modifier(r);
            }

            r = r * NUMROWS / 2;

            let x = Math.floor(r * Math.cos(theta) + NUMROWS / 2);
            let y = Math.floor(r * Math.sin(theta) + NUMCOLS / 2);
            if(x < 0 || x >= NUMROWS || y < 0 || y >= NUMCOLS) continue;

            let index = x + y * NUMCOLS;

            if (grid[index] != CellType.Grass) continue; // already a house here    
            grid[index] = typeType;
            return;
        }
    }

    // game stats
    const [money, setMoney] = useState(MONEY);
    const [powerProduction, setPowerProduction] = useState(POWER);
    const [population, setPopulation] = useState(POPULATION);
    const [pollution, setPollution] = useState(POLLUTION);
    const [happiness, setHappiness] = useState(HAPPINESS);
    
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(false);
    const [grid, setGrid] = useState(setupBoard);
    const [showGraph, setShowGraph] = useState(false);
    const [graphData, setGraphData] = useState([]);

    const [mostRecentSave, setMostRecentSave] = useState(0);
    const [statGraph, setStatGraph] = useState(null);

    const [numHouses, setNumHouses] = useState(0);
    const [numBuildings, setNumBuildings] = useState(0);

    const [powerPlants, setPowerPlants] = useState([]);
    const [demand_per_person, setDemandPerPerson] = useState(3000);
    const [demand, setDemand] = useState(POWER);

    useEffect(() => {
        const interval = setInterval(updateTime, TIME_INTERVAL);
        return () => clearInterval(interval);
    }, [time, graphData, mostRecentSave, population, demand_per_person, demand, powerProduction]);

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

    const updateTime = () => {
        if(paused) return;
        setTime(time + TIME_INTERVAL / 1000);
        
        const deltaT = (time - mostRecentSave) * SECONDS_TO_DAYS;
        if(deltaT > SAVE_INTERVAL){
            saveGame();
            updateStats(deltaT);
            setMostRecentSave(time);
        };
    }

    const updateStats = (deltaT) => {
        // Update population based on exponential growth ig
        updatePopulation(deltaT);
        
        updateDemand(deltaT);
        
        updateMoney(deltaT);
        
        // Updates money based on production and consumption
        // Updates power based on production
        // Updates pollution based on production and consumption
        // Updates happiness based on population and pollution
    };

    const updatePopulation = (deltaT) => {
        // exponentially grows population
        let newPop = population * Math.pow(1 + POPULATION_GROWTH, deltaT / 365);
        setPopulation(newPop);
    }

    const updateDemand = (deltaT) => {
        let newDemandPerPerson = demand_per_person * Math.pow(1 + DEMAND_GROWTH, deltaT / 365);

        let newDemand = newDemandPerPerson * population;

        setDemandPerPerson(newDemandPerPerson);
        setDemand(newDemand);

        setPowerProduction(newDemand);
    }

    const updateMoney = (deltaT) => {

    }

    const saveGame = () => {        
        let saveData = {
            money: money,
            power: powerProduction,
            population: population,
            pollution: pollution,
            happiness: happiness,
            time: time,
        };
        
        localStorage.setItem('gameData', JSON.stringify(saveData));
        let newArray = [...graphData];
        newArray.push(saveData);
        setGraphData(newArray);
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

    const getData = () => {
        return graphData;
    } 

    const toggleShowGraph = () => {
        setShowGraph(!showGraph);
    }

    const toggleStatGraph = (name) => {
        console.log(name);
        if(statGraph === name){
            setStatGraph(0);
        } else{
            setStatGraph(name);
        }
    }

    return {
        money, setMoney,
        power: powerProduction, setPower: setPowerProduction,
        population, setPopulation,
        pollution, setPollution,
        happiness, setHappiness,
        time, setTime, getDate, getTime,
        paused, setPaused, toggleTime,
        x, setX,
        y, setY,
        gameState, setGameState,
        grid, setGrid,

        getData,
        
        toggleStatGraph, statGraph,

        getProductionInfo, showGraph, toggleShowGraph
    }
}; 