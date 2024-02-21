import { HashRouter, Routes, Route } from 'react-router-dom';
import { Main } from './main/Main';
import { Preview } from './preview/Preview';
import './index.scss';

function App() {
	return (
		<HashRouter base="/">
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='preview' element={<Preview />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
