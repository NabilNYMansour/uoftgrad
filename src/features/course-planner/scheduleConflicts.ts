import type { Course } from "@/data/courses"
import {
  COURSE_SCHEDULES,
  DAY_LABELS,
  type DayOfWeek,
  type SessionSchedule,
  type TimeSlot,
} from "@/data/courseSchedules"

export type ScheduleConflict = {
  session: SessionSchedule["session"]
  courseA: Course
  courseB: Course
  day: DayOfWeek
  slotA: TimeSlot
  slotB: TimeSlot
}

function slotsOverlap(slotA: TimeSlot, slotB: TimeSlot) {
  return (
    slotA.day === slotB.day &&
    slotA.startHour < slotB.endHour &&
    slotB.startHour < slotA.endHour
  )
}

function formatHour(hour: number) {
  return `${hour}:00`
}

export function formatTimeSlot(slot: TimeSlot) {
  return `${DAY_LABELS[slot.day]} ${formatHour(slot.startHour)}-${formatHour(slot.endHour)}`
}

export function getCourseSchedules(courseId: string) {
  return COURSE_SCHEDULES[courseId] ?? []
}

export function getScheduleConflicts(courses: Course[]): ScheduleConflict[] {
  const conflicts: ScheduleConflict[] = []

  for (let indexA = 0; indexA < courses.length; indexA += 1) {
    for (let indexB = indexA + 1; indexB < courses.length; indexB += 1) {
      const courseA = courses[indexA]
      const courseB = courses[indexB]
      const schedulesA = getCourseSchedules(courseA.id)
      const schedulesB = getCourseSchedules(courseB.id)

      for (const scheduleA of schedulesA) {
        const scheduleB = schedulesB.find(
          (schedule) => schedule.session === scheduleA.session
        )

        if (!scheduleB) {
          continue
        }

        for (const slotA of scheduleA.slots) {
          for (const slotB of scheduleB.slots) {
            if (!slotsOverlap(slotA, slotB)) {
              continue
            }

            conflicts.push({
              session: scheduleA.session,
              courseA,
              courseB,
              day: slotA.day,
              slotA,
              slotB,
            })
          }
        }
      }
    }
  }

  return conflicts
}

export function getConflictingCourseIds(conflicts: ScheduleConflict[]) {
  return new Set(
    conflicts.flatMap((conflict) => [conflict.courseA.id, conflict.courseB.id])
  )
}
