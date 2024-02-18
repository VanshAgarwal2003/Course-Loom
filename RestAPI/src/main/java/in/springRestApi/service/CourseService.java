package in.springRestApi.service;

import java.util.List;

import in.springRestApi.entity.Course;

public interface CourseService {
	public Course addCourse(Course course);

	public Course getCourse(long id);

	public List<Course> getAllCourse();

	public long updateCourse(long id, String courseDifficultyLevel, String courseDescription, String courseDuration,
			String courseTitle, String instructorName, Boolean isLiveClasses, Boolean isNotes, Boolean isVideoLecture);
	
	public void deleteCourse(long id);
}
