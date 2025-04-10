import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCars, deleteCar } from "../api/carapi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import AddCar from "./AddCar";


function Carlist(){
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data, error, isSuccess }  = useQuery({
    queryKey:["cars"],
    queryFn: getCars
  });

  const { mutate } = useMutation(deleteCar, {
    onSuccess : () =>{
      queryClient.invalidateQueries({queryKey:['cars']});
      setOpen(true);
    },
    onError : (err) => {
      console.log(err)
    },
  });

  const colums: GridColDef[] = [
    {field: 'brand', headerName: 'Brand', width: 200},
    {field: 'model', headerName: 'Model', width: 200},
    {field: 'color', headerName: 'Color', width: 200},
    {field: 'registrationNumber', headerName: 'Reg.nr.', width: 150},
    {field: 'modelYear', headerName: 'ModelYear', width: 150},
    {field: 'price', headerName: 'Price', width: 150},
    {
      field: 'edit',
      headerName: '',
      width:90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => 
        <button
          onClick={() => {
            if(window.confirm(`${params.row.brand}의 ${params.row.model}을 삭제 하시겠습니까?`)){
              mutate(params.row._links.car.href)
            }
            }}
        >
          삭제
        </button>
    }
  ]

  if(!isSuccess){
    return <span>Now Loading...</span>
  }
  else if(error){
    return <span>데이터 가져오기 중 오류 발생</span>
  }
  else{
    return(
      <>
      <AddCar />
      <DataGrid
        rows={data}
        columns={colums}
        getRowId={row => row._links.self.href}
        disableRowSelectionOnClick={true}
      />

      <Snackbar
        open={open}
        autoHideDuraction ={2000}
        onClose={() => setOpen(false)}
        message="자동차가 삭제 되었습니다"
      />
      </>
    );
  }
}
export default Carlist;