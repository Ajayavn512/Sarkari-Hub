# Sarkari Hub — setup checklist

Live website: https://ajayavn512.github.io/Sarkari-Hub/

## Included in the repository
- Responsive premium UI improvements and scroll animations
- Official portal directories for services, jobs, results and admit-card notices
- English/Hindi toggle and dark mode
- Search across directories
- Save/remove useful links locally in the current browser
- PWA manifest and service-worker shell cache (HTTPS hosting required)
- Opt-in browser notification prompt; this is not remote push messaging
- Signup page and Google Apps Script handler scaffold

## Google Sheets signup
1. Open google-apps-script/Code.gs in the repository and copy it into https://script.google.com/ (or create a script bound to the intended sheet).
2. Confirm the spreadsheet ID and Registrations tab.
3. Deploy > New deployment > Web app. Execute as your account; choose access carefully.
4. Copy the deployed /exec URL into GOOGLE_SHEET_WEB_APP_URL in signup.html and commit the change.
5. Test with a non-sensitive test name/email and confirm a row is appended. The website does not claim the sheet connection is live until this is done.

## Firebase Authentication, synced saved jobs and admin dashboard
Firebase needs a project-specific web config and security rules. Never put service-account credentials or private keys in browser code.
1. Create/open a Firebase project at https://console.firebase.google.com/.
2. Register a Web app and copy its public web configuration.
3. Enable Authentication > Email/Password and create a Cloud Firestore database.
4. Deploy strict Firestore rules before collecting real users' data. User profile documents must be writable only by their owner; admin-only content should be writable only by explicitly authorized admin UIDs/claims.
5. Configure the app with the project's web config, then test sign-up/sign-in/sign-out and access rules before publishing.
6. To bootstrap an admin, use the Firebase Console to create an admins/{uid} document for your own authenticated UID; never allow public users to create admin documents.

Saved links currently stay in the visitor's browser. They are not synced across devices until Firebase is configured.

## Accuracy and safety
Links point to official portals, but this static site does not automatically verify active vacancies or fetch live results. Confirm dates, eligibility and application fees on the official notice. Never enter passwords, OTPs or payment details into unofficial pages.
