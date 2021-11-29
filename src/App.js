import { Routes } from "./routes/Routes"
import { Navigation } from "./components/Navigation"
import { GlobalStyles } from "./shared/styles/GlobalStyles"
import { UserProvider } from "./shared/provider/UserProvider"

export const App = () => {
  return (
    <div>
      <UserProvider>
        <GlobalStyles />
        <Routes>
          <Navigation />
        </Routes>
      </UserProvider>
    </div>
  )
}