declare module 'sav-reader' {

namespace SavReader{

    type RowDesc = {
        index:number,
        data:{[k:string]: any}
    }

    type FormatDesc = { 
        type: number, 
        typestr: 'F', 
        width: number, 
        nbdec: 0 
    }

    type VariableDesc = {
        name: string
        type: string
        label: string
        printFormat?: FormatDesc
        writeFormat?: FormatDesc
    }&({
        type: 'numeric'
        missing?:number|{values:number[]}
    }|{
        type: 'string'
        len?: number
        stringExt?: number
    })

    type HeaderDesc = {
        product: string,
        encoding: string,
        created: string|Date,
        weight: any,
        n_vars: number,
        n_cases: number,
        compression?: { bias?: number }
    }
}

class SavReader{
    constructor (savFileName:string)
    meta:{
        header:SavReader.HeaderDesc, 
        sysvars:SavReader.VariableDesc[],
        getValueLabels:(varaibleName:string)=>{value:number, label:string}[]
    }
    open():Promise<void>
    readNextRow():SavReader.RowDesc|null
}

export = SavReader;

}        