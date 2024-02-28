import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "Purchase (K$)",
    },
  ],
  width: 400,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};
const dataset = [
  {
    men: 59,
    women: 57,
    week: "One",
  },
  {
    men: 50,
    women: 78,
    week: "Two",
  },
  {
    men: 47,
    women: 106,
    week: "Three",
  },
  {
    men: 54,
    women: 92,
    week: "Four",
  },
];

const valueFormatter = (value) => `${value}K$`;

const WeeklyOverview = () => {
  return (
    <div>
      <Card className="h-[500px]" sx={{ bgcolor: "#443C68", color: "white" }}>
        <CardHeader
          title="Weekly Overview"
          action={
            <IconButton>
              <MoreVertIcon sx={{ bgcolor: "#443C68", color: "white" }} />
            </IconButton>
          }
        />
        <CardContent>
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "week",
                categoryGapRatio: 0.5,
                barGapRatio: 0.3,
              },
            ]}
            series={[
              {
                dataKey: "men",
                label: "Men",
                valueFormatter,
              },
              {
                dataKey: "women",
                label: "Women",
                valueFormatter,
              },
            ]}
            {...chartSetting}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" className="px-5">
              45%
            </Typography>
            <Typography variant="body2">
              You sales performance 45% 😆 better compared to last month
            </Typography>
          </Box>
          <Button
            variant="contained"
            className="w-full"
            sx={{ bgcolor: "#6200EE", color: "white", marginTop: 3 }}
            type="submit"
          >
            Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyOverview;
