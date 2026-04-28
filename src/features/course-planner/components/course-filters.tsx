import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CATEGORIES, GROUP_DETAILS, TAGS } from "@/data/courses"

import type { Filters } from "../types"
import { FilterSelect } from "./filter-select"

type CourseFiltersProps = {
  filters: Filters
  onUpdateFilter: <FilterKey extends keyof Filters>(
    filter: FilterKey,
    value: Filters[FilterKey]
  ) => void
  onResetFilters: () => void
}

export function CourseFilters({
  filters,
  onUpdateFilter,
  onResetFilters,
}: CourseFiltersProps) {
  return (
    <Card className="border-border/80 bg-card/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/20">
      <CardContent className="space-y-4">
        <div className="grid items-end gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="search"
                value={filters.query}
                onChange={(event) =>
                  onUpdateFilter("query", event.target.value)
                }
                placeholder="Search by code, title, or description"
                className="h-10 bg-background/80 pl-9"
              />
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onResetFilters}
            className="h-10 w-fit bg-background/70 px-3 text-muted-foreground hover:text-foreground"
            disabled={
              filters.query === "" &&
              filters.groups.length === 0 &&
              filters.categories.length === 0 &&
              filters.tags.length === 0
            }
          >
            Clear all
          </Button>
        </div>

        <div className="grid items-end gap-4 md:grid-cols-3">
          <FilterSelect
            id="groups"
            label="Group"
            allLabel="All groups"
            value={filters.groups}
            options={Object.keys(GROUP_DETAILS)}
            onChange={(value) => onUpdateFilter("groups", value)}
          />
          <FilterSelect
            id="categories"
            label="Category"
            allLabel="All categories"
            value={filters.categories}
            options={CATEGORIES}
            onChange={(value) => onUpdateFilter("categories", value)}
          />
          <FilterSelect
            id="tags"
            label="Tag"
            allLabel="All tags"
            value={filters.tags}
            options={TAGS}
            onChange={(value) => onUpdateFilter("tags", value)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
