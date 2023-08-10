import { initializeApp } from 'firebase/app';
import { 
  getFirestore,
  query,
  orderBy,
  onSnapshot,
  collection,
  getDoc, 
  getDocs, 
  addDoc,
  updateDoc,
  doc, 
  serverTimestamp, 
  arrayUnion,
  QuerySnapshot
} from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

export interface Item {
  name: string;
  score: string;
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const authenticateAnonymously = () => {
  return signInAnonymously(getAuth(app));
}

export const createScoreboard = async (userId: string) => {
  const scoreboardColRef = collection(db, 'scoreboard');
  console.log('create scoreboard', scoreboardColRef, userId);

  return addDoc(scoreboardColRef, {
    created: serverTimestamp(),
    createBy: userId,
    users: [{
      userId,
    }]
  });
}

export const getScoreboard = (scoreboardId: string) => {
  const scoreboardDocRef = doc(db, 'scoreboard', scoreboardId);
  return getDoc(scoreboardDocRef);
}

export const getScoreboardItems = (scoreboardId: string) => {
  const itemsColRef = collection(db, 'scoreboard', scoreboardId, 'items');
  return getDocs(itemsColRef);
}

export const streamScoreboardItems = (scoreboardId: string, snapshot: (q: QuerySnapshot)=> void, error: (e: any)=> any) => {
  const itemsColRef = collection(db, 'scoreboard', scoreboardId, 'items');
  const itemsQuery = query(itemsColRef, orderBy('score'));
  return onSnapshot(itemsQuery, snapshot, error);
}

export const addUserToScoreboard = (scoreboardId: string, userId: string) => {
  const scoreboardDocRef = doc(db, 'scoreboard', scoreboardId);
  return updateDoc(scoreboardDocRef, {
    users: arrayUnion({userId})
  });
}

export const addScoreboardItem = (item: Item, scoreboardId: string, userId: string) => {
  const itemsColRef = collection(db, 'scoreboard', scoreboardId, 'items');
  return addDoc(itemsColRef, {
    name: item.name,
    score: item.score,
    created: serverTimestamp(),
    createBy: userId
  });
}