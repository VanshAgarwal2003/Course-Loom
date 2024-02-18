import { createContext, useReducer } from "react";
import axios from 'axios';
import base_url from '../Api/CourseApi';

export const courseContext = createContext({
    CourseListArray: [],
    deleteCourse: () => {},
    CourseDataFetch: () => {}, 
    addCourse: ()=>{},
});


const CourseReducer=(currentArray, action)=> 
{
    if (action.type === "GET_ALL_COURSE") 
    {
        return [...action.payload.courseArray];
    }
    return currentArray;
}


export default function StoreCourse(props) {

    const [CourseListArray, dispatchArray] = useReducer(CourseReducer, [{}]);

    const deleteCourse = (courseId) => 
    {
        axios.delete(`${base_url}/course/${courseId}`).then(
            (res) => {  
            },
            (error) => {
                console.log(error);
            }
        );    
    }
    const addCourse = (a,b,c,d,e,f,g) => 
    {
        const requestData = {
            courseTitle: a,
            courseDescription: b,
            courseDifficultyLevel: c,
            courseDuration: d,
            isNotes: e,
            isLiveClasses: f,
            isVideoLecture: g,
            
          };
        console.log(requestData)
        axios.post(`${base_url}/course`,requestData).then(
            (res) => {  
                console.log(res.data)
            },
            (error) => {
                console.log(error);
            }
        );    
    }

    const CourseDataFetch = (courseArray) => {
        dispatchArray({
            type: "GET_ALL_COURSE",
            payload: {
                courseArray,
            },
        });
    }
    

    return (
            <courseContext.Provider value={
                {
                  CourseListArray,
                  deleteCourse,
                  CourseDataFetch,
                  addCourse,
               }
            }>
                <div>{props.children}</div>
            </courseContext.Provider>
    );
}