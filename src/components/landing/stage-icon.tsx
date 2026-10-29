import { AwardIcon, FileTextIcon, FolderCheckIcon, GaugeIcon, MapIcon, ScaleIcon } from "lucide-react"

const icons = {
  plan: MapIcon,
  bid: FileTextIcon,
  evaluate: ScaleIcon,
  award: AwardIcon,
  manage: GaugeIcon,
  close: FolderCheckIcon,
} as const

export function StageIcon({ id, className }: { id: string; className?: string }) {
  const Icon = icons[id as keyof typeof icons] ?? MapIcon
  return <Icon aria-hidden="true" strokeWidth={1.8} className={className} />
}
