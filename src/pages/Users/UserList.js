import React from 'react'
import {useState} from "react"
import {userRows} from "./../../datas"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./UserList.css"
export default function UserLIst() {
  const [userDatas, setUserDatas] = useState(userRows)

  const deleteUser= ( userId =>{
      setUserDatas(userDatas.filter(user =>  user.id != userId))
  })
  const columns=[
     { 
      field : "id",
      headerName : "ID",
      width:90
    },

      { 
        field:"user",
      headerName:"User",
      width:200,
      renderCell : (params)=>{ 
        return(
          <Link to="/">
             <div className='userListUser'>
                <img src={params.row.avatar} className="userListImg" />
                {params.row.username}
            </div>
          </Link>       
        /* Object[row]: Object { id: 1 , username: "Sas rend", avatar: "./../public/images/1.jpg", … }​ */
        /*  console.log(params); */ 
        )
      }
      },
      {
        field:"email",
        headerName: "Email",
        width: 200
      }
      ,
      {
        field:"status",
        headerName: "Status",
        width: 120
      }
      ,
      {
        field:"transaction",
        headerName: "Transaction",
        width: 160
      }
      ,
      {
        field:"action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return(
            <>
            <Link to={`/user/${params.row.id}`}  className='link'>
                    <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete'
            onClick={()=> {deleteUser(params.row.id) }}></DeleteOutlineIcon>
            </>
          )       
        } 
      }
      ,
  ]
  
   return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
      />
    </div>
  );
  }
  
  /* 
   <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
      />
    </div>
  */