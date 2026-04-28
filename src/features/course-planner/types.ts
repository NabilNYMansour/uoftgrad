export type ProgramId =
  | "msc"
  | "phd"
  | "phdu"
  | "mscac-cs"
  | "mscac-applied-math"
  | "mscac-ai"
  | "mscac-healthcare"
  | "mscac-data-science"
  | "mscac-biology"
  | "mscac-quantum"

export type Filters = {
  query: string
  groups: string[]
  categories: string[]
  tags: string[]
}

export type Program = {
  id: ProgramId
  name: string
  description: string
}

export type ProgressItem = {
  label: string
  current: number
  target: number
  note?: string
}
