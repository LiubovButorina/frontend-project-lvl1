#!/usr/bin/env node
import games from '../src/index.js';

const gameName = 'gcd';
const gameQuestion = 'Find the greatest common divisor of given numbers.';

games(gameName, gameQuestion);
