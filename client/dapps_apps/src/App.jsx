import { Navbar, Welcome, Footer, Services, Transaction, Loader } from './Container'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
       <Navbar />
       <Welcome />
       <Services />
       </div>
       <Transaction />
       <Footer />
      
    </div>
  );
}

export default App;
