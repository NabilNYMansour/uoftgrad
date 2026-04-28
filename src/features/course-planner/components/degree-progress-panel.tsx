import { Check, Circle } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

import { PROGRAM_EXTERNAL_NOTES, PROGRAMS } from "../constants"
import { progressPercent } from "../progress"
import type { ProgramId, ProgressItem } from "../types"

type DegreeProgressPanelProps = {
  programId: ProgramId
  onProgramChange: (programId: ProgramId) => void
  progress: ProgressItem[]
  selectedCoursesCount: number
}

export function DegreeProgressPanel({
  programId,
  onProgramChange,
  progress,
  selectedCoursesCount,
}: DegreeProgressPanelProps) {
  const selectedProgram =
    PROGRAMS.find((program) => program.id === programId) ?? PROGRAMS[0]

  return (
    <Card className="h-full border-border/80 bg-card/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
      <CardHeader>
        <CardTitle>Degree progress</CardTitle>
        <CardDescription>
          {selectedCoursesCount} selected course
          {selectedCoursesCount === 1 ? "" : "s"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="program">Program or concentration</Label>
          <Select
            id="program"
            value={programId}
            onChange={(event) =>
              onProgramChange(event.target.value as ProgramId)
            }
          >
            {PROGRAMS.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </Select>
          <p className="text-sm text-muted-foreground">
            {selectedProgram.description}
          </p>
        </div>

        <div className="border-t border-border" />

        {progress.map((item) => {
          const isSingleRequirement = item.target === 1
          const isCompleteSingleRequirement =
            isSingleRequirement && item.current >= 1

          return (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="min-w-0">{item.label}</span>
                <span className="flex h-5 min-w-12 items-center justify-end text-muted-foreground">
                  {isSingleRequirement ? (
                    isCompleteSingleRequirement ? (
                      <Check className="size-4 text-foreground" />
                    ) : (
                      <Circle className="size-4" />
                    )
                  ) : (
                    `${Math.min(item.current, item.target)} / ${item.target}`
                  )}
                </span>
              </div>
              {!isSingleRequirement && (
                <div className="h-2 overflow-hidden bg-muted">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${progressPercent(item)}%` }}
                  />
                </div>
              )}
              {item.note && (
                <p className="text-xs text-muted-foreground">{item.note}</p>
              )}
            </div>
          )
        })}
        {PROGRAM_EXTERNAL_NOTES[programId] && (
          <p className="border-t border-border pt-4 text-sm text-muted-foreground">
            {PROGRAM_EXTERNAL_NOTES[programId]}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
