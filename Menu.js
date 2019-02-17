
/**
 * 開いた時に呼ばれる
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('便利機能')
    .addItem('目次表示', 'OpenSideBar')
    .addToUi();
}

/**
 * サイドバーを開く
 */
function OpenSideBar(){
  var sidebar = HtmlService.createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle('目次')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showSidebar(sidebar);
}