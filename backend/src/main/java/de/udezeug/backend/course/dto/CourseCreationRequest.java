package de.udezeug.backend.course.dto;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record CourseCreationRequest(
        @Size(min = 3, max = 255)
        String name,
        String description,
        @Pattern(regexp = "^[a-zA-Z0-9äöüÄÖÜß]+(,\\s*[a-zA-Z0-9äöüÄÖÜß]+)*$")
        String tags,
        Boolean visible
) {
}
