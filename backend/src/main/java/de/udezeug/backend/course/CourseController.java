package de.udezeug.backend.course;

import de.udezeug.backend.course.dto.CourseCreationRequest;
import de.udezeug.backend.course.dto.CourseCreationResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/course")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService service;

    @PostMapping
    public ResponseEntity<CourseCreationResponse> createCourse(@Valid @RequestBody CourseCreationRequest request) {
        final CourseCreationResponse course = this.service.createCourse(request);
        return ResponseEntity.ok(course);
    }
}
