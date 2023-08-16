import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

const notesCollectionRef = collection(db, "notes");

const getNotes = async () => {
    const data = await getDocs(notesCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const getNotesByCourseId = async (courseId) => {
    if (courseId) {
        const notesQuery = query(notesCollectionRef, where("course_id", "==", courseId));
        const querySnapshot = await getDocs(notesQuery);
        return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } else {
        return [];
    }
};

const getNoteById = async (noteId) => {
    const noteDocRef = doc(notesCollectionRef, noteId);
    
    try {
      const noteDoc = await getDoc(noteDocRef);
      if (noteDoc.exists()) {
        return { ...noteDoc.data(), id: noteDoc.id };
      } else {
        console.log('Note not found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching note:', error);
      return null;
    }
  };

const createNote = async (title, content, courseId) => {
    const date = new Date();
    await addDoc(notesCollectionRef, {
        title: title,
        content: content,
        course_id: courseId,
        created_at: date.getTime(),
    });
};

const updateNote = async (noteId, title, content) => {
    const noteDocRef = doc(notesCollectionRef, noteId);
  
    try {
      await updateDoc(noteDocRef, {
        title: title,
        content: content,
        updated_at: new Date().getTime(),
      });
      console.log('Note updated successfully');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

export {
    getNotes,
    createNote,
    updateNote,
    getNotesByCourseId,
    getNoteById,
}