import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
// import 'chart.js/auto'
import useTransaction from "../../hooks/useTransactions";
import useStyles from "./styles";
const Details = ({ title }) => {
  const { totalAmount, chartData } = useTransaction(title);
  console.log(chartData);
  const classes = useStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <Typography
        variant='h5'
        style={{ textAlign: "left", marginLeft: "15px" }}
      >
        {totalAmount}
      </Typography>
      <CardContent>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
