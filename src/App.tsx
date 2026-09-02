import { Outlet } from "react-router-dom"

// APP.TSX
const App = () => {
  return (
    <>
       <main>
        <Outlet />
      </main>
    </>
  )
}

export default App