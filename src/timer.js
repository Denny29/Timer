import { useState } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  setInterval(setSec(sec + 1), 1000);

  return (
    <h1>
      {hour},{min},{sec}
    </h1>
  );
}
