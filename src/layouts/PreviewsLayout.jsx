import { useState } from "react";
import Fuse from 'fuse.js';
import { Preview } from "../components/PreviewPodcast";
import { useSort } from "../hooks/useSort";
import { SortOptions } from "../components/SortOptions";
import { BiSearch, BiLoader } from "react-icons/bi"; // Bootstrap icons

export default function PreviewsLayout(props) {
  const { shows } = props;
  const fuse = new Fuse(shows, {
    keys: ['title'],
  });
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = fuse.search(searchQuery);
  const reducedSearch = searchQuery ? searchResults.map((obj) => obj.item) : shows;

  const [sort, setSort] = useState("none");
  const sortedShows = useSort(reducedSearch, sort);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSort('none');
  };

  if (!sortedShows) {
    return <BiLoader className="animate-spin text-dark-gray text-6xl py-12" />;
  }

  const allPreviews = sortedShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres} />;
  });

  return (
    <section className="bg-platinum p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <SortOptions setSort={setSort} />
        <div className="w-[35%] bg-dark-gray relative text-teal text-[0.8em] text">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchQuery}
            className="indent-1 h-[98%] w-[75%] bg-dark-gray absolute right-1 top-0"
          />
          <BiSearch className="absolute left-1 top-2" />
        </div>
      </div>
      {allPreviews}
    </section>
  );
}
