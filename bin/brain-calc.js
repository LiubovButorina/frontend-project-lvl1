#!/usr/bin/env node
import playBrainGames from '../src/index.js';

const gameName = 'calc';
const gameQuestion = 'What is the result of the expression?';

playBrainGames(gameName, gameQuestion);
