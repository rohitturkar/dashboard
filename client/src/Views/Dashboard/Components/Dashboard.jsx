import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DataGrid } from "@mui/x-data-grid";


const dataset = [
  { items: 21, range: "0 - 100" },
  { items: 28, range: "100 - 200" },
  { items: 48, range: "200 - 300" },
  { items: 25, range: "400 - 500" },
  { items: 90, range: "500 - 600" },
  { items: 30, range: "600 - 700" },
  { items: 50, range: "700 - 800" },
  { items: 10, range: "900  & above" },
];

const valueFormatter = (value) => `${value}mm`;

const chartSetting = {
  yAxis: [
    // {
    //   label: '',
    // },
  ],
  series: [
    { dataKey: "items", label: "Transactions Bar Charts", valueFormatter },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};



export default function Dashboard() {
  return (
    <div className="grid grid-cols-12  overflow-y-hidden z-0">
      <div className="col-span-12 overflow-hidden">
        <TableDashboard />
      </div>
      <div className="col-span-12">
        <ChartBar />
      </div>
    </div>
  );
}

const ChartBar = () => {
  const [Month, setMonth] = React.useState("June");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const tickPlacement = "middle";
  const tickLabelPlacement = "middle";
  return (
    <div style={{ width: "100%" }} className="mt-2">
      <div className="flex justify-end px-4 py-2 ">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontSize: "0.85rem" }}
            >
              Month
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Month}
              label="Month"
              onChange={handleChange}
              sx={{
                height: 40,
                fontSize: 12,
              }}
            >
              <MenuItem value="Jan">Jan</MenuItem>
              <MenuItem value="Feb">Feb</MenuItem>
              <MenuItem value="March">Mar</MenuItem>
              <MenuItem value="April">Apr</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="july">July</MenuItem>
              <MenuItem value="Aug">Aug</MenuItem>
              <MenuItem value="Sep">Sep</MenuItem>
              <MenuItem value="Oct">oct</MenuItem>
              <MenuItem value="Nov">Nov</MenuItem>
              <MenuItem value="Dec">Dec</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "range",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        layout="vertical"
        grid={{ horizontal: true }}
        {...chartSetting}
      />
    </div>
  );
};

const TableDashboard = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 130,
    },
    {
      field: "category",
      headerName: "Category",
      type: "number",
      width: 130,
    },
    {
      field: "Sold",
      headerName: "Sold",
      width: 130,
    },
    {
      field: "images",
      headerName: "Images",

      width: 130,
    },
  ];

  const rows = [
    {
      id: 1,
      title: "Software Engineer",
      description: "hello",
      price: 150000,
      sold: true,
      category: "Premium",
      images: "none",
    },
    {
      id: 2,
      title: "Software Engineer",
      description: "hello",
      price: 150000,
      sold: true,
      category: "Premium",
      images: "none",
    },

    {
      id: 3,
      title: "Software Engineer",
      description: "hello",
      price: 150000,
      sold: true,
      category: "Premium",
      images: "none",
    },

    {
      id: 4,
      title: "Software Engineer",
      description: "hello",
      price: 150000,
      sold: true,
      category: "Premium",
      images: "none",
    },

    {
      id: 5,
      title: "Software Engineer",
      description: "hello",
      price: 150000,
      sold: true,
      category: "Premium",
      images: "none",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mb-10 px-4">
        <div className=" flex justify-center items-center shadow-2xl rounded-full w-[200px] h-[200px] border text-center font-bold text-md">
          Transaction Dashboard
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }} className="px-4">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      </div>
    </div>
  );
};
