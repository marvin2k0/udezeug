package de.udezeug.backend.course.dto;

public record CourseCreationResponse(
        String id,
        String name,
        String description
) {
}
