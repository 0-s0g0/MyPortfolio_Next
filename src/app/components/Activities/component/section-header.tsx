interface SectionHeaderProps {
  title: string
  description: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  )
}
