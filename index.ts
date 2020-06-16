#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.0.1')
  .description('An application for better development')
  .name('ella')
  .usage("[options] <folder name>")
  .option('-c, --create')
  .parse(process.argv);

console.log('ella is here')