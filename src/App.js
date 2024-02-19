import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './main/Main';
import { Preview } from './preview/Preview';
import './index.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='preview' element={<Preview />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
