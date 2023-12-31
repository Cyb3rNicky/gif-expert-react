import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Berserk"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // setCategories(categories.concat("Vinland Saga"));
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />
      
        {
          categories.map((category) => (
            <GifGrid 
                key={category} 
                category={category} />
          ))
        }
    </>
  );
};
