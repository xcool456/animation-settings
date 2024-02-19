import { inject, observer } from 'mobx-react';
import { Content } from '../../components/content/Content';
import './style.scss';
import { PreviewElement } from './PreviewElement';

export const MainContent = inject('store')(
	observer(({ store }) => {
		return (
			<>
				<div className='main-content'>
					<Content className='content-block' onClick={(event) => store.setCurrentElement(event.target)} />
				</div>
				{store.currentElement && <PreviewElement />}
			</>
		);
	})
);
