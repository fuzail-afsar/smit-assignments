import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDocs,
  addDoc,
  getFirestore,
  collection,
  query,
  where,
  serverTimestamp,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
class FireBase {
  #auth;
  #db;
  #chatCollectionRef;
  #usersCollectionRef;
  constructor() {
    this.#init();
  }
  async #init() {
    const app = initializeApp({
      apiKey: "AIzaSyCS9_3oWskwhG3tB6r5Flj5Kl3ORjauv0Y",
      authDomain: "chat-app-385ff.firebaseapp.com",
      projectId: "chat-app-385ff",
      storageBucket: "chat-app-385ff.appspot.com",
      messagingSenderId: "170566561761",
      appId: "1:170566561761:web:3924ed630d92f9f4552ca0",
    });
    this.#auth = getAuth(app);
    this.#db = getFirestore(app);
    this.#chatCollectionRef = collection(this.#db, "chat");
    this.#usersCollectionRef = collection(this.#db, "users");
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.#auth, (user) => {
        if (user) resolve(true);
        reject(false);
      });
    });
  }

  async signUp(userData) {
    try {
      const { email, password, firstName, lastName, ...rest } = userData;
      const { user } = await createUserWithEmailAndPassword(
        this.#auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      const { uid } = user;
      await setDoc(doc(this.#db, "users", uid), {
        firstName,
        lastName,
        email,
        ...rest,
      });
    } catch (error) {
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      await signInWithEmailAndPassword(this.#auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  async signOutUser() {
    try {
      await signOut(this.#auth);
    } catch (error) {
      throw error;
    }
  }

  getUserProfile() {
    return this.#auth.currentUser;
  }

  getUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const querySnapshot = await getDocs(
          query(
            this.#usersCollectionRef,
            where("email", "==", this.getUserProfile().email)
          )
        );
        querySnapshot.forEach((doc) => {
          resolve({ ...doc.data(), id: doc.id });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const querySnapshot = await getDocs(
          query(
            this.#usersCollectionRef,
            where("email", "!=", this.getUserProfile().email)
          )
        );
        const users = [];
        querySnapshot.forEach((doc) =>
          users.push({ ...doc.data(), id: doc.id })
        );
        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }

  async sendMessage(receiverId, message) {
    try {
      await addDoc(this.#chatCollectionRef, {
        chatId: this.#getChatId(receiverId),
        senderId: this.getUserProfile().uid,
        receiverId,
        message,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      throw error;
    }
  }

  #getChatId(receiverId) {
    const senderId = this.getUserProfile().uid;
    return senderId < receiverId
      ? `${senderId}${receiverId}`
      : `${receiverId}${senderId}`;
  }

  async getChat(receiverId, callback) {
    try {
      const q = query(
        this.#chatCollectionRef,
        where("chatId", "==", this.#getChatId(receiverId)),
        orderBy("timestamp", "asc")
      );
      await onSnapshot(q, (querySnapshot) => {
        const chat = [];
        querySnapshot.forEach((doc) => {
          chat.push(doc.data());
        });
        callback && typeof callback === "function" && callback(chat);
      });
    } catch (error) {
      throw error;
    }
  }
}
window.FireBase = FireBase;
