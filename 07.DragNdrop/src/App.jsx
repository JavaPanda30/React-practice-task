import { useState } from "react";
import {Reorder} from 'framer-motion'

// Framer Motion

export default function App() {

  const [listItems, setListItems] = useState(["Aman","Suyash","Pandey"]);

  return (
    <Reorder.Group axis="y" onReorder={setListItems} values={listItems}>
      {listItems.map((el) => (
        <Reorder.Item key={el} value={el}>
          <span>{el}</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}