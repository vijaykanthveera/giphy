import React from "react";

const Paginator = (props) => {

  const pageNumbers = [];
  const len = Math.ceil(props.totalItems / props.itemsPerPage);
  for (var iter = 1; iter <= len; iter++) {
    pageNumbers.push(iter);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((item,index) => {
          return (
            <li className="pageName" key={index}>
              <a
                style={{ color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  props.pageSelect(item);
                }}
                href="!#"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginator;
