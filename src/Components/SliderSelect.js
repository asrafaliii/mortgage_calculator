import React from "react";
// import { Container, Typography } from "@mui/material";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value.toFixed(0),
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;
