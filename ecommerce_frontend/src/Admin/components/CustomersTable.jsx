import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../State/Auth/Action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const CustomersTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {auth} = useSelector(store => store)
  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllUser());
  }, [])

  console.log("All User: ", auth);
  return (
    <div className="h-[100vh] bg-[#18122B]">
      <Card sx={{ boxShadow: "none", bgcolor: "#18122B" }}>
        <Typography variant="h4" className="text-white font-semibold p-5">
          All Customers
        </Typography>
        <CardContent>
          <TableContainer component={Paper} sx={{bgcolor:"#443C68"}}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">ID</StyledTableCell>
                  <StyledTableCell align="left">Image</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Email</StyledTableCell>
                  <StyledTableCell align="left">Role</StyledTableCell>
                  <StyledTableCell align="left">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {auth?.users?.data?.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell align="left" sx={{color:"white"}}>{item.id}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Avatar src="https://th.bing.com/th/id/OIP.HhA9vKTaL6ofrpjZddB13AHaHa?rs=1&pid=ImgDetMain"></Avatar>
                    </StyledTableCell>
                    <StyledTableCell align="left" sx={{color:"white"}}>{item.firstName} {item.lastName}</StyledTableCell>
                    <StyledTableCell align="left" sx={{color:"white"}}>{item.email}</StyledTableCell>
                    <StyledTableCell align="left" sx={{color:"white"}}>{item.role}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Button variant="outlined" sx={{color:"red"}}>Delete</Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            sx={{
              p: 2,
              mt: "5px",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#443C68",
            }}
            count={10}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                sx={{ color: "white" }}
              />
            )}
            onChange={handlePaginationChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersTable;
