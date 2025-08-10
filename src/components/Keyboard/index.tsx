export function Keyboard() {
  const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  // 예시 키보드 상태 (실제로는 게임 상태에 따라 동적으로 설정)
  const keyStatus: { [key: string]: string } = {
    H: 'absent',
    E: 'present',
    O: 'correct',
    W: 'absent',
    R: 'present',
  }

  const getKeyClassName = (letter: string) => {
    const baseClass =
      'px-3 py-4 rounded font-semibold text-sm min-w-[2.5rem] flex items-center justify-center cursor-pointer transition-colors'

    switch (keyStatus[letter]) {
      case 'correct':
        return `${baseClass} bg-primary-400 text-white`
      case 'present':
        return `${baseClass} bg-secondary-400 text-white`
      case 'absent':
        return `${baseClass} bg-neutral-500 text-white`
      default:
        return `${baseClass} bg-neutral-200 text-neutral-900 hover:bg-neutral-300`
    }
  }

  return (
    <div className="px-4 pb-8">
      <div className="max-w-lg mx-auto">
        {/* 첫 번째 행 */}
        <div className="flex gap-1 justify-center mb-1">
          {topRow.map(letter => (
            <button key={letter} className={getKeyClassName(letter)}>
              {letter}
            </button>
          ))}
        </div>

        {/* 두 번째 행 */}
        <div className="flex gap-1 justify-center mb-1">
          {middleRow.map(letter => (
            <button key={letter} className={getKeyClassName(letter)}>
              {letter}
            </button>
          ))}
        </div>

        {/* 세 번째 행 */}
        <div className="flex gap-1 justify-center">
          <button className="px-4 py-4 rounded font-semibold text-sm bg-neutral-200 text-neutral-900 hover:bg-neutral-300 cursor-pointer">
            ENTER
          </button>
          {bottomRow.map(letter => (
            <button key={letter} className={getKeyClassName(letter)}>
              {letter}
            </button>
          ))}
          <button className="px-4 py-4 rounded font-semibold text-sm bg-neutral-200 text-neutral-900 hover:bg-neutral-300 cursor-pointer">
            ⌫
          </button>
        </div>
      </div>

      {/* 컬러 팔레트 예시 섹션 */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4 text-center">📚 적용된 컬러 팔레트 예시</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Primary Colors */}
          <div>
            <h3 className="font-medium text-primary-600 mb-2">Primary (정답)</h3>
            <div className="space-y-1">
              <div className="bg-primary-400 h-8 rounded flex items-center justify-center text-white text-xs">400</div>
              <div className="bg-primary-500 h-8 rounded flex items-center justify-center text-white text-xs">500</div>
              <div className="bg-primary-600 h-8 rounded flex items-center justify-center text-white text-xs">600</div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <h3 className="font-medium text-secondary-600 mb-2">Secondary (부분정답)</h3>
            <div className="space-y-1">
              <div className="bg-secondary-400 h-8 rounded flex items-center justify-center text-white text-xs">
                400
              </div>
              <div className="bg-secondary-500 h-8 rounded flex items-center justify-center text-white text-xs">
                500
              </div>
              <div className="bg-secondary-600 h-8 rounded flex items-center justify-center text-white text-xs">
                600
              </div>
            </div>
          </div>

          {/* Warning Colors */}
          <div>
            <h3 className="font-medium text-warning-600 mb-2">Warning (경고)</h3>
            <div className="space-y-1">
              <div className="bg-warning-400 h-8 rounded flex items-center justify-center text-white text-xs">400</div>
              <div className="bg-warning-500 h-8 rounded flex items-center justify-center text-white text-xs">500</div>
              <div className="bg-warning-600 h-8 rounded flex items-center justify-center text-white text-xs">600</div>
            </div>
          </div>

          {/* Error Colors */}
          <div>
            <h3 className="font-medium text-error-600 mb-2">Error (오류)</h3>
            <div className="space-y-1">
              <div className="bg-error-400 h-8 rounded flex items-center justify-center text-white text-xs">400</div>
              <div className="bg-error-500 h-8 rounded flex items-center justify-center text-white text-xs">500</div>
              <div className="bg-error-600 h-8 rounded flex items-center justify-center text-white text-xs">600</div>
            </div>
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mt-6">
          <h3 className="font-medium text-neutral-700 mb-2">Accent Colors (강조 색상)</h3>
          <div className="flex gap-2">
            <div className="bg-accent-blue h-10 w-20 rounded flex items-center justify-center text-white text-xs">
              Blue
            </div>
            <div className="bg-accent-purple h-10 w-20 rounded flex items-center justify-center text-white text-xs">
              Purple
            </div>
            <div className="bg-accent-pink h-10 w-20 rounded flex items-center justify-center text-white text-xs">
              Pink
            </div>
            <div className="bg-accent-indigo h-10 w-20 rounded flex items-center justify-center text-white text-xs">
              Indigo
            </div>
            <div className="bg-success h-10 w-20 rounded flex items-center justify-center text-white text-xs">
              Success
            </div>
            <div className="bg-info h-10 w-20 rounded flex items-center justify-center text-white text-xs">Info</div>
          </div>
        </div>
      </div>
    </div>
  )
}
