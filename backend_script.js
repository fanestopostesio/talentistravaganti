function doPost(e) {
  var ticketId = e.parameter.ticket_id;
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Tickets");
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == ticketId) {
      if (data[i][1] === true) {
        return ContentService.createTextOutput(JSON.stringify({ valid: false, message: "Already used" })).setMimeType(ContentService.MimeType.JSON);
      } else {
        sheet.getRange(i + 1, 2).setValue(true);  // mark as used
        return ContentService.createTextOutput(JSON.stringify({ valid: true, name: data[i][2] })).setMimeType(ContentService.MimeType.JSON);
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ valid: false, message: "Invalid ticket" })).setMimeType(ContentService.MimeType.JSON);
}
