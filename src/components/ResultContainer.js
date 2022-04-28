import React from "react";
import ImageContainer from "./ImageContainer";

const ResultsContainer = (props) => {
  return (
    <div className="search-results">
      <ul data-testid="listholder" className="flexy-container">
        {props.currentItems.map((item) => {
          return (
            <li
              data-testid="listitem"
              className="flexy-item"
              key={item.id}
              id={item.id}
            >
              {
                <ImageContainer
                  item={item}
                  clickHandler={props.handleItemClick}
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(ResultsContainer);
