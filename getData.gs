function getFollower() {

  const SSId = '';
  const mySS = SpreadsheetApp.openById(SSId);
  const tblSheetName = '';
  const tblSheet = mySS.getSheetByName(tblSheetName)
  const date = new Date();
  const today = Utilities.formatDate(date, 'Tokyo/Asia', 'yyyy/MM/dd');

  tblSheet.insertRows(2,1);

  tblSheet.getRange("A2").setValue(today);

  const instaUrl = 'https://www.instagram.com/accountname/';
  var instaResponse = UrlFetchApp.fetch(instaUrl);
  var instaHtml = instaResponse.getContentText('UTF-8');
  var instaJson = instaHtml.match(/window._sharedData = (.*?);<\/script>/)[1];
  var instaJsonData = JSON.parse(instaJson);
  var instaFollowers = instaJsonData['entry_data']['ProfilePage'][0]['graphql']['user']['edge_followed_by']['count'];

  tblSheet.getRange("B2").setValue(instaFollowers);

}
