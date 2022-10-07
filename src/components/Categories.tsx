import { useSelector } from "react-redux";

import { selectFilters } from "../redux/filters/selectors";
import { setCategory, setSearchValue } from "../redux/filters/slice";
import { useAppDispatch } from "../redux/store";

const categoryNames = ["All", "Mountains", "Sea", "Architecture", "Cities"];

export const Categories = () => {
  const { categoryIndex, searchValue } = useSelector(selectFilters);
  const dispatch = useAppDispatch();

  return (
    <div className="top">
      <ul className="tags">
        {categoryNames.map((category, index) => (
          <li
            key={index}
            className={categoryIndex === index ? "active" : ""}
            onClick={() => dispatch(setCategory(index))}
          >
            {category}
          </li>
        ))}
      </ul>
      <input
        className="search-input"
        placeholder="Search by name"
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
      />
    </div>
  );
};
