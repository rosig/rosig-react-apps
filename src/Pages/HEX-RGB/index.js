import React, { useState } from "react";
import "./style.css";

const HexRgb = () => {
  const [hexCode, setHexCode] = useState("");
  const [rgbCode, setRgbCode] = useState("");

  // PODE SER FEITO USANDO REGEX
  const checkHexKeys = hex => {
    const hexKeys = ["A", "B", "C", "D", "E", "F"];
    for (const item of hex) {
      if (isNaN(item)) {
        let itemIsValid = false;
        for (const key of hexKeys) {
          if (item.toUpperCase() === key) {
            itemIsValid = true;
            break;
          }
        }
        if (!itemIsValid) {
          setRgbCode("Hexadecimal inválido!");
          return false;
        }
      }
    }
    return true;
  };

  // const numberToHex = num => {
  //   return num.toString(16);
  // };

  const hexToNumber = hex => {
    return parseInt(hex, 16);
  };

  const setRGB = hex => {
    let R, G, B;
    R = hexToNumber(hex[0] + hex[1]);
    G = hexToNumber(hex[2] + hex[3]);
    B = hexToNumber(hex[4] + hex[5]);
    setRgbCode("rgb(" + R + "," + G + "," + B + ")");
  };

  const handleChangeHex = event => {
    let hex = event.target.value;
    setHexCode(hex.toUpperCase());

    if (hex.length === 6) {
      if (checkHexKeys(hex)) {
        setRGB(hex);
      }
    } else if (hex.length === 7 && hex[0] === "#") {
      hex = hex.substring(1, hex.length);
      if (checkHexKeys(hex)) {
        setRGB(hex);
      }
    } else {
      setRgbCode("-");
    }
  };

  const handleChangeRgb = event => {
    const rgb = event.target.value;
    setRgbCode(rgb);
  };

  return (
    <div className="hexRgb-container" style={{ backgroundColor: rgbCode }}>
      <h1> CONVERSOR [INCOMPLETO] </h1>
      <div className="hex-wrapper">
        <label htmlFor="input-hex">HEX</label>
        <input
          id="input-hex"
          type="text"
          placeholder="#FFFFFF"
          value={hexCode}
          onChange={handleChangeHex}
        />
      </div>

      <div className="rgb-wrapper">
        <label htmlFor="input-rgb">RGB</label>
        <input
          id="input-rgb"
          type="text"
          placeholder="rgb(255, 255, 255)"
          value={rgbCode}
          onChange={handleChangeRgb}
        />
      </div>
    </div>
  );
};

export default HexRgb;
