import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { _getAllUsers } from "../../service/getAllData";
import { _deleteUser } from "../../service/deleteData";
import { InsertUser } from "./insert";
import { EditUser } from "./edit";
import Delete from "./delete";
export function TableUser({ users, onUpdate , order}) {
  const [selectedUser, setselectedUser] = useState(null);
  const [openInsert, setOpenInsert] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setopenDelete] = useState(false);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => {
            setselectedUser({
              id: 0,
              name: "",
              email: "",
              password: "",
              phone: "",
              image: "",
            });
            setOpenInsert(true);
          }}
        >
          <AddIcon color="white" />
        </Button>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">authorization</TableCell>
              <TableCell align="center">Num-Post</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">
                    <img
                      src={row.image}
                      alt={row.image}
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell align="center">{row.authorization}</TableCell>
                  <TableCell align="center">
                    {row.order && row.order.length}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setselectedUser(row);
                        setOpenUpdate(true);
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      disabled={row.posts && row.posts.length > 0}
                      onClick={async () => {
                        setselectedUser(row);
                        setopenDelete(true);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EditUser
        user={selectedUser}
        open={openUpdate}
        setOpen={setOpenUpdate}
        onUpdate={async () => {
          const _user = await _getAllUsers();
          onUpdate(_user);
        }}
      />
      <InsertUser
        user={selectedUser}
        open={openInsert}
        setOpen={setOpenInsert}
        onUpdate={async () => {
          const _user = await _getAllUsers();
          onUpdate(_user);
        }}
      />
      <Delete
        setOpen={setopenDelete}
        open={openDelete}
        onConfirm={async () => {
          await _deleteUser(selectedUser.id);
          const _user = await _getAllUsers();
          onUpdate(_user);
        }}
      />
    </div>
  );
}
