import React from "react";
import List from "./List";
import Data from "../../../Homework-APS-pre-redux-toolkit/data.json";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Addalldata } from "../Stors/reducer";
function Art({ name, onclear }) {
  return (
    <>
      {name.map((n, index) => (
        <article
          key={index}
          className="art-item d-flex justify-content-between align-items-center m-2"
          style={{
            height: "60%",
            width: "15%",
            backgroundColor: "hsla(180, 9.40%, 72.70%, 0.51)",
          }}
        >
          <span
            style={{
              color: "hsl(180, 77.20%, 15.50%)",
              textAlign: "center",
              width: "70%",
            }}
          >
            {n}
          </span>
          <button
            onClick={() => onclear(n)}
            type="button"
            className="btn-close w-25  hover-b hoverpo "
            aria-label="Close"
          ></button>
        </article>
      ))}
      <a
        className="text-end w-50 p-3 hoverpo"
        onClick={() => onclear("null")}
        style={{ cursor: "pointer" }}
      >
        clear
      </a>
    </>
  );
}

export default function Main() {
  const [item, setitem] = useState([]);
  const dispach = useDispatch();
  dispach(Addalldata(Data));
  // console.log(Data);

  console.log(item);
  return (
    <section className="d-flex w-100 flex-column align-items-center">
      <section
        className="w-100 "
        style={{ height: "150px", backgroundColor: "hsl(180, 29%, 50%)" }}
      ></section>
      {item.length != 0 && (
        <section
          className="ps-4 w-75 shadow-drop d-flex justify-content-start align-items-center flex-wrap "
          style={{
            margin: "-20px",
            height: "fit-content",
            backgroundColor: "white",
            justifySelf: "center",
          }}
        >
          <Art
            name={item}
            onclear={(name) => {
              name != "null"
                ? setitem(item.filter((item) => item != name))
                : setitem([]);
            }}
          />
        </section>
      )}
      <List
        Data={Data}
        filter={item}
        Add={(name) => {
          const bool = item.some((item) => item == name);
          !bool && setitem((item) => [...item, name]);
        }}
      />
    </section>
  );
}
