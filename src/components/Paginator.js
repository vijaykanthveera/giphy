import React,{useEffect} from "react";

const Paginator = (props) => {
  useEffect(() => {
    //console.log("use effect called in search form");
  });

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
