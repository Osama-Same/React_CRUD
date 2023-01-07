import React, { useState ,useEffect } from "react";
import { _putUser } from "../../service/editData";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
export function EditUser({ user, open, setOpen, onUpdate }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.Password : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [image, setImage] = useState(user ? user.image : null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) return
    setName(user.name)
    setEmail(user.email)
    setPassword(user.password)
    setPhone(user.phone)
    setImage(user.image)
}, [user])
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "5%", color: "black" }}>
            User Form
          </DialogContentText>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              marginBottom: "5%",
            }}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              value={phone}
            />
            <Button variant="contained" component="label">
              <input
                accept=".jpg,.png,.svg"
                multiple
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={async () => {
              const fromData = new FormData();
              fromData.append("name", name);
              fromData.append("email", email);
              fromData.append("password", password);
              fromData.append("phone", phone);
              if (image !== "") {
                user.image = image;
                fromData.append("image", user.image);
              } else {
                fromData.append("image", image, image.name);
              }
              setLoading(true);
              await _putUser(user.id,fromData);
              onUpdate();
              setLoading(false);
              setOpen(false);
            }}
          >
            {loading ? <CircularProgress /> : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
