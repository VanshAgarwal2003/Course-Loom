import React, { useContext, useEffect } from 'react'
import WebHeader from './WebHeader'
import styles from "./Course.module.css"
import CourseCard from './CourseCard'
import base_url from '../Api/CourseApi';
import axios from 'axios';
import { courseContext } from '../store/course-list-store';
import StoreCourse  from  '../store/course-list-store'

export default function Course() {

    const contextObject = useContext(courseContext);

    useEffect(() => {
        axios.get(`${base_url}/courses`).then(
            (res) => {
                contextObject.CourseDataFetch(res.data.data)
            },
            (error) => {
                console.log(error);
            }
        );
    }, []); 

    const retrieveItem = (item) => {
        return <CourseCard key={item.courseId || 'defaultKey'} item={item} />;
    }

    return (
            <StoreCourse>
                <div className={styles.content}>

                    <section className={`py-5 text-center container ${styles.upperContent}`}>
                        <div className="row py-lg-5">
                            <div className={`col-lg-6 col-md-8 mx-auto ${styles.textContent} `}>
                                <h1 className="fw-light">View Courses Here</h1>
                            </div>
                        </div>
                    </section>
                </div>
                {contextObject.CourseListArray.map(retrieveItem)}
            </StoreCourse>
    )
}
