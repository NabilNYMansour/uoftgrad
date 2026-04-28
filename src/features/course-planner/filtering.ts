import type { Course } from "@/data/courses"

import type { Filters } from "./types"

export function filterCourses(courses: Course[], filters: Filters): Course[] {
  const query = filters.query.trim().toLowerCase()

  return courses.filter((course) => {
    const matchesQuery =
      !query ||
      course.code.toLowerCase().includes(query) ||
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    const matchesGroup =
      filters.groups.length === 0 || filters.groups.includes(course.group)
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(course.category)
    const matchesTag =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => course.tags.includes(tag))

    return matchesQuery && matchesGroup && matchesCategory && matchesTag
  })
}
