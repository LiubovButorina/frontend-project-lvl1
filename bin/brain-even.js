#!/usr/bin/env node
import games from '../src/index.js';

const gameName = 'isEven';
const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

games(gameName, gameQuestion);
