import React, { useRef } from 'react'
import styles from './AddCourse.module.css';
import { courseContext } from '../store/course-list-store';
import { useContext } from 'react'

export default function AddCourse() {
    const contextObject = useContext(courseContext);
    const title = useRef();
    const body = useRef();
    const Courseduration = useRef();
    const Video = useRef();
    const notes = useRef();
    const Class = useRef();
    const level = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const courseTitle = title.current.value;
        const courseDescription = body.current.value;
        const courseDuration = Courseduration.current.value;
        const isVideoLecture = Video.current.value;
        const isNotes = notes.current.value;
        const isLiveClasses = Class.current.value;
        const courseDifficultyLevel = level.current.value;

        contextObject.addCourse(courseTitle, courseDescription, courseDifficultyLevel, courseDuration, isNotes, isLiveClasses, isVideoLecture);
       
        title.current.value = "";
        body.current.value = "";
        Courseduration.current.value = "";
        Video.current.value = "";
        notes.current.value = "";
        Class.current.value = "";
        level.current.value = "";

    };

    return (
        <div className={styles.formDiv}>
            <form className={styles.AddCourseform} onSubmit={handleSubmit} autoComplete='off'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Course Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" ref={title} aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Course Body</label>
                    <input type="text" className="form-control" ref={body} id="exampleInputPassword1" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Course Duration</label>
                    <input type="text" className="form-control" ref={Courseduration} id="duration" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="video" className="form-label">Video Lecture Available</label>
                    <input type="text" className="form-control" placeholder="True/False" ref={Video} id="video" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="note" className="form-label">Notes Available</label>
                    <input type="text" className="form-control" placeholder="True/False" ref={notes} id="note" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="liveClass" className="form-label">Live Classes Available</label>
                    <input type="text" className="form-control" placeholder="True/False" ref={Class} id="liveClass" required/>
                </div>

                <div>
                    <label htmlFor="courseLevel" className="form-label">Course Difficulty Level</label><br />
                    <input list="level" name="list" id="courseLevel" ref={level} className={styles.dropdown} required/>
                    <datalist id="level">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Very Hard">Very Hard</option>
                    </datalist>
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitbutton}`}>Submit</button>
            </form>
        </div>
    )
}
