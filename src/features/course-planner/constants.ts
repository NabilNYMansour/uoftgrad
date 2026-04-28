import type { Filters, Program, ProgramId } from "./types"

export const STORAGE_KEY = "uoftgrad-course-planner"

export const PROGRAMS: Program[] = [
  {
    id: "msc",
    name: "MSc",
    description: "4 graduate half-courses and breadth in 2 groups.",
  },
  {
    id: "phd",
    name: "PhD",
    description:
      "Transitioned and external-master's PhD: 4 graduate half-courses and breadth in 3 groups.",
  },
  {
    id: "phdu",
    name: "PhD U",
    description:
      "Direct-entry PhD: 8 graduate half-courses and breadth in 3 groups.",
  },
  {
    id: "mscac-cs",
    name: "MScAC, Computer Science",
    description:
      "6 half-courses, CSC2701H and CSC2702H, breadth in 2 groups, max 1 Group 2 course.",
  },
  {
    id: "mscac-applied-math",
    name: "MScAC, Applied Math",
    description:
      "CSC2701H, CSC2702H, 2 CS half-courses from 2 groups, and 2 Mathematics half-courses.",
  },
  {
    id: "mscac-ai",
    name: "MScAC, Artificial Intelligence",
    description:
      "CSC2701H, CSC2702H, 2 AI-core courses, 1 Group 2 course, and 1 Group 1, 3, or 4 course.",
  },
  {
    id: "mscac-healthcare",
    name: "MScAC, Artificial Intelligence in Healthcare",
    description:
      "CSC2701H, CSC2702H, 1 data science course, 1 Group 2, 1 Group 3, and 1 Medicine course.",
  },
  {
    id: "mscac-data-science",
    name: "MScAC, Data Science",
    description:
      "CSC2701H, CSC2702H, 2 CS half-courses from 2 groups, and 2 Statistics half-courses.",
  },
  {
    id: "mscac-biology",
    name: "MScAC, Data Science for Biology",
    description:
      "CSC2701H, CSC2702H, 2 CS half-courses from 2 groups, and 2 CSB, EEB, MMG, or Statistics half-courses.",
  },
  {
    id: "mscac-quantum",
    name: "MScAC, Quantum Computing",
    description:
      "CSC2701H, CSC2702H, 2 CS half-courses from 2 groups, and 2 Physics half-courses.",
  },
]

export const INITIAL_FILTERS: Filters = {
  query: "",
  groups: [],
  categories: [],
  tags: [],
}

export const PROGRAM_EXTERNAL_NOTES: Partial<Record<ProgramId, string>> = {
  "mscac-applied-math":
    "Mathematics courses are not mentioned in the CS course list. This app tracks the CS and required-course portions.",
  "mscac-healthcare":
    "Faculty of Medicine courses are not mentioned in the CS course list. This app tracks the CS, data science, and required-course portions.",
  "mscac-data-science":
    "Statistics courses are only counted when they appear in the CS course list, such as STA cross-listed courses.",
  "mscac-biology":
    "CSB, EEB, MMG, and most Statistics courses are not mentioned in the CS course list. This app tracks the CS and required-course portions.",
  "mscac-quantum":
    "Physics courses are not mentioned in the CS course list. This app tracks the CS and required-course portions.",
}
