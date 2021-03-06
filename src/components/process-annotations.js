'use strict';
exports.__esModule = true;
var fs = require('fs');
var excelutils_1 = require("./excelutils");
var fname = 'annotations.json';
var content = fs.readFileSync(fname);
var inp = JSON.parse(content);
var out = {};
var formulaErrors = { "ref": true,
    "refi": true,
    "calc": true };
for (var i = 0; i < inp.length; i++) {
    var workbookName = inp[i]["Workbook"];
    if (!(workbookName in out)) {
        out[workbookName] = {};
    }
    var sheetName = inp[i]["Worksheet"];
    if (!(sheetName in out[workbookName])) {
        out[workbookName][sheetName] = {
            "bugs": []
        };
    }
    if (inp[i]["BugKind"] in formulaErrors) {
        // Add it, converting to (row, col, ...) format.
        var addr = inp[i]["Address"];
        var cell_dep = excelutils_1.ExcelUtils.cell_dependency(addr, 0, 0);
        out[workbookName][sheetName]["bugs"].push(cell_dep);
        out[workbookName][sheetName]["bugs"].sort();
    }
}
console.log(JSON.stringify(out, null, 2));
