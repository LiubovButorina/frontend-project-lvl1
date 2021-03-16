#!/usr/bin/env node
import games from '../src/index.js';

const gameName = 'progression';
const gameQuestion = 'What number is missing in the progression?';

games(gameName, gameQuestion);
