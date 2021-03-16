#!/usr/bin/env node
import games from '../src/index.js';

const gameName = 'calc';
const gameQuestion = 'What is the result of the expression?';

games(gameName, gameQuestion);
