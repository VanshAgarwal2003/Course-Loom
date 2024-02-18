package in.springRestApi.service;

import java.util.ArrayList;
import java.util.List;

//import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import in.springRestApi.dao.CourseRepo;
import in.springRestApi.entity.Course;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CourseServiceImpl implements CourseService {
	@Autowired
	CourseRepo courseRepo;

	@Override
	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}

	@Override
	public Course getCourse(long id) {
		Course result = courseRepo.findByCourseId(id);
		return result;
	}

	@Override
	public List<Course> getAllCourse() {
		List<Course> list = new ArrayList<>();
		list = courseRepo.findAll();
		return list;
	}

	@Override
	public long updateCourse(long id, String courseDifficultyLevel, String courseDescription, String courseDuration,
			String courseTitle, String instructorName, Boolean isLiveClasses, Boolean isNotes, Boolean isVideoLecture) 
	{
		long result=courseRepo.updateCourse(id, courseDifficultyLevel, courseDescription, courseDuration, courseTitle, instructorName, isLiveClasses, isNotes, isVideoLecture);
		return result;
	}

	@Override
	public void deleteCourse(long id) {
	    java.util.Optional<Course> courseOptional = courseRepo.findById(id);

	    if (courseOptional.isPresent()) 
	    {
	        courseRepo.deleteById(id);
	    } 
	    else 
	    {
	        throw new EntityNotFoundException("Course with ID " + id + " not found");
	    }
	}


}
