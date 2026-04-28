import type { Course } from "@/data/courses"

import type { ProgramId } from "./types"

export function getCourseStatus(
  programId: ProgramId,
  course: Course,
  selectedCourses: Course[]
) {
  if (
    !selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)
  ) {
    return "Not selected"
  }

  if (course.mscacRequired) {
    return programId.startsWith("mscac") ? "Counts as required" : "Selected"
  }

  if (programId === "mscac-cs" && course.group === "Group 2") {
    const group2Courses = selectedCourses.filter(
      (item) => item.group === "Group 2"
    )
    return group2Courses.findIndex((item) => item.id === course.id) === 0
      ? "Counts toward Group 2 cap"
      : "Selected, over Group 2 cap"
  }

  if (programId === "mscac-ai") {
    if (course.aiCore) return "Counts toward AI core"
    if (course.group === "Group 2") return "Counts toward Group 2"
    if (["Group 1", "Group 3", "Group 4"].includes(course.group)) {
      return "Counts toward Group 1, 3, or 4"
    }
    return "Selected, not an AI concentration slot"
  }

  if (programId === "mscac-healthcare") {
    if (course.healthcareDataScience) return "Counts toward data science"
    if (course.group === "Group 2") return "Counts toward Group 2"
    if (course.group === "Group 3") return "Counts toward Group 3"
    return "Selected, not a healthcare slot"
  }

  if (
    programId === "mscac-applied-math" ||
    programId === "mscac-data-science" ||
    programId === "mscac-biology" ||
    programId === "mscac-quantum"
  ) {
    if (course.group !== "Non-Breadth" && course.code.includes("CSC")) {
      return "Counts toward CS course group"
    }
    if (programId === "mscac-data-science" && course.code.includes("STA")) {
      return "Counts toward Statistics if approved"
    }
    return "Selected, not a tracked external slot"
  }

  return course.group === "Non-Breadth"
    ? "Counts as non-breadth course"
    : "Counts toward course and breadth"
}
