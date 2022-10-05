import React from "react";
import { useSelector } from "react-redux";
import { fetchCollections } from "../redux/collections/asyncActions";
import { selectCollections } from "../redux/collections/selectors";
import { useAppDispatch } from "../redux/store";

export const Collection: React.FC = () => {
  const { items } = useSelector(selectCollections);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={item.name + index * item.category + item.photos[3]}
            className="collection"
          >
            <img className="collection__big" src={item.photos[0]} alt="Item" />
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
      })}
    </>
  );
};
