import { ChevronDown, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

export type FilterSelectProps = {
  id: string
  label: string
  allLabel: string
  value: string[]
  options: string[]
  onChange: (value: string[]) => void
}

export function FilterSelect({
  id,
  label,
  allLabel,
  value,
  options,
  onChange,
}: FilterSelectProps) {
  const selectedLabel =
    value.length === 0 ? allLabel : `${value.length} selected`
  const buttonLabel =
    value.length === 0
      ? allLabel
      : value.length <= 2
        ? value.join(", ")
        : `${value.slice(0, 2).join(", ")} +${value.length - 2}`

  const toggleOption = (option: string) => {
    onChange(
      value.includes(option)
        ? value.filter((selectedOption) => selectedOption !== option)
        : [...value, option]
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-xs text-muted-foreground">{selectedLabel}</span>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            role="combobox"
            className="h-10 w-full justify-between bg-background/80 px-3 font-normal"
          >
            <span className="truncate">{buttonLabel}</span>
            <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-(--radix-popover-trigger-width) p-0"
        >
          <Command>
            <CommandInput placeholder={`Search ${label.toLowerCase()}s...`} />
            <CommandList>
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = value.includes(option)

                  return (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => toggleOption(option)}
                    >
                      <Checkbox
                        checked={isSelected}
                        className="pointer-events-none"
                      />
                      <span className="truncate">{option}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
            {value.length > 0 && (
              <div className="border-t p-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onChange([])}
                  className="w-full justify-center text-muted-foreground"
                >
                  <X className="size-3.5" />
                  Clear {label.toLowerCase()}s
                </Button>
              </div>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
