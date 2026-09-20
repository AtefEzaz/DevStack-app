import type { Technology } from '../types'

interface YourStackProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24 h-fit">
      <h3 className="font-bold text-gray-900 text-lg">Your Stack</h3>
      <p className="text-sm text-gray-400 mt-1">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none px-1"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 w-full py-2 rounded-full border border-pink-200 text-pink-600 font-semibold text-sm hover:bg-pink-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}
