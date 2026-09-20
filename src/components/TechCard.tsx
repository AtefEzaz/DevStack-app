import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {badge && (
        <span className="absolute top-4 right-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-600">
          {badge}
        </span>
      )}

      <img
        src={icon}
        alt={name}
        className="w-12 h-12 object-contain mb-4"
        loading="lazy"
      />

      <h3 className="font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 mt-1 flex-1">{description}</p>

      <div className="flex items-center flex-wrap gap-2 mt-4 text-xs">
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
          {category}
        </span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
          {difficulty}
        </span>
        <span className="px-2 py-1 rounded-full bg-yellow-50 text-yellow-700 font-medium flex items-center gap-1">
          ★ {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2 rounded-full text-sm font-semibold transition-opacity ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
