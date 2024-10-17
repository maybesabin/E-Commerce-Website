import Header from "./components/Header"
import AppRoutes from "./routes/routes"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App