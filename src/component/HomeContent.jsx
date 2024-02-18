import React from 'react'
import styles from "./HomeContent.module.css"
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { navBarAction } from '../store/navBarSlice';

export default function HomeContent() 
{

  const nav =useSelector(store=>store.navbar);
  const dispatch=useDispatch();

  return (
    <>
      <div className={styles.upperContent}>
        <section className="py-5 text-center container">
          <div className={`row py-0 ${styles.textContent}`}>
            <div className="col-lg-0 col-md-0 mx-auto">
              <h1 className={styles.upperContentHeading}>Get All The Best Courses Here</h1>
              <p className={styles.upperContentPara}>Knowledge is the foundation, the reservoir of information awaiting activation.</p>
              <p>
                <Link to="/course"><button className="btn btn-primary btn-lg" type="button" onClick={()=> dispatch(navBarAction.changeNav("Course"))}>View Courses</button></Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={`p-5 mb-4 bg-body-tertiary rounded-3 ${styles.mainContainer}`}>
        <div className={styles.contentContainer}>
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Skills sculpt success</h1>
            <p className="col-md-8 fs-5">Skill, the artful application, transforms knowledge into tangible abilities. Together, they form an indomitable partnership, where the acquisition of knowledge fuels the mastery of skill </p>
          </div>
          <img src="images/Student.jpg" alt="" className={styles.image} />
        </div>
      </div>
    </>
  )
}
