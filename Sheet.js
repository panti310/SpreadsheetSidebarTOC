
/**
 * シートの名前の配列を取得する
 *
 * @returns シートの名前の配列のjson
 */
function getSheetNames() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheetName = [];
  for(var i = 0, l = sheets.length; i < l; i++){
    sheetName[i] = sheets[i].getName();
  }
  return JSON.stringify(sheetName);
}

/**
 * シートをアクティブにする
 *
 * @param {*} sheetName
 */
function activateSheet(sheetName) {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName).activate();
}