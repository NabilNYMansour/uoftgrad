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
import {
  getCourseSchedules,
  type ScheduleConflict,
} from "../scheduleConflicts"
import type { ProgramId } from "../types"
import { ScheduleConflictWarning } from "./schedule-conflict-warning"

type SelectedCoursesPanelProps = {
  programId: ProgramId
  selectedCourses: Course[]
  selectedIdsCount: number
  conflicts: ScheduleConflict[]
  conflictingCourseIds: Set<string>
  onClearSelection: () => void
  onToggleCourse: (courseId: string) => void
}

export function SelectedCoursesPanel({
  programId,
  selectedCourses,
  selectedIdsCount,
  conflicts,
  conflictingCourseIds,
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
      <CardContent className="space-y-4">
        <ScheduleConflictWarning conflicts={conflicts} />
        <div
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
          selectedCourses.map((course) => {
            const schedules = getCourseSchedules(course.id)

            return (
            <div
              key={course.id}
              className={cn(
                "border bg-background/40 p-3 shadow-inner",
                conflictingCourseIds.has(course.id)
                  ? "border-amber-500/60 bg-amber-500/5"
                  : "border-border/80"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{course.code}</p>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {course.title}
                  </p>
                  {schedules.length > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {schedules
                        .map(
                          (schedule) => `${schedule.session}: ${schedule.display}`
                        )
                        .join(" · ")}
                    </p>
                  )}
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
            )
          })
        )}
        </div>
      </CardContent>
    </Card>
  )
}
