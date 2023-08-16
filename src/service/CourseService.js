
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';

const coursesCollectionRef = collection(db, "courses");

const getCourses = async () => {
  const data = await getDocs(coursesCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const createCourse = async (name, description) => {
  const date = new Date();
  await addDoc(coursesCollectionRef, {
    name: name,
    description: description,
    created_at: date.getTime(),
  });
};

export  {
  getCourses,
  createCourse,
};
