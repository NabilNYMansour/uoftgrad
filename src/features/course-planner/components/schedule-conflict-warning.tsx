import { AlertTriangle } from "lucide-react"

import type { ScheduleConflict } from "../scheduleConflicts"
import { formatTimeSlot } from "../scheduleConflicts"

type ScheduleConflictWarningProps = {
  conflicts: ScheduleConflict[]
}

export function ScheduleConflictWarning({
  conflicts,
}: ScheduleConflictWarningProps) {
  if (conflicts.length === 0) {
    return null
  }

  return (
    <div
      role="alert"
      className="rounded-md border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950 dark:text-amber-100"
    >
      <div className="flex items-start gap-2">
        <AlertTriangle
          className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
          aria-hidden
        />
        <div className="space-y-2">
          <p className="font-medium">
            {conflicts.length === 1
              ? "1 schedule conflict in your selected courses"
              : `${conflicts.length} schedule conflicts in your selected courses`}
          </p>
          <ul className="space-y-1.5 text-amber-900/90 dark:text-amber-50/90">
            {conflicts.map((conflict) => (
              <li key={`${conflict.courseA.id}-${conflict.courseB.id}-${conflict.session}-${conflict.day}-${conflict.slotA.startHour}`}>
                <span className="font-medium">{conflict.session}:</span>{" "}
                {conflict.courseA.code} ({formatTimeSlot(conflict.slotA)}) and{" "}
                {conflict.courseB.code} ({formatTimeSlot(conflict.slotB)})
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-800/80 dark:text-amber-100/70">
            Conflicts are checked within the same session using the official
            timetable. Courses without published times are not included.
          </p>
        </div>
      </div>
    </div>
  )
}
