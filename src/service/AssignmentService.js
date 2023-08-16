import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

const assignmentCollectionRef = collection(db, "assignment");

const getAssignments = async () => {
    const data = await getDocs(assignmentCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const getAssignmentsByCourseId = async (courseId) => {
    if (courseId) {
        const AssignmentQuery = query(assignmentCollectionRef, where("course_id", "==", courseId));
        const querySnapshot = await getDocs(AssignmentQuery);
        return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } else {
        return [];
    }
};

const getAssignmentById = async (assignmentId) => {
    const assignmentDocRef = doc(assignmentCollectionRef, assignmentId);
    
    try {
      const assignmentDoc = await getDoc(assignmentDocRef);
      if (assignmentDoc.exists()) {
        return { ...assignmentDoc.data(), id: assignmentDoc.id };
      } else {
        console.log('assignment not found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching assignment:', error);
      return null;
    }
  };

const createAssignment = async (title, content, courseId) => {
    const date = new Date();
    await addDoc(assignmentCollectionRef, {
        title: title,
        content: content,
        course_id: courseId,
        created_at: date.getTime(),
    });
};

const updateAssignment = async (assignmentId, title, content) => {
    const assignmentDocRef = doc(assignmentCollectionRef, assignmentId);
  
    try {
      await updateDoc(assignmentDocRef, {
        title: title,
        content: content,
        updated_at: new Date().getTime(),
      });
      console.log('assignment updated successfully');
    } catch (error) {
      console.error('Error updating assignment:', error);
    }
  };

export {
    getAssignments,
    createAssignment,
    updateAssignment,
    getAssignmentsByCourseId,
    getAssignmentById,
}