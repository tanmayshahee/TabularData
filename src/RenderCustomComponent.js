import React from "react";
import "./scss/render-custom.scss";
const RenderCustomComponent = ({ values }) => {
  const paintCargoList = () => {
    let cargoList = [];
    values.forEach((item) => {
      cargoList.push(
        <div className="cargo-list">
          {item.type && (
            <div>
              Type: <span>{item.type}</span>{" "}
            </div>
          )}
          {item.value && (
            <div>
              Value: <span>{item.value}</span>{" "}
            </div>
          )}
          {item.description && (
            <div>
              Description: <span>{item.description}</span>
            </div>
          )}
          {item.volume && (
            <div>
              Volume: <span>{item.volume}</span>
            </div>
          )}
        </div>
      );
    });
    return cargoList;
  };
  return paintCargoList();
};

export default RenderCustomComponent;
