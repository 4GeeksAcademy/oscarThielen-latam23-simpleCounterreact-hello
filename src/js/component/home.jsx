 import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function SimpleCounter(props) {
	return (
	  <div className="timer">
		<div className="d-flex justify-content-evenly align-items-center">
		  <div className="clock">
		  <p style={{ fontSize: "60px", marginBottom: "0", lineHeight: "60px" }}>🕒</p>
		  </div>
		  <div className="sixth count">{props.digitSix}</div>
		  <div className="fith count">{props.digitFive}</div>
		  <div className="fourth count">{props.digitFour}</div>
		  <div className="third count">{props.digitThree}</div>
		  <div className="second count">{props.digitTwo}</div>
		  <div className="first count">{props.digitOne}</div>
		</div>
	  </div>
	);
  }

export default SimpleCounter;
