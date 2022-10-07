import { useSelector } from "react-redux";
import { selectCollections } from "../redux/collections/selectors";
import { setPage } from "../redux/collections/slice";
import { useAppDispatch } from "../redux/store";

export const Pagination = () => {
  const { page } = useSelector(selectCollections);
  const dispatch = useAppDispatch();

  return (
    <ul className="pagination">
      {[...Array(3)].map((_, index) => {
        return (
          <li
            key={index}
            className={page === index + 1 ? "active" : ""}
            onClick={() => dispatch(setPage(index + 1))}
          >
            {index + 1}
          </li>
        );
      })}
    </ul>
  );
};
