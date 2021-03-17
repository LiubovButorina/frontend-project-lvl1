#!/usr/bin/env node
import playBrainGames from '../src/index.js';

const gameName = 'prime';
const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playBrainGames(gameName, gameQuestion);
