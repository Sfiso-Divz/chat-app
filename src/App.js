import Navbar from "./components/Navbar";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {

const [user] = useAuthState(auth)
// console.log(user)


// Styling

  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
  }

  return (
    <div className={style.appContainer}>
        <section className={style.sectionContainer}>
            <Navbar />
        </section>
    </div>
  );
}

export default App;
