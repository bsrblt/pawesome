import React from "react";

interface ProductFilterProps {
  label: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  options: (string | number)[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex mb-4 md:mb-0 px-4 items-center justify-center">
      <span className="md:w-auto w-[6rem]">
        <label
          htmlFor={label.toLowerCase()}
          className="mr-2 text-lemonlight text-md font-semibold"
        >
          {label}:
        </label>
      </span>
      <span>
        <select
          id={label.toLowerCase()}
          onChange={onChange}
          value={value as string}
          className="border border-turq rounded px-2 py-1 text-darkpur bg-white/20 md:w-auto w-[7rem]"
        >
          {label === "Min Price" ||
          label === "Max Price" ||
          label === "Sort by" ? null : (
            <option value="">All</option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {label === "Sort by" && <option>Default</option>}
        </select>
      </span>
    </div>
  );
};

export default ProductFilter;
