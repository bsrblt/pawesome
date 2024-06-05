"use client";
import React, { useState } from "react";
import Card from "components/ui/Card";
import { productsData, Product } from "lib/ProductsData";
import ProductFilter from "components/ui/ProductFilter";
import Button from "components/ui/Button";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";

const Products: React.FC = () => {
  const bottomData = bottomSectionData.products;
  const [filters, setFilters] = useState<{
    category: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    sortOrder: "default" | "asc" | "desc";
  }>({
    category: "",
    type: "",
    minPrice: 0,
    maxPrice: 100,
    sortOrder: "default",
  });

  const handleSortChange = (value: string) => {
    let sortOrder: "default" | "asc" | "desc";

    if (value === "Price - High to Low") {
      sortOrder = "desc";
    } else if (value === "Price - Low to High") {
      sortOrder = "asc";
    } else if (value === "Default") {
      sortOrder = "default";
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      sortOrder: sortOrder,
    }));
  };

  const handleFilterChange = (
    filterName: keyof typeof filters,
    value: string | number
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleFilterReset = () => {
    setFilters({
      category: "",
      type: "",
      minPrice: 0,
      maxPrice: 100,
      sortOrder: "default",
    });
  };

  const filteredProducts = productsData
    .filter((product) => {
      const { category, type, minPrice, maxPrice } = filters;
      const matchesCategory = !category || product.Category === category;
      const matchesType = !type || product.type === type;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesType && matchesPrice;
    })
    .sort((a: Product, b: Product) => {
      if (filters.sortOrder === "default") {
        return a.id - b.id;
      } else if (filters.sortOrder === "asc") {
        return a.price - b.price || 0;
      } else if (filters.sortOrder === "desc") {
        return b.price - a.price || 0;
      }
      return 0;
    });

  return (
    <>
      <Background>
        <PageTitle text="Browse Products" />
        <div className="container mx-auto px-4 items-center relative z-10">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center pb-2 bg-turq rounded-xl md:p-1 pt-4 mx-auto mb-8">
              <ProductFilter
                label="Category"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                options={["Dog", "Cat", "Small Pet"]}
              />
              <ProductFilter
                label="Type"
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                options={["Dry", "Wet", "Treat"]}
              />
              <ProductFilter
                label="Min Price"
                value={filters.minPrice}
                onChange={(e) =>
                  handleFilterChange("minPrice", +e.target.value)
                }
                options={[0, 10, 20, 30, 40]}
              />
              <ProductFilter
                label="Max Price"
                value={filters.maxPrice}
                onChange={(e) =>
                  handleFilterChange("maxPrice", +e.target.value)
                }
                options={[50, 40, 30]}
              />
              <ProductFilter
                label="Sort by"
                value={filters.sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
                options={["-", "Price - High to Low", "Price - Low to High"]}
              />

              <span className="my-2 pr-1">
                <Button onClick={handleFilterReset} setWidth={"15rem"}>
                  Reset Filters
                </Button>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default Products;
