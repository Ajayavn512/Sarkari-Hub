import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';
const KEY='sarkari-hub-saved-v1';
if(isFirebaseConfigured()){
 try{
  const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app);
  const parseLocal=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}};
  let uid=null,writing=false;
  const sync=async()=>{
   if(!uid||writing)return;
   const ref=doc(db,'users',uid),snap=await getDoc(ref),local=parseLocal();
   const remote=snap.exists()&&Array.isArray(snap.data().savedLinks)?snap.data().savedLinks:[];
   const merged=[...remote];
   local.forEach(item=>{if(item&&item.url&&!merged.some(x=>x.url===item.url))merged.push(item)});
   writing=true;
   await setDoc(ref,{savedLinks:merged},{merge:true});
   localStorage.setItem(KEY,JSON.stringify(merged));
   writing=false;
   window.dispatchEvent(new CustomEvent('sarkari-saved-synced'));
  };
  onAuthStateChanged(auth,user=>{uid=user?.uid||null;if(uid)sync().catch(err=>console.warn('Saved links sync needs Firestore rules/config:',err))});
  window.addEventListener('sarkari-saved-changed',()=>sync().catch(err=>console.warn('Saved links sync failed:',err)));
 }catch(err){console.warn('Firebase sync is not active:',err)}
}
