import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { email: null, token: null, firstName :null, lastName :null },
    reducers: {
        logIn: (state, action) => {
            // const { email, userData } = action.payload
          
            state.email = action.payload.email
            
            //console.log("Email", state.email)
            state.token = action.payload.body.token
            //console.log("Token", state.token)
        },
        logOut: (state, action) => {
            state.email = null
            state.token = null
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        }
    },
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentFirstName = (state) => state.auth.firstName
export const selectCurrentLastName = (state) => state.auth.lastName




// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {   
//     id: null, 
//     email: null,
//     firstName: null,
//     lastName: null,
//     isLogged: false,
//     token : null,
//     isEditing: false,}

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logIn : (state, action) =>
//         {
//             const { id, email, firstName, lastName,  token } = action.payload
//             state.id = id
//             state.email = email
//             state.firstName = firstName
//             state.lastName = lastName
//             state.token = token
//         },
//         updateUser: (state, action) =>
//         {
//             state.firstName = action.payload.firstName
//             state.lastName = action.payload.lastName
//             state.isEditing = false
//         },
//         logOut: (state) =>
//         {
//             state.id = null
//             state.email = null
//             state.firstName = null
//             state.lastName = null
//             state.isLogged = false
//             state.token = null
//         },
//         isEdit(state)
//         {
//             state.isEditing = true
//         },
//         isCancel(state)
//         {
//             state.isEditing = false
//         }
//     },
// })

// export const { logIn, logOut, updateUser, isEdit, isCancel } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentLogin = (state) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.token