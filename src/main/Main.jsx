import { Controls } from './controls/Controls';
import './style.scss';
import { mainStore } from './mainStore';
import { observer, Provider } from 'mobx-react';
import { MainContent } from './main-content/MainContent';
import { Header } from './header/Header';

export const Main = observer(() => {
	return (
		<Provider store={mainStore}>
			<div className='main-page'>
				<Header />
				<div className='settings'>
					<MainContent />
					<Controls />
				</div>
			</div>
		</Provider>
	);
});
