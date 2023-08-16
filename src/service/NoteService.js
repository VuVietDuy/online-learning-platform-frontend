import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
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

const createNote = async (title, content, courseId) => {
    const date = new Date();
    await addDoc(notesCollectionRef, {
        title: title,
        content: content,
        course_id: courseId,
        created_at: date.getTime(),
    });
};

const updateNote = async (title, content, courseId) => {
    const date = new Date();
    await updateDoc(notesCollectionRef, {
        title: title,
        content: content,
        course_id: courseId,
        update_at: date.getTime(),
    });
};

export {
    getNotes,
    createNote,
    updateNote,
    getNotesByCourseId,
}