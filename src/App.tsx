import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	return (
		<main className="bg-[#ccc] p-6 w-full md:w-[60rem] mt-0 md:mt-6">
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</main>
	);
}

export default App;
