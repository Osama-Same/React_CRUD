import React, { useEffect, useState } from "react";
import { _getAllUsers , _getAllOrders } from "../../service/getAllData";
import { TableUser } from "./table";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    update();
  });
  const update = async () => {
    const _users = await _getAllUsers();
    const _order = await _getAllOrders()
    _users.forEach(user => {
      user._order =_order.filter(order => order.idUser === user.id)
    });
    setUsers(_users);
    setOrders(_order);
    console.log(_order)
  };
  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <TableUser users={users} onUpdate={async () => await update()} order={orders} />
    </div>
  );
};

export default Users;
