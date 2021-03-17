#!/usr/bin/env node
import games from '../src/index.js';

const gameName = 'prime';
const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

games(gameName, gameQuestion);
