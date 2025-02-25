import { useState } from "react"

import { DashboardContext } from "./context"
import Dashboard from "./Dashboard"

export interface User {
  isSubscribed: boolean
  name: string
}

interface DemoProps {}

import "./App.css"

function App({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "You",
  })

  return (
    <>
      <h1>useContext</h1>
      <div>
        <DashboardContext.Provider value={user}>
          <Dashboard />
        </DashboardContext.Provider>
      </div>
    </>
  )
}

export default App
