import { useState, useEffect } from "react";
import axios from 'axios';

const List = () => {
    const [ courseData, setcourseData] = useState([]);

    const accordian = [
      {
        "id" : 1,
        "title": "uno"
      },
      {
        "id" : 2,
        "title" : "duo"
      },

      {
        "id": 3,
        "title" : "tres"
      }

    ]
    
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3005/api/get-course/', // getting course from this api end point with object's properties of course such as name,id and description 
            );
            
            if (response.status === 201) {
            const { course } = response.data
           
            setcourseData(course);
            } else {
              console.error('Failed to fetch course details:');
            }
          } catch (error) {
            console.error('Error fetching course details:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (
        <section id="Course">
        {courseData.map ((course) => (
            <div key={course.id}> 
            <h1>{course.name}</h1>
            <h3>{course.description}</h3>
            </div>
        ) )

        }
        
        </section>
    )
}

export default List;