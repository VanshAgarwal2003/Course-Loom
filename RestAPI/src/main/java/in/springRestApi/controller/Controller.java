package in.springRestApi.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.springRestApi.entity.Course;
import in.springRestApi.service.CourseServiceImpl;
import jakarta.persistence.EntityNotFoundException;

@RestController
public class Controller {

	@Autowired
	CourseServiceImpl courseServiceImpl;

	@PostMapping("/course")
	public ResponseEntity<Course> addCourse(@RequestBody Course course) {
		Course result = null;
		if (course != null) {
			result = courseServiceImpl.addCourse(course);

		}
		try {
			if (result != null) {
				return ResponseEntity.status(HttpStatus.CREATED).build();
			} else if (course == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping("course/{id}")
	public ResponseEntity<Map<String, Object>> getCourse(@PathVariable("id") long id) {
		Map<String, Object> response = new HashMap<>();

		try {
			if (id == 0) {
				response.put("status", HttpStatus.BAD_REQUEST.value());
				response.put("message", "Bad Request");
			} else {
				Course result = courseServiceImpl.getCourse(id);
				if (result != null) {
					response.put("status", HttpStatus.OK.value());
					response.put("message", "Success");
					response.put("data", result);
				} else {
					response.put("status", HttpStatus.NOT_FOUND.value());
					response.put("message", "Course not found");
				}
			}
		} catch (Exception e) {
			response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
			response.put("message", "Internal Server Error");
		}

		return ResponseEntity.status((int) response.get("status")).body(response);
	}

	@GetMapping("/courses")
	public ResponseEntity<Map<String, Object>> getCourses() {
		Map<String, Object> response = new HashMap<>();
		List<Course> list = new ArrayList<>();

		try {
			list = courseServiceImpl.getAllCourse();
			if (list == null) {
				response.put("status", HttpStatus.BAD_REQUEST.value());
				response.put("message", "Bad request");
			} else {
				response.put("status", HttpStatus.OK.value());
				response.put("data", list);
			}
		} catch (Exception e) {
			response.put("status", HttpStatus.NOT_FOUND.value());
		}

		return ResponseEntity.status((int) response.get("status")).body(response);
	}

	@PutMapping("course/{id}")
	public ResponseEntity<Map<String, Object>> updateCourse(@PathVariable("id") long id, @RequestBody Course course) {
		Map<String, Object> response = new HashMap<>();
		long result = 0;

		try {
			if (id == 0) {
				response.put("status", HttpStatus.BAD_REQUEST.value());
				response.put("message", "Bad Request");
			} else {
				result = courseServiceImpl.updateCourse(id, course.getCourseDifficultyLevel(),
						course.getCourseDescription(), course.getCourseDuration(), course.getCourseTitle(),
						course.getInstructorName(), course.getIsLiveClasses(), course.getIsNotes(),
						course.getIsVideoLecture());

				if (result == 0) {
					response.put("status", HttpStatus.BAD_REQUEST.value());
					response.put("result", result);
				} else {
					response.put("status", HttpStatus.OK.value());
					response.put("result", result);
					response.put("message", "success");
				}
			}
			return ResponseEntity.status((int) response.get("status")).body(response);
		} catch (Exception e) {
			response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
			return ResponseEntity.status((int) response.get("status")).body(response);
		}
	}

	@DeleteMapping("/course/{id}")
	public ResponseEntity<Map<String, Object>> deleteCourse(@PathVariable("id") long id) {
		Map<String, Object> response = new HashMap<>();

		if (id == 0) {
	        response.put("status", HttpStatus.BAD_REQUEST.value());
	    } 
		else 
		{
	        try 
	        {
	            courseServiceImpl.deleteCourse(id);
	            response.put("status", HttpStatus.OK.value());
	            response.put("message", "Success");
	        } 
	        catch (EntityNotFoundException e) 
	        {
	            response.put("status", HttpStatus.NOT_FOUND.value());
	            response.put("message", "Course not found for ID: " + id);
	        } 
	        catch (Exception e)
	        {
	            response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
	            response.put("message", "Error deleting course for ID: " + id);
	        }
	    }

		return ResponseEntity.status((int) response.get("status")).body(response);
	}

}
