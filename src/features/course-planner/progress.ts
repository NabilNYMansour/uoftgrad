import type { Course } from "@/data/courses"

import type { ProgramId, ProgressItem } from "./types"

function getBreadthGroups(courses: Course[]) {
  return new Set(
    courses
      .filter((course) => course.group !== "Non-Breadth")
      .map((course) => course.group)
  )
}

function countCourses(courses: Course[]) {
  return courses.length
}

function countMscacRequired(courses: Course[]) {
  return courses.filter((course) => course.mscacRequired).length
}

function countCsBreadthCourses(courses: Course[]) {
  return courses.filter(
    (course) => course.code.includes("CSC") && course.group !== "Non-Breadth"
  ).length
}

export function getProgress(programId: ProgramId, selectedCourses: Course[]) {
  const breadthGroups = getBreadthGroups(selectedCourses)
  const requiredCount = countMscacRequired(selectedCourses)
  const csBreadthCourses = selectedCourses.filter(
    (course) => course.code.includes("CSC") && course.group !== "Non-Breadth"
  )
  const progress: ProgressItem[] = []

  if (programId === "msc") {
    return [
      {
        label: "Graduate half-courses selected",
        current: countCourses(selectedCourses),
        target: 4,
      },
      {
        label: "Breadth groups covered",
        current: breadthGroups.size,
        target: 2,
      },
    ]
  }

  if (programId === "phd") {
    return [
      {
        label: "Graduate half-courses selected",
        current: countCourses(selectedCourses),
        target: 4,
      },
      {
        label: "Breadth groups covered",
        current: breadthGroups.size,
        target: 3,
      },
    ]
  }

  if (programId === "phdu") {
    return [
      {
        label: "Graduate half-courses selected",
        current: countCourses(selectedCourses),
        target: 8,
      },
      {
        label: "Breadth groups covered",
        current: breadthGroups.size,
        target: 3,
      },
    ]
  }

  progress.push(
    { label: "MScAC required courses", current: requiredCount, target: 2 },
    {
      label: "Total half-courses selected",
      current: countCourses(selectedCourses),
      target: 6,
    }
  )

  if (programId === "mscac-cs") {
    progress.push(
      {
        label: "CSC timetable courses",
        current: countCsBreadthCourses(selectedCourses),
        target: 2,
      },
      {
        label: "Breadth groups covered",
        current: breadthGroups.size,
        target: 2,
      },
      {
        label: "Group 2 courses within cap",
        current:
          selectedCourses.filter((course) => course.group === "Group 2")
            .length <= 1
            ? 1
            : 0,
        target: 1,
        note: "No more than 1 Group 2 course counts for this concentration.",
      }
    )
  }

  if (
    programId === "mscac-applied-math" ||
    programId === "mscac-data-science" ||
    programId === "mscac-biology" ||
    programId === "mscac-quantum"
  ) {
    progress.push(
      {
        label: "CS half-courses selected",
        current: countCsBreadthCourses(selectedCourses),
        target: 2,
      },
      {
        label: "CS groups covered",
        current: getBreadthGroups(csBreadthCourses).size,
        target: 2,
      }
    )
  }

  if (programId === "mscac-data-science") {
    progress.push({
      label: "Statistics half-courses found in catalogue",
      current: selectedCourses.filter((course) => course.code.includes("STA"))
        .length,
      target: 2,
    })
  }

  if (programId === "mscac-ai") {
    progress.push(
      {
        label: "AI-core courses",
        current: selectedCourses.filter((course) => course.aiCore).length,
        target: 2,
      },
      {
        label: "Group 2 course",
        current: selectedCourses.filter((course) => course.group === "Group 2")
          .length,
        target: 1,
      },
      {
        label: "Group 1, 3, or 4 course",
        current: selectedCourses.filter((course) =>
          ["Group 1", "Group 3", "Group 4"].includes(course.group)
        ).length,
        target: 1,
      }
    )
  }

  if (programId === "mscac-healthcare") {
    progress.push(
      {
        label: "Approved data science course",
        current: selectedCourses.filter(
          (course) => course.healthcareDataScience
        ).length,
        target: 1,
      },
      {
        label: "Group 2 course",
        current: selectedCourses.filter((course) => course.group === "Group 2")
          .length,
        target: 1,
      },
      {
        label: "Group 3 course",
        current: selectedCourses.filter((course) => course.group === "Group 3")
          .length,
        target: 1,
      }
    )
  }

  return progress
}

export function progressPercent(item: ProgressItem) {
  if (item.target === 0) {
    return 100
  }

  return Math.min(100, Math.round((item.current / item.target) * 100))
}
