import React from "react";

interface NutritionValuesProps {
  nutritionValues: { [key: string]: string };
}

const NutritionValues: React.FC<NutritionValuesProps> = ({
  nutritionValues,
}) => (
  <div className="container mx-auto mt-3 flex flex-col md:flex-row gap-4 md:mb-0 mb-6">
    <div className="flex-1 bg-white rounded-lg p-6 shadow-sh">
      <h2 className="text-2xl font-bold">Nutrition Values</h2>
      <ul>
        {Object.entries(nutritionValues).map(([name, value], index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{name}: </span>
            {value}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default NutritionValues;
