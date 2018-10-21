import { map } from "ramda";
import React from "react";

export default ({ makes, selectedMake, handleSelectMake }) => (
  <select value={selectedMake} onChange={handleSelectMake}>
    <option value="">Select make</option>
    {map(({ id, name }) => <option key={id} value={id}>{name}</option>)(makes)}
  </select>
);
