import type { CourseSession } from "@/data/courses"

export type DayOfWeek = "M" | "T" | "W" | "R" | "F"

export type TimeSlot = {
  day: DayOfWeek
  startHour: number
  endHour: number
}

export type SessionSchedule = {
  session: CourseSession
  slots: TimeSlot[]
  display: string
}

export const DAY_LABELS: Record<DayOfWeek, string> = {
  M: "Monday",
  T: "Tuesday",
  W: "Wednesday",
  R: "Thursday",
  F: "Friday",
}

export const COURSE_SCHEDULES: Record<string, SessionSchedule[]> = {
  "csc1500h-teaching-cs": [
    {
      session: "Fall",
      display: "T 13-15; R 14-15",
      slots: [
        { day: "T", startHour: 13, endHour: 15 },
        { day: "R", startHour: 14, endHour: 15 },
      ],
    },
  ],
  "csc2103h-software-testing": [
    {
      session: "Fall",
      display: "W 15-17, F 15-17",
      slots: [
        { day: "W", startHour: 15, endHour: 17 },
        { day: "F", startHour: 15, endHour: 17 },
      ],
    },
  ],
  "csc2104h-formal-methods": [
    {
      session: "Fall",
      display: "R 15-17",
      slots: [{ day: "R", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2108h-automated-reasoning-ml": [
    {
      session: "Fall",
      display: "F 15-17",
      slots: [{ day: "F", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2125h-se-for-ml": [
    {
      session: "Winter",
      display: "W 13-16",
      slots: [{ day: "W", startHour: 13, endHour: 16 }],
    },
  ],
  "csc2126h-advanced-functional-programming": [
    {
      session: "Fall",
      display: "R 13-15",
      slots: [{ day: "R", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2208h-advanced-operating-systems": [
    {
      session: "Fall",
      display: "T 13-15; R 13-14",
      slots: [
        { day: "T", startHour: 13, endHour: 15 },
        { day: "R", startHour: 13, endHour: 14 },
      ],
    },
  ],
  "csc2209h-computer-networking": [
    {
      session: "Fall",
      display: "T 18-21",
      slots: [{ day: "T", startHour: 18, endHour: 21 }],
    },
  ],
  "csc2221h-distributed-computing": [
    {
      session: "Fall",
      display: "F 10-13",
      slots: [{ day: "F", startHour: 10, endHour: 13 }],
    },
  ],
  "csc2222h-parallel-distributed-computing": [
    {
      session: "Winter",
      display: "R 9-11",
      slots: [{ day: "R", startHour: 9, endHour: 11 }],
    },
  ],
  "csc2229h-privacy-enhancing-technologies": [
    {
      session: "Fall",
      display: "R 9-11",
      slots: [{ day: "R", startHour: 9, endHour: 11 }],
    },
  ],
  "csc2229h-networks-machine-learning": [
    {
      session: "Winter",
      display: "T 13-15",
      slots: [{ day: "T", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2234h-database-system-technology": [
    {
      session: "Fall",
      display: "T 13-15, R 13-14",
      slots: [
        { day: "T", startHour: 13, endHour: 15 },
        { day: "R", startHour: 13, endHour: 14 },
      ],
    },
  ],
  "csc2235h-cloud-native-data-management": [
    {
      session: "Winter",
      display: "R 15-17",
      slots: [{ day: "R", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2236h-data-structures-wild": [
    {
      session: "Winter",
      display: "W 16-18",
      slots: [{ day: "W", startHour: 16, endHour: 18 }],
    },
  ],
  "csc2237h-secure-computer-hardware": [
    {
      session: "Fall",
      display: "M 15-17",
      slots: [{ day: "M", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2305h-numerical-optimization": [
    {
      session: "Winter",
      display: "M 15-17, W 15-16",
      slots: [
        { day: "M", startHour: 15, endHour: 17 },
        { day: "W", startHour: 15, endHour: 16 },
      ],
    },
  ],
  "csc2321h-matrix-calculations": [
    {
      session: "Fall",
      display: "T 17-19",
      slots: [{ day: "T", startHour: 17, endHour: 19 }],
    },
  ],
  "csc2405h-automata-theory": [
    {
      session: "Winter",
      display: "M 11-13, W 11-12",
      slots: [
        { day: "M", startHour: 11, endHour: 13 },
        { day: "W", startHour: 11, endHour: 12 },
      ],
    },
  ],
  "csc2407h-mathematical-methods": [
    {
      session: "Fall",
      display: "T 13-15",
      slots: [{ day: "T", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2410h-graph-theory": [
    {
      session: "Winter",
      display: "R 15-17",
      slots: [{ day: "R", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2414h-quantum-algorithms-complexity": [
    {
      session: "Fall",
      display: "T 10-11; R 10-11",
      slots: [
        { day: "T", startHour: 10, endHour: 11 },
        { day: "R", startHour: 10, endHour: 11 },
      ],
    },
  ],
  "csc2414h-high-dimensional-expanders": [
    {
      session: "Winter",
      display: "T 13-15",
      slots: [{ day: "T", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2419h-zero-knowledge-proofs": [
    {
      session: "Fall",
      display: "M 11-13",
      slots: [{ day: "M", startHour: 11, endHour: 13 }],
    },
  ],
  "csc2421h-online-myopic-algorithms": [
    {
      session: "Fall",
      display: "M 13-14; W 13-14",
      slots: [
        { day: "M", startHour: 13, endHour: 14 },
        { day: "W", startHour: 13, endHour: 14 },
      ],
    },
  ],
  "csc2421h-algorithmic-discrepancy-theory": [
    {
      session: "Winter",
      display: "R 13-15",
      slots: [{ day: "R", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2429h-algebraic-gems": [
    {
      session: "Winter",
      display: "M 13-15",
      slots: [{ day: "M", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2431h-ai-in-medicine": [
    {
      session: "Winter",
      display: "W 10-12",
      slots: [{ day: "W", startHour: 10, endHour: 12 }],
    },
  ],
  "csc2501h-computational-linguistics": [
    {
      session: "Fall",
      display: "M 12-13, W 12-13, F 12-13",
      slots: [
        { day: "M", startHour: 12, endHour: 13 },
        { day: "W", startHour: 12, endHour: 13 },
        { day: "F", startHour: 12, endHour: 13 },
      ],
    },
  ],
  "csc2502h-knowledge-representation": [
    {
      session: "Fall",
      display: "M 15-17; W 15-16",
      slots: [
        { day: "M", startHour: 15, endHour: 17 },
        { day: "W", startHour: 15, endHour: 16 },
      ],
    },
  ],
  "csc2506h-probabilistic-learning": [
    {
      session: "Fall",
      display: "T 9-11, R 10-11",
      slots: [
        { day: "T", startHour: 9, endHour: 11 },
        { day: "R", startHour: 10, endHour: 11 },
      ],
    },
    {
      session: "Winter",
      display: "M 13-15, F 13-14",
      slots: [
        { day: "M", startHour: 13, endHour: 15 },
        { day: "F", startHour: 13, endHour: 14 },
      ],
    },
  ],
  "csc2511h-natural-language-computing": [
    {
      session: "Winter",
      display: "M 10-11, W 10-11, F 10-11",
      slots: [
        { day: "M", startHour: 10, endHour: 11 },
        { day: "W", startHour: 10, endHour: 11 },
        { day: "F", startHour: 10, endHour: 11 },
      ],
    },
  ],
  "csc2512h-advanced-propositional-reasoning": [
    {
      session: "Winter",
      display: "T 18-20",
      slots: [{ day: "T", startHour: 18, endHour: 20 }],
    },
  ],
  "csc2514h-human-computer-interaction": [
    {
      session: "Winter",
      display: "W 9-12",
      slots: [{ day: "W", startHour: 9, endHour: 12 }],
    },
  ],
  "csc2515h-machine-learning": [
    {
      session: "Winter",
      display: "R 13-15",
      slots: [{ day: "R", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2516h-neural-networks": [
    {
      session: "Fall",
      display: "W 13-15",
      slots: [{ day: "W", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2518h-spoken-language-processing": [
    {
      session: "Winter",
      display: "T 15-17",
      slots: [{ day: "T", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2524h-human-centred-ai": [
    {
      session: "Fall",
      display: "T 9-11",
      slots: [{ day: "T", startHour: 9, endHour: 11 }],
    },
  ],
  "csc2526h-context-aware-computing": [
    {
      session: "Fall",
      display: "M 9-11",
      slots: [{ day: "M", startHour: 9, endHour: 11 }],
    },
  ],
  "csc2527h-business-software": [
    {
      session: "Winter",
      display: "T 10-13",
      slots: [{ day: "T", startHour: 10, endHour: 13 }],
    },
  ],
  "csc2529h-computational-imaging": [
    {
      session: "Fall",
      display: "W 10-12",
      slots: [{ day: "W", startHour: 10, endHour: 12 }],
    },
  ],
  "csc2530h-computational-imaging-3d": [
    {
      session: "Winter",
      display: "M 16-18",
      slots: [{ day: "M", startHour: 16, endHour: 18 }],
    },
  ],
  "csc2532h-statistical-learning-theory": [
    {
      session: "Winter",
      display: "F 16-18",
      slots: [{ day: "F", startHour: 16, endHour: 18 }],
    },
  ],
  "csc2537h-information-visualization": [
    {
      session: "Fall",
      display: "R 13-15",
      slots: [{ day: "R", startHour: 13, endHour: 15 }],
    },
    {
      session: "Winter",
      display: "W 11-13",
      slots: [{ day: "W", startHour: 11, endHour: 13 }],
    },
  ],
  "csc2539h-physics-informed-visual-computing": [
    {
      session: "Fall",
      display: "W 13-15",
      slots: [{ day: "W", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2541h-learning-theory": [
    {
      session: "Winter",
      display: "T 13-15",
      slots: [{ day: "T", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2545h-geometric-deep-learning": [
    {
      session: "Fall",
      display: "T 15-17",
      slots: [{ day: "T", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2555h-algorithmic-fairness": [
    {
      session: "Summer",
      display: "T 10-12",
      slots: [{ day: "T", startHour: 10, endHour: 12 }],
    },
    {
      session: "Winter",
      display: "W 13-15",
      slots: [{ day: "W", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2558h-technology-abuse": [
    {
      session: "Winter",
      display: "M 13-15",
      slots: [{ day: "M", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2600h-algorithmic-social-systems": [
    {
      session: "Fall",
      display: "W 13-15",
      slots: [{ day: "W", startHour: 13, endHour: 15 }],
    },
  ],
  "csc2600h-csc491-capstone": [
    {
      session: "Winter",
      display: "R 18-21",
      slots: [{ day: "R", startHour: 18, endHour: 21 }],
    },
  ],
  "csc2611h-semantic-change": [
    {
      session: "Winter",
      display: "F 11-13",
      slots: [{ day: "F", startHour: 11, endHour: 13 }],
    },
  ],
  "csc2626h-imitation-learning-robotics": [
    {
      session: "Fall",
      display: "R 15-17",
      slots: [{ day: "R", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2631h-mobile-digital-health": [
    {
      session: "Fall",
      display: "W 15-17",
      slots: [{ day: "W", startHour: 15, endHour: 17 }],
    },
  ],
  "csc2508h-advanced-data-systems": [
    {
      session: "Fall",
      display: "M 9-11",
      slots: [{ day: "M", startHour: 9, endHour: 11 }],
    },
  ],
}
