import React from "react";

export default ({ model, modelLink }) =>
  model ? (
    <ul>
      <li>
        { modelLink }
      </li>
      <li>{model.price}</li>
      <li>
        <img width={400} src={model.imageUrl} alt={model.imageUrl} />
      </li>
    </ul>
  ) : (
    <div>Not Found</div>
  );
