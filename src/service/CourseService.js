import axios from "axios";

const COURSE_API_BASE_URL = "http://localhost:8080/api/v1/courses";

function getCourses() {
    return axios.get(COURSE_API_BASE_URL)
      .then(resp => {
        const data = resp.data;
        if (Array.isArray(data)) {
          return data;
        } else {
          throw new Error('Response data is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        throw error;
      });
  }


export {
    getCourses
}
