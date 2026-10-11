/**
 * Sarkari Hub — Google Sheets signup endpoint
 *
 * Setup:
 * 1. Create a Google Sheet and copy its ID from the URL.
 * 2. Replace SPREADSHEET_ID below with that ID.
 * 3. In Apps Script, deploy as a Web app: Execute as "Me";
 *    Who has access: "Anyone".
 * 4. Copy the deployed /exec URL into signup.html.
 *
 * Privacy: This endpoint saves name/email only. Never send or store passwords.
 * Keep the spreadsheet itself restricted; do not publish it to the web.
 */
const SPREADSHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Signups';

function doGet() {
  return jsonResponse({ ok: true, service: 'Sarkari Hub signup endpoint' });
}

function doPost(e) {
  try {
    if (!e || !e.parameter) {
      return jsonResponse({ ok: false, message: 'Missing form data.' });
    }

    const name = String(e.parameter.name || '').trim().slice(0, 100);
    const email = String(e.parameter.email || '').trim().toLowerCase().slice(0, 254);
    const source = String(e.parameter.source || 'Sarkari Hub Sign Up').trim().slice(0, 100);

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ ok: false, message: 'Please provide a valid name and email.' });
    }

    if (!SPREADSHEET_ID || SPREADSHEET_ID.includes('PASTE_YOUR')) {
      return jsonResponse({ ok: false, message: 'Spreadsheet ID has not been configured.' });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Source']);
      sheet.setFrozenRows(1);
    } else if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Source']);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([new Date(), name, email, source]);
    return jsonResponse({ ok: true, message: 'Signup details saved.' });
  } catch (error) {
    return jsonResponse({ ok: false, message: 'Could not save signup details.' });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
