 import Home from "./pages/home/Home"
 import UserList from "./pages/Users/UserList"
 import NewUser from "./pages/NewUser/NewUser"
 import Product from "./pages/Product/Product"
 let routes = [
    {path:"/" , element : <Home></Home>},
    {path:"/users" , element : <UserList></UserList>},
    {path:"/newUser" , element : <NewUser></NewUser>},
    {path:"/product" , element : <Product></Product>}
 ]
 export default routes 