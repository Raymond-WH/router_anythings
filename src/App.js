// import { useEffect } from "react"
// import { useState } from "react"
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import User from "./pages/User"

// export default function App() {
//   // hash模式
//   // const [path, setPath] = useState(window.location.hash.slice(1))
//   // useEffect(() => {
//   //   window.addEventListener('hashchange', () => {
//   //     console.log('hash值变化');
//   //     setPath(window.location.hash.slice(1))
//   //   })
//   // })
//   // history模式
//   const [path, setPath] = useState(window.location.pathname)
//   useEffect(() => {
//     window.addEventListener('popstate', () => {
//       console.log('history值变化');
//       setPath(window.location.pathname)
//     })
//   }, [])
//   // 设置路由跳转
//   const push = (path) => {
//     window.history.pushState({}, '', path)
//     setPath(path)
//   }
//   return (
//     <div className="app">
//       <h1>更组件</h1>
//       <ul>
//         {/* <li><a href="#/login">登录</a></li>
//         <li><a href="#/home">首页</a></li>
//         <li><a href="#/user">用户</a></li> */}
//         <li><a href="/login"
//           onClick={(e) => {
//             e.preventDefault()
//             push('/login')
//           }}
//         >登录</a></li>
//         <li><a href="/home" onClick={(e) => {
//           e.preventDefault()
//           push('/home')
//         }}>首页</a></li>
//         <li><a href="/user" onClick={(e) => {
//           e.preventDefault()
//           push('/user')
//         }}>用户</a></li>
//       </ul>
//       <hr></hr>
//       {path === '/login' && <Login />}
//       {path === '/home' && <Home />}
//       {path === '/user' && <User />}
//     </div>
//   )
// }

// react-router-domv6
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import User from './pages/User'
// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <h1>更组件</h1>
//         <input type="text" />
//         <ul>
//           <li><Link to="/login">登录</Link></li>
//           <li><Link to="/home">首页</Link></li>
//           <li><Link to="/user">用户</Link></li>
//         </ul>
//         <hr></hr>


//         <Routes>
//           <Route path="/login" element={<Login></Login>} />
//           <Route path="/home" element={ <Home></Home>} />
//           <Route path="/user" element={<User></User>} />

//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

// react-router-domv5
import { HashRouter, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <h1>更组件</h1>
        <input type="text" />
        <ul>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/user">用户</Link></li>
        </ul>
        <hr></hr>

        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/user'>
          <User></User>
        </Route>
        
      </div>
    </HashRouter>
  )
}