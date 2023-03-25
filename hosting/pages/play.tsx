import Link from 'next/link'

import Intro from '../Components/Intro'
import Game from '../Components/Game'
import End from '../Components/End'

import GameViewModel from './api/GameViewModel'

export default function Play() {
    const gameViewModel = GameViewModel();

    switch(gameViewModel.gameState) {
        case 1:
            return <Intro viewModel={gameViewModel}/>
        case 2:
            return <Game viewModel={gameViewModel}/>
        case 3:
            return <End viewModel={gameViewModel}/>
    }
  }
  