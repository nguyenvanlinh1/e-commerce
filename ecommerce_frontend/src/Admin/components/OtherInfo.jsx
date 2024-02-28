import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RedeemIcon from "@mui/icons-material/Redeem";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const info = [
  {
    icon: <BarChartIcon />,
    color: "#03DAC6",
    name: "Total Profit",
    content: "$25.6K",
    status: 42,
    time: "Weekly Profit",
  },
  {
    icon: <MonetizationOnIcon />,
    color: "#d666cd",
    name: "Refunds",
    content: "$78",
    status: -15,
    time: "Past Month",
  },
  {
    icon: <RedeemIcon />,
    color: "#7826d7",
    name: "New Orders",
    content: "862",
    status: -18,
    time: "Weekly Orders",
  },
  {
    icon: <HelpOutlineIcon />,
    color: "#e0f013",
    name: "Sales Queries",
    content: "15",
    status: -18,
    time: "Last Week",
  },
];

const OtherInfo = () => {
  return (
    <div>
      <Grid container xs={12} className="grid grid-cols-2 gap-2 content-around" >
        {info.map((item) => (
          <Grid item xs={12} md={5.8} className="shadow-lg shadow-gray-600 h-[245px]">
            <Card className="h-full" sx={{ boxShadow:"none", bgcolor: "#443C68", color:"white"}}>
              <CardHeader
                title={item.icon}
                titleTypographyProps={{
                  style: {
                    backgroundColor: item.color,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
                action={
                  <IconButton>
                    <MoreVertIcon className="text-white" />
                  </IconButton>
                }
              />
              <CardContent>
                <Box>
                  <Typography sx={{ fontWeight: "700" }} variant="body2">
                    {item.name}
                  </Typography>
                  <Box className="flex items-center my-5">
                    <Typography sx={{ fontWeight: "700", mr: 2 }} variant="h6">
                      {item.content}
                    </Typography>
                    {item.status > 0 ? (
                      <Typography variant="body2" className="text-green-500">
                        {item.status}%
                      </Typography>
                    ) : (
                      <Typography variant="body2" className="text-red-500">
                        {item.status}%
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="caption">{item.time}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OtherInfo;
