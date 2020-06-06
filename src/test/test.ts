"use strict";
/*jshint eqnull:true */
/*jshint globalstrict:true */
/*jshint node:true */
/*eslint-env node*/
/* global describe */
/* global it */

import { promises as fs } from "fs";
import { dumpSavInSql } from "../lib/sav-to-sql";
import * as Assert from "assert";

describe('sav-to-sql', function(){
    it("dumps", async function(){
        await dumpSavInSql('src/test/fixtures/hotel.sav','work/test/hotel.sql', {});
        var obtained = await fs.readFile('work/test/hotel.sql','utf8');
        var expected = await fs.readFile('src/test/fixtures/hotel.sql','utf8');
        Assert.equal(obtained, expected)

    })
});
