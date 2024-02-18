package in.springRestApi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long courseId;

	String courseTitle;
	String courseDescription;
	String courseDuration;
	String courseDifficultyLevel;
	String instructorName;
	Boolean isVideoLecture;
	Boolean isLiveClasses;
	Boolean isNotes;

	public long getCourseId() {
		return courseId;
	}

	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}

	public String getCourseTitle() {
		return courseTitle;
	}

	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public String getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(String courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getCourseDifficultyLevel() {
		return courseDifficultyLevel;
	}

	public void setCourseDifficultyLevel(String courseDifficultyLevel) {
		this.courseDifficultyLevel = courseDifficultyLevel;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public Boolean getIsVideoLecture() {
		return isVideoLecture;
	}

	public void setIsVideoLecture(Boolean isVideoLecture) {
		this.isVideoLecture = isVideoLecture;
	}

	public Boolean getIsLiveClasses() {
		return isLiveClasses;
	}

	public void setIsLiveClasses(Boolean isLiveClasses) {
		this.isLiveClasses = isLiveClasses;
	}

	public Boolean getIsNotes() {
		return isNotes;
	}

	public void setIsNotes(Boolean isNotes) {
		this.isNotes = isNotes;
	}

	public Course(long courseId, String courseTitle, String courseDescription, String courseDuration,
			String courseDifficultyLevel, String instructorName, Boolean isVideoLecture, Boolean isLiveClasses,
			Boolean isNotes) {
		super();
		this.courseId = courseId;
		this.courseTitle = courseTitle;
		this.courseDescription = courseDescription;
		this.courseDuration = courseDuration;
		this.courseDifficultyLevel = courseDifficultyLevel;
		this.instructorName = instructorName;
		this.isVideoLecture = isVideoLecture;
		this.isLiveClasses = isLiveClasses;
		this.isNotes = isNotes;
	}

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseTitle=" + courseTitle + ", courseDescription="
				+ courseDescription + ", courseDuration=" + courseDuration + ", courseDifficultyLevel="
				+ courseDifficultyLevel + ", instructorName=" + instructorName + ", isVideoLecture=" + isVideoLecture
				+ ", isLiveClasses=" + isLiveClasses + ", isNotes=" + isNotes + "]";
	}

}