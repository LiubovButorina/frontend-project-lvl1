#!/usr/bin/env node
import playBrainGames from '../src/index.js';

const gameName = 'even';
const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

playBrainGames(gameName, gameQuestion);
