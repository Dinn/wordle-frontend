export function WordBoard() {
  // 예시 게임 상태 (실제로는 상태 관리 라이브러리 사용)
  const exampleTiles = [
    [
      { letter: 'H', status: 'absent' }, // 오답
      { letter: 'E', status: 'present' }, // 부분정답
      { letter: 'L', status: 'absent' },
      { letter: 'L', status: 'absent' },
      { letter: 'O', status: 'correct' }, // 정답
    ],
    [
      { letter: 'W', status: 'absent' },
      { letter: 'O', status: 'correct' },
      { letter: 'R', status: 'present' },
      { letter: 'L', status: 'absent' },
      { letter: 'D', status: 'absent' },
    ],
  ]

  const getTileClassName = (status: string) => {
    const baseClass = 'w-14 h-14 border-2 flex items-center justify-center text-xl font-bold uppercase'

    switch (status) {
      case 'correct':
        return `${baseClass} bg-primary-400 border-primary-400 text-white`
      case 'present':
        return `${baseClass} bg-secondary-400 border-secondary-400 text-white`
      case 'absent':
        return `${baseClass} bg-neutral-500 border-neutral-500 text-white`
      default:
        return `${baseClass} bg-white border-neutral-300 text-neutral-900`
    }
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="grid gap-1">
        {exampleTiles.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((tile, tileIndex) => (
              <div key={tileIndex} className={getTileClassName(tile.status)}>
                {tile.letter}
              </div>
            ))}
          </div>
        ))}

        {/* 빈 행들 */}
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div key={rowIndex + 2} className="flex gap-1">
            {Array.from({ length: 5 }).map((_, tileIndex) => (
              <div key={tileIndex} className="w-14 h-14 border-2 border-neutral-300 bg-white" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
