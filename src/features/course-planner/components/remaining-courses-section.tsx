import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Course } from "@/data/courses"
import { cn } from "@/lib/utils"

import type { Filters } from "../types"
import { CourseFilters } from "./course-filters"

type RemainingCoursesSectionProps = {
  filters: Filters
  remainingCourses: Course[]
  totalCoursesCount: number
  onUpdateFilter: <FilterKey extends keyof Filters>(
    filter: FilterKey,
    value: Filters[FilterKey]
  ) => void
  onResetFilters: () => void
  onToggleCourse: (courseId: string) => void
}

export function RemainingCoursesSection({
  filters,
  remainingCourses,
  totalCoursesCount,
  onUpdateFilter,
  onResetFilters,
  onToggleCourse,
}: RemainingCoursesSectionProps) {
  const toggleTagFilter = (tag: string) => {
    onUpdateFilter(
      "tags",
      filters.tags.includes(tag)
        ? filters.tags.filter((selectedTag) => selectedTag !== tag)
        : [...filters.tags, tag]
    )
  }

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <CourseFilters
          filters={filters}
          onUpdateFilter={onUpdateFilter}
          onResetFilters={onResetFilters}
        />

        <div className="flex h-9 items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">Remaining courses</h2>
          <p className="text-sm text-muted-foreground">
            Showing {remainingCourses.length} of {totalCoursesCount}
          </p>
        </div>
        <div className="grid gap-3">
          {remainingCourses.map((course) => (
            <Card
              key={course.id}
              className="gap-3 border-border/80 bg-card/95 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <CardHeader className="gap-3 px-5">
                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{course.code}</Badge>
                      <Badge variant="outline">{course.group}</Badge>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardTitle className="text-base leading-snug transition-colors duration-300">
                      {course.title}
                    </CardTitle>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onToggleCourse(course.id)}
                    className="shrink-0 bg-background!"
                  >
                    Select
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 px-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {course.description}
                </p>
                {course.notes && (
                  <p className="text-sm text-muted-foreground">
                    {course.notes}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTagFilter(tag)}
                      className={cn(
                        "bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        filters.tags.includes(tag) &&
                          "bg-secondary text-foreground"
                      )}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          {remainingCourses.length === 0 && (
            <Card className="border-border/80 bg-card/95 py-6 shadow-sm backdrop-blur-sm">
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No remaining courses match the current filters.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
