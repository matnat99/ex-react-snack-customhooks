import { useState } from "react";

export default function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    setIsOn((curr) => {
      console.log(
        "Toggle premuto. Stato precedente:",
        curr,
        "Nuovo stato:",
        !curr
      );
      return !curr;
    });
  };

  return [isOn, toggle];
}
