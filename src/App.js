import { useEffect } from "react"
import { useState } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"

export default function App() {
  // hash模式
  // const [path, setPath] = useState(window.location.hash.slice(1))
  // useEffect(() => { 
  //   window.addEventListener('hashchange', () => { 
  //     console.log('hash值变化');
  //     setPath(window.location.hash.slice(1))
  //   })
  // })
  return (
    <div className="app">
      <h1>更组件</h1>
      <ul>
        <li><a href="#/login">登录</a></li>
        <li><a href="#/home">首页</a></li>
        <li><a href="#/user">用户</a></li>
      </ul>
      <hr></hr>
      {/* {path === '/login' && <Login />}
      {path === '/home' && <Home />}
      {path === '/user' && <User />} */}
    </div>
  )
}