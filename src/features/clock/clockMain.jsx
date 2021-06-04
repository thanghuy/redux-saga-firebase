import React, { useEffect, useState } from "react";

const ClockMain = () => {
  const [time, setTime] = useState(20);
  useEffect(() => {
    const current = setInterval(() => {
      if (time !== 0) {
        const newTime = parseInt(time) - 1;
        setTime(newTime);
      } else {
        return clearInterval(current);
      }
    }, 1000);
    return () => {
      clearInterval(current);
    };
  }, [time]);
  const resetTime = () =>{
      setTime(20);
  }
  const stopTime =()=>{

  }
  return (
    <div>
      Đếm ngược :
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "auto",
          marginTop: "80px",
          border: "5px solid #ffffff",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "38%",
            left: "45%",
            fontSize: "30px",
            color: "white",
            fontWeight : 600
          }}
        >
          {time}
        </span>
      </div>
      <button type="button" onClick={stopTime}>Dừng</button>
      <button type="button" onClick={resetTime}>Làm lại</button>
    </div>
  );
};

export default ClockMain;
