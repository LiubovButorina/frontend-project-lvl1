#!/usr/bin/env node
import playBrainGames from '../src/index.js';

const gameName = 'progression';
const gameQuestion = 'What number is missing in the progression?';

playBrainGames(gameName, gameQuestion);
