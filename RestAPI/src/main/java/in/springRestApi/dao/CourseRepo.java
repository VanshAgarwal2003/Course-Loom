package in.springRestApi.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import in.springRestApi.entity.*;
import jakarta.transaction.Transactional;

public interface CourseRepo extends CrudRepository<Course, Long> 
{
	public Course findByCourseId(long courseId);

	public List<Course> findAll();

	@Modifying
    @Transactional
    @Query("UPDATE Course c SET c.courseDifficultyLevel = :courseDifficultyLevel, c.courseDescription = :courseDescription, c.courseDuration = :courseDuration, c.courseTitle = :courseTitle, c.instructorName = :instructorName, c.isLiveClasses = :isLiveClasses, c.isNotes = :isNotes, c.isVideoLecture = :isVideoLecture WHERE c.id = :id")
	public long updateCourse(
	        @Param("id") long id,
	        @Param("courseDifficultyLevel") String courseDifficultyLevel,
	        @Param("courseDescription") String courseDescription,
	        @Param("courseDuration") String courseDuration,
	        @Param("courseTitle") String courseTitle,
	        @Param("instructorName") String instructorName,
	        @Param("isLiveClasses") Boolean isLiveClasses,
	        @Param("isNotes") Boolean isNotes,
	        @Param("isVideoLecture") Boolean isVideoLecture
	    );
	
}