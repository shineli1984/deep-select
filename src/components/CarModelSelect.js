import { map } from "ramda";
import React from "react";

export default ({ models, selectedModel, handleSelectModel }) => (
  <select value={selectedModel} onChange={handleSelectModel} disabled={models.length === 0}>
    <option value="">Select make</option>
    {map(({ id, name }) => <option key={id} value={id}>{name}</option>)(models)}
  </select>
);
