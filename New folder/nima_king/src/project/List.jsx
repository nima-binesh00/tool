import React from "react";
function Addlist({ data }) {
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
    <div className="card p-3 mb-3 shadow border-2" key={id}>
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
          {role && (
            <button className="btn btn-outline-secondary btn-sm">{role}</button>
          )}
          {level && (
            <button className="btn btn-outline-secondary btn-sm">
              {level}
            </button>
          )}
          {[...languages, ...tools].map((tag) => (
            <button key={tag} className="btn btn-outline-secondary btn-sm">
              {tag}
            </button>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-2 w-100 mt-2 border-top pt-2 d-md-none">
          {[role, level, ...languages, ...tools].map((tag) => (
            <button key={tag} className="btn btn-outline-secondary btn-sm">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function List({ Data, filter }) {
  return (
    <section className="w-75  mt-5" style={{ height: "600px" }}>
      {Data.map((item) => {
        const { role, languages } = item;
        const boolan = filter.some((item) => {
          const fillt = [role, ...languages].some((num1) => num1 == item);
          return fillt;
        });
        console.log(boolan);

        return !boolan && <Addlist data={item} />;
      })}
    </section>
  );
}
