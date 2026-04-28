import { useMemo } from "react"

import { DegreeProgressPanel } from "@/features/course-planner/components/degree-progress-panel"
import { HeroSection } from "@/features/course-planner/components/hero-section"
import { PlannerLayout } from "@/features/course-planner/components/planner-layout"
import { RemainingCoursesSection } from "@/features/course-planner/components/remaining-courses-section"
import { SelectedCoursesPanel } from "@/features/course-planner/components/selected-courses-panel"
import {
  INITIAL_FILTERS,
  STORAGE_KEY,
} from "@/features/course-planner/constants"
import { filterCourses } from "@/features/course-planner/filtering"
import { getProgress } from "@/features/course-planner/progress"
import type { Filters, ProgramId } from "@/features/course-planner/types"
import { COURSES } from "@/data/courses"
import { useStoredState } from "@/hooks/useStoredState"

function getStoredFilterList(value: unknown) {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string")
  }

  if (typeof value === "string" && value !== "all") {
    return [value]
  }

  return []
}

function normalizeFilters(filters: Filters): Filters {
  const storedFilters = filters as Filters & {
    group?: unknown
    category?: unknown
    tag?: unknown
  }

  return {
    query: typeof storedFilters.query === "string" ? storedFilters.query : "",
    groups: getStoredFilterList(storedFilters.groups ?? storedFilters.group),
    categories: getStoredFilterList(
      storedFilters.categories ?? storedFilters.category
    ),
    tags: getStoredFilterList(storedFilters.tags ?? storedFilters.tag),
  }
}

function App() {
  const [programId, setProgramId] = useStoredState<ProgramId>(
    `${STORAGE_KEY}:program`,
    "msc"
  )
  const [filters, setFilters] = useStoredState<Filters>(
    `${STORAGE_KEY}:filters`,
    INITIAL_FILTERS
  )
  const [selectedIds, setSelectedIds] = useStoredState<string[]>(
    `${STORAGE_KEY}:selected`,
    []
  )

  const selectedIdSet = useMemo(() => new Set(selectedIds), [selectedIds])
  const selectedCourses = useMemo(
    () => COURSES.filter((course) => selectedIdSet.has(course.id)),
    [selectedIdSet]
  )
  const progress = getProgress(programId, selectedCourses)
  const normalizedFilters = useMemo(() => normalizeFilters(filters), [filters])

  const filteredCourses = useMemo(
    () => filterCourses(COURSES, normalizedFilters),
    [normalizedFilters]
  )
  const remainingCourses = useMemo(
    () => filteredCourses.filter((course) => !selectedIdSet.has(course.id)),
    [filteredCourses, selectedIdSet]
  )

  const updateFilter = <FilterKey extends keyof Filters>(
    filter: FilterKey,
    value: Filters[FilterKey]
  ) => {
    setFilters((currentFilters) => ({
      ...normalizeFilters(currentFilters),
      [filter]: value,
    }))
  }

  const toggleCourse = (courseId: string) => {
    setSelectedIds((currentIds) =>
      currentIds.includes(courseId)
        ? currentIds.filter((id) => id !== courseId)
        : [...currentIds, courseId]
    )
  }

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS)
  }

  return (
    <PlannerLayout>
      <HeroSection />

      <section className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <SelectedCoursesPanel
          programId={programId}
          selectedCourses={selectedCourses}
          selectedIdsCount={selectedIds.length}
          onClearSelection={() => setSelectedIds([])}
          onToggleCourse={toggleCourse}
        />
        <DegreeProgressPanel
          programId={programId}
          onProgramChange={setProgramId}
          progress={progress}
          selectedCoursesCount={selectedCourses.length}
        />
      </section>

      <RemainingCoursesSection
        filters={normalizedFilters}
        remainingCourses={remainingCourses}
        totalCoursesCount={COURSES.length}
        onUpdateFilter={updateFilter}
        onResetFilters={resetFilters}
        onToggleCourse={toggleCourse}
      />
    </PlannerLayout>
  )
}

export default App
