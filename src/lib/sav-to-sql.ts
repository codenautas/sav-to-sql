import * as SavReader from 'sav-reader';
import { promises as fs } from "fs"; 

var savTypes = {
    numeric: { sql: 'numeric' },
    string: { sql: 'text' },
}

function quoteIdent(ident:string){
    return `"${ident.replace(/"/g,'""')}"`;
}

function quoteLiteral(value:string):string;
function quoteLiteral(value:any){
    if(value==null) return 'null';
    if(typeof value !== "string") return value.toString();
    if(value==='') return 'null';
    return `'${value.replace(/'/g,"''")}'`;
}

async function dumpSav(savFileName:string, opts:{
    tableName?:string
}):Promise<string> {
    let sav = new SavReader(savFileName)
    await sav.open();
    var options = {
        tableName:savFileName.replace(/\.sav$/,'').replace(/[^_a-z0-9A-Z]/g, '_'),
        ...opts
    }
    var sql:string[] = [];
    var rawFieldNames:string[] = [];
    var sqlFields:string[] = [];
    var sqlColumnNames:string[] = [];
    var sqlComments:string[] = [];
    console.log(sav.meta.header);
    var sqlTableName=quoteIdent(options.tableName);
    sql.push(`set client_encoding = 'UTF8';`);
    sql.push(`CREATE TABLE ${sqlTableName} (`)
    sav.meta.sysvars.map((v) => {
        // console.log(v)
        rawFieldNames.push(v.name);
        var sqlColumn = quoteIdent(v.name.toLocaleLowerCase());
        var sqlTypeDef = savTypes[v.type];
        if(!sqlTypeDef){
            console.log('======== sin tipo')
            console.log(v)
            throw new Error(`no existe el tipo para ${JSON.stringify(v)}`)
        }
        sqlFields.push(`  ${sqlColumn} ${sqlTypeDef.sql}`)
        sqlColumnNames.push(sqlColumn);
        sqlComments.push(`COMMENT ON COLUMN ${sqlTableName}.${sqlColumn} IS ${quoteLiteral(v.label)};`)
        let valueLabels = sav.meta.getValueLabels(v.name)
        if (valueLabels) {
            // console.log(valueLabels)
        }
    })
    sql.push(sqlFields.join(',\n'))
    sql.push(');')
    let row:SavReader.RowDesc|null = null;
    var tick = new Date().getTime()+1000;
    do {
        row = await sav.readNextRow();
        if (row != null) {
            if (new Date().getTime()>tick) {
                tick+=1000;
                console.log(Math.ceil(row.index*100/sav.meta.header.n_cases),'%');
            }
            sql.push(`INSERT INTO ${sqlTableName} (${sqlColumnNames.join(',')}) VALUES (${rawFieldNames.map(fieldName=>quoteLiteral(row!.data[fieldName]))});`)
        }
    } while (row != null);
    return sql.join('\n');
}

async function provisorio(savFileName:string, sqlFileName:string){
    var sql = await dumpSav(savFileName,{});
    await fs.writeFile(sqlFileName, sql, {encoding:'utf8'});
}

provisorio('local-entrada.sav', 'local-salida.sql');
