import React from "react";

export const SortOptions = ({ setSort }) => {
  const handleSortAlphaDes = () => {
    setSort("Z-A");
  };
  const handleSortAlphaAsc = () => {
    setSort("A-Z");
  };
  const handleSortDateDes = () => {
    setSort("newest");
  };
  const handleSortDateAsc = () => {
    setSort("oldest");
  };

  return (
    <div className="text-white border-solid border-[1px] bg-black divide-x divide-[1px] divide-platinum">
      <button onClick={handleSortAlphaAsc} className="py-2 px-4 bg-light">
        A — Z
      </button>
      <button onClick={handleSortAlphaDes} className="py-2 px-4 bg-light">
        Z — A
      </button>
      <button onClick={handleSortDateDes} className="py-2 px-4 bg-light">
        Newest
      </button>
      <button onClick={handleSortDateAsc} className="py-2 px-4 bg-light">
        Oldest
      </button>
    </div>
  );
};
