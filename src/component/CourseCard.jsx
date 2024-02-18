import styles from './CourseCard.module.css';
import { FaVideo } from "react-icons/fa";
import { FaVideoSlash } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { TbBooksOff } from "react-icons/tb";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import { IoSchoolOutline } from "react-icons/io5";
import { TbSchoolOff } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useContext } from 'react';
import { courseContext } from '../store/course-list-store';

export default function CourseCard(props) 
{
  const contextObject = useContext(courseContext);
  const modalId = `courseDetailsModal_${props.item.courseId}`;

  return (
    <>
      <div className={`card ${styles.cards}`} style={{ width: "50rem" }}>
      <AiOutlineDelete className={styles.deleteIcon} onClick={() => contextObject.deleteCourse(props.item.courseId)}/>
        <div className="card-body">
          <h5 className={styles.title}>{props.item.courseTitle}</h5>
          <p className="card-text">{props.item.courseDescription}</p>

          <div className={styles.postViews}>
            <span className={styles.postViewsTag}><span className={styles.courseDifficulty}>Difficulty: {props.item.courseDifficultyLevel}</span></span>

            <div className="modal" tabIndex="-1" id={modalId}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{props.item.courseTitle} Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <span className={styles.postViewsTag}><span className={styles.Duration}>Duration: {props.item.courseDuration}</span></span>

                    <p className={styles.videoPara}>
                      Video Lectures: {props.item.isVideoLecture ? "Available" : "Not Available"}
                      <span className={styles.videoIcon}>{props.item.isVideoLecture ? <FaVideo /> : <FaVideoSlash />}</span>
                    </p>

                    <p className={styles.notesPara}>
                      Notes: {props.item.isNotes ? "Available" : "Not Available"}
                      <span className={styles.NoteIcon}>{props.item.isNotes ? <TbBooks /> : <TbBooksOff />}</span>
                    </p>

                    <p className={styles.liveClassPara}>
                      Live Classes: {props.item.isLiveClasses ? "Available" : "Not Available"}
                      <span className={styles.classIcon}>{props.item.isLiveClasses ? <IoSchoolOutline /> : <TbSchoolOff />}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className={`btn btn-primary ${styles.detailButton}`} data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
              Open Course Details
            </button>

          </div>
        </div>
      </div>
    </>
  )
}
