#!/usr/bin/env node

"use strict";

import * as program from 'commander';
import { dumpSavInSql } from './sav-to-sql';

program
    .version(require('../package').version)
    .usage('[options] input.sav output.sql')
    .option('-i, --input [input.sav]', 'Name of the input file')
    .option('-o, --input [output.sql]', 'Name of the output file')
    .option('-M, --mode [0o666]', 'Mode of the creation of the output')
    .option('-F, --flags [w]', 'File system flags')
    .parse(process.argv);

var inputFileName=program.input||program.args[0];
var outputFileName=program.output||program.args[1]||inputFileName.replace(/\.sav$/,'')+'.sql';

if(!inputFileName){
    program.help();
}

dumpSavInSql(inputFileName, outputFileName, {mode:program.mode, flags:program.flags})