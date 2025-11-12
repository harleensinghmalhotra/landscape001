import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
  description?: string;
}

export default function BeforeAfterSlider({ before, after, title, description }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      <div className="relative h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-xl">
        {/* After Image (base layer) */}
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image with clip (overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src={before}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-xl">
            <div className="flex gap-1">
              <ChevronLeft size={16} className="text-brand-primary sm:w-5 sm:h-5" />
              <ChevronRight size={16} className="text-brand-primary sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold text-xs sm:text-sm">
          BEFORE
        </div>
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-brand-primary text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-semibold text-xs sm:text-sm">
          AFTER
        </div>

        {/* Slider input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
    </div>
  );
}
