import './App.css';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealPreviwGrid from './components/mealPreviwGrid/MealPreviwGrid';
import MealPreview from './components/mealPreview/MealPreview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
				
			</Navbar>
			
				<Routes>
					<Route path="/" element={<MealPreviwGrid />} />
					<Route path="/meal/:id" element={<MealPreview />} />
				</Routes>
			
        <Home />
		</div>
	);
}

export default App;
