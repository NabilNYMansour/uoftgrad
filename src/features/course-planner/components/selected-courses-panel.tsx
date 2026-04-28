import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Course } from "@/data/courses"
import { cn } from "@/lib/utils"

import { getCourseStatus } from "../courseStatus"
import type { ProgramId } from "../types"

type SelectedCoursesPanelProps = {
  programId: ProgramId
  selectedCourses: Course[]
  selectedIdsCount: number
  onClearSelection: () => void
  onToggleCourse: (courseId: string) => void
}

export function SelectedCoursesPanel({
  programId,
  selectedCourses,
  selectedIdsCount,
  onClearSelection,
  onToggleCourse,
}: SelectedCoursesPanelProps) {
  return (
    <Card className="h-full border-border/80 bg-card/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Selected courses</CardTitle>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={selectedIdsCount === 0}
            onClick={onClearSelection}
          >
            Clear
          </Button>
        </div>
        <CardDescription>
          Your saved plan. These courses are removed from the remaining course
          list below.
        </CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "grid gap-3",
          selectedCourses.length > 0 && "sm:grid-cols-2"
        )}
      >
        {selectedCourses.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Select courses to see which requirements they satisfy.
          </p>
        ) : (
          selectedCourses.map((course) => (
            <div
              key={course.id}
              className="border border-border/80 bg-background/40 p-3 shadow-inner"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{course.code}</p>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {course.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleCourse(course.id)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Remove ${course.code}`}
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-2 text-xs">
                {getCourseStatus(programId, course, selectedCourses)}
              </p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
