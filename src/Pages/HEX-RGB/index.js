import React, { useState } from "react";
import "./style.css";

const HexRgb = () => {
  const [hexCode, setHexCode] = useState("");
  const [rgbCode, setRgbCode] = useState("");
  const [validColor, setValidColor] = useState("#141359");

  // PODE SER FEITO USANDO REGEX
  const checkHexKeys = (hex) => {
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
          setRgbCode("Algo errado!");
          return false;
        }
      }
    }
    return true;
  };

  const numberToHex = (num) => {
    return num.toString(16);
  };

  const hexToNumber = (hex) => {
    return parseInt(hex, 16);
  };

  const setRGB = (hex) => {
    let R, G, B;
    R = hexToNumber(hex[0] + hex[1]);
    G = hexToNumber(hex[2] + hex[3]);
    B = hexToNumber(hex[4] + hex[5]);
    setRgbCode("rgb(" + R + "," + G + "," + B + ")");
  };

  const handleChangeHex = (event) => {
    let hex = event.target.value;
    setHexCode(hex.toUpperCase());

    if (hex.length === 7 && hex[0] === "#") {
      hex = hex.substring(1, hex.length);
      if (checkHexKeys(hex)) {
        setRGB(hex);
        setValidColor("#" + hex);
      }
    } else {
      setRgbCode("Algo errado!");
    }
  };

  const handleChangeRgb = (event) => {
    let R, G, B;
    const rgb = event.target.value;
    const regex = /rgb[(](\d{1,3})[,](\d{1,3})[,](\d{1,3})[)]/;
    setRgbCode(rgb);

    if (regex.test(rgb)) {
      const firstCommaIndex = rgb.split("").indexOf(",");
      const secondCommaIndex = rgb.split("").lastIndexOf(",");

      R = parseInt(rgb.substring(4, firstCommaIndex));
      G = parseInt(rgb.substring(firstCommaIndex + 1, secondCommaIndex));
      B = parseInt(rgb.substring(secondCommaIndex + 1, rgb.length - 1));

      if ([R, G, B].find((num) => num < 0 || num > 255) === undefined) {
        setHexCode("#" + numberToHex(R) + numberToHex(G) + numberToHex(B));
        setValidColor(rgb);
      } else {
        setHexCode("Algo errado!");
      }
    } else {
      setHexCode("Algo errado!");
    }
  };

  return (
    <div className="hexRgb-container" style={{ backgroundColor: validColor }}>
      <h1> CONVERSOR </h1>
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
