import React from "react";
import "./style.css";
import slug from "slug";

const Literature = () => {
  const data = [
    {
      id: 1,
      title: "The Alchemist",
      writer: "Sahib Singh",
      img: "https://picsum.photos/400/500",
    },
    {
      id: 2,
      title: "The Alchemist",
      writer: "Sahib Singh",
      img: "https://picsum.photos/400/500",
    },
    {
      id: 3,
      title: "The Alchemist",
      writer: "Sahib Singh",
      img: "https://picsum.photos/400/500",
    },
  ];
  return (
    <>
      <div className="literaturePage minHeight">
        <div className="container">
          <h1 className="my-3 text-center py-3 headColor">
            Writings from NITJ{" "}
          </h1>

          <div className="row">
            {data.map((item) => {
              let ID = slug(item.title + item.writer + item.id);
              return (
                <>
                  <div
                    key={item.id}
                    id={ID}
                    className="writings col-md-4 col-sm-6 col-12 mb-5"
                  >
                    <div className="card border-0 shadow-sm p-4">
                      <img src={item.img} alt={item.title} />
                      <h5 className="text-end mt-3">- {item.writer}</h5>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Literature;
