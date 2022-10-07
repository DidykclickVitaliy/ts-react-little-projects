import React from "react";
import { useSelector } from "react-redux";
import { fetchCollections } from "../redux/collections/asyncActions";
import { selectCollections } from "../redux/collections/selectors";
import { Status } from "../redux/collections/types";
import { selectFilters } from "../redux/filters/selectors";
import { useAppDispatch } from "../redux/store";

export const Collection: React.FC = () => {
  const { items, status, page } = useSelector(selectCollections);
  const { categoryIndex, searchValue } = useSelector(selectFilters);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
    const search = searchValue ? `search=${searchValue}` : "";
    const currentPage = page;

    dispatch(fetchCollections({ category, search, currentPage }));
  }, [categoryIndex, searchValue, page]);

  return (
    <>
      {status === Status.LOADING ? (
        <h1>Loading....</h1>
      ) : (
        items.map((item, index) => {
          return (
            <div
              key={item.name + index * item.category + item.photos[3]}
              className="collection"
            >
              <img
                className="collection__big"
                src={item.photos[0]}
                alt="Item"
              />
              <div className="collection__bottom">
                <img
                  className="collection__mini"
                  src={item.photos[1]}
                  alt="Item"
                />
                <img
                  className="collection__mini"
                  src={item.photos[2]}
                  alt="Item"
                />
                <img
                  className="collection__mini"
                  src={item.photos[3]}
                  alt="Item"
                />
              </div>
              <h4>{item.name}</h4>
            </div>
          );
        })
      )}
    </>
  );
};
