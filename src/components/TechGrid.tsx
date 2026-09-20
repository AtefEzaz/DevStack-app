import type { Technology } from '../types'
import TechCard from './TechCard.tsx'

interface TechGridProps {
  technologies: Technology[]
  stackIds: Set<string>
  onAdd: (tech: Technology) => void
}

export default function TechGrid({ technologies, stackIds, onAdd }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} isAdded={stackIds.has(tech.id)} onAdd={onAdd} />
      ))}
    </div>
  )
}
