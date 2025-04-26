import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        getuser: (state, action) => {
            state.push(action.payload)
        },
        adduser: (state, action) => {
            fetch("http://localhost:1000/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(action.payload)
            })
                .then((res) => { if (res) { window.location.reload() } })

        },
        deleteuser: (state, action) => {

            const { id } = action.payload;

            fetch("http://localhost:1000/users/" + id, {
                method: "delete"
            })
                .then((res) => { if (res) { window.location.reload() } })
        },
        edituser: (state, action) => {
            const { id } = action.payload;
            // console.log(id, name);
            fetch("http://localhost:1000/users/" + id, {
                method: "put",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(action.payload)
            })
                .then((res) => { if (res) { window.location.reload() } })

        }
    }
})

export const { getuser, adduser, deleteuser, edituser } = userslice.actions;
export default userslice.reducer;