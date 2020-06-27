import React, { useState } from "react";
import "./Calculator.css";

const Keys = props => {
  return props.keys.map(key => (
    <div
      className="calc-key"
      key={key}
      onClick={() => props.handleKeyClick(key)}
    >
      {" "}
      {key}
    </div>
  ));
};

const Calculator = () => {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const operations = ["+", "-", "*", "/"];
  const keys = [9, 8, 7, "/", 6, 5, 4, "*", 3, 2, 1, "+", 0, "C", "=", "-"];

  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");

  const check_operator = expr => {
    const expr_len = expr.length;

    for (let op of operations) {
      for (let i = expr_len; i !== 0; i--) {
        const pos = expr.lastIndexOf(op, i - 1);

        if (pos !== -1) {
          if (
            !(
              (op === "+" || op === "-") &&
              (pos === 0 || expr[pos - 1] === "*" || expr[pos - 1] === "/")
            )
          ) {
            return {
              op: op,
              pos: pos,
              len: expr.length
            };
          }
        }
      }
    }
  };

  const handle_expr = expr => {
    if (isNaN(expr)) {
      const res = check_operator(expr);
      const subExpr_left = expr.substring(0, res.pos);
      const subExpr_right = expr.substring(res.pos + 1, res.len);
      const left_res = handle_expr(subExpr_left);
      const right_res = handle_expr(subExpr_right);

      switch (res.op) {
        case "*":
          return left_res * right_res;
        case "/":
          return left_res / right_res;
        case "+":
          return left_res + right_res;
        case "-":
          return left_res - right_res;
        default:
          return;
      }
    } else {
      return parseInt(expr);
    }
  };

  const actions = {
    addNumber(key) {
      setExpr(expr + key);
    },
    deleteKey() {
      setExpr(expr.substring(0, expr.length - 1));
    },
    clear() {
      setExpr("");
    },
    addMulDivSum(key) {
      if (expr.length !== 0 && operations.indexOf(expr[expr.length - 1]) === -1)
        setExpr(expr + key);
    },
    addSub(key) {
      if (["+", "-"].indexOf(expr[expr.length - 1]) === -1) setExpr(expr + key);
    },
    equalKey() {
      if (operations.indexOf(expr[expr.length - 1]) !== -1) {
        const newExpr = expr.substring(0, expr.length - 1);
        const res = handle_expr(newExpr);
        setExpr(newExpr);
        setResult(res);
      } else {
        const res = handle_expr(expr);
        setResult(res);
      }
    }
  };

  const handleKeyClick = key => {
    if (numbers.indexOf(key) !== -1) actions.addNumber(key);
    else if (key === "C") actions.clear();
    else if (key === "<") actions.deleteKey();
    else if (key === "*") actions.addMulDivSum(key);
    else if (key === "/") actions.addMulDivSum(key);
    else if (key === "+") actions.addMulDivSum(key);
    else if (key === "-") actions.addSub(key);
    else if (key === "=") actions.equalKey(key);
  };

  return (
    <div className="calc-container">
      <div className="calc-wrapper">
        <div className="calc-screen">
          <div className="calc-expr">
            <span>{expr}</span>
          </div>
          <div className="calc-result">
            <div className="screen-result">
              {" "}
              <span> {result} </span>
            </div>
            <div className="key-delete" onClick={() => handleKeyClick("<")}>
              <span>{"<"}</span>
            </div>
          </div>
        </div>
        <div className="calc-keyboard">
          <Keys keys={keys} handleKeyClick={handleKeyClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
