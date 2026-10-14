// Firebase Web app configuration (public client config, not a service-account key).
// Copy this project's config from Firebase Console > Project settings > Your apps.
// Never paste service-account JSON, private keys, or admin credentials here.
export const firebaseConfig = {
  apiKey: "PASTE_FIREBASE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_FIREBASE_APP_ID"
};
export function isFirebaseConfigured(){
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId) &&
    !firebaseConfig.apiKey.includes("PASTE_") &&
    !firebaseConfig.projectId.includes("PASTE_") &&
    !firebaseConfig.appId.includes("PASTE_");
}
