#!/usr/bin/env node
import playBrainGames from '../src/index.js';

const gameName = 'gcd';
const gameQuestion = 'Find the greatest common divisor of given numbers.';

playBrainGames(gameName, gameQuestion);
