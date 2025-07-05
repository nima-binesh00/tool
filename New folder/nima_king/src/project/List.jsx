import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Addalldata } from "../Stors/reducer";
function Addlist({ data, Add }) {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  return (
    <div className="card p-3 mb-3 shadow border-2" id={id}>
      <div
        className="d-flex align-items-center justify-content-between flex-wrap"
        key={id}
      >
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt={company}
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <div className="d-flex gap-2 align-items-center">
              <strong>{company}</strong>
              {data.new && <span className="badge bg-primary">NEW!</span>}
              {featured && <span className="badge bg-dark">FEATURED</span>}
            </div>
            <h5 className="mt-1">{position}</h5>
            <div className="text-muted small">
              {postedAt} • {contract} • {location}
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2 d-none d-md-flex">
          {[...languages, ...tools, role, level].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                Add(tag);
              }}
              className="btn btn-outline-secondary btn-sm"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-2 w-100 mt-2 border-top pt-2 d-md-none">
          {[role, level, ...languages, ...tools].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                Add(tag);
              }}
              className="btn btn-outline-secondary btn-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function List({ Data, filter, Add }) {
  const Datastor = useSelector((card) => card.num.Card);
  console.log(Datastor);

  return (
    <section className="w-75  mt-5" style={{ height: "600px" }}>
      {Datastor.map((item) => {
        const { role, languages, level } = item;
        const boolan = filter.every((filterTag) => {
          const fillt = [role, ...languages, level].some(
            (num1) => num1 == filterTag
          );
          return fillt;
        });
        console.log(boolan);
        if (filter.length != 0) {
          return boolan && <Addlist data={item} Add={Add} />;
        } else return <Addlist data={item} Add={Add} />;
      })}
    </section>
  );
}
