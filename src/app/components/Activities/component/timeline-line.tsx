export function TimelineLine() {
  return (
    <>
      {/* タイムライン縦線 */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
      {/* タイムライン終端 */}
      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent"></div>
    </>
  )
}
