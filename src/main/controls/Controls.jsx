import { inject, observer } from 'mobx-react';
import { InputRange } from '../../components/input-range/InputRange';
import { Label } from '../../components/label/Label';
import './style.scss'

export const Controls = inject('store')(
	observer(({ store }) => {
		return (
			<div className='main-controls'>
					<Label label='X'>
						<InputRange min={-150} max={150} value={store.currentElementAnimation.x || 0} onChange={store.setProperty('x')} />
					</Label>
					<Label label='Y'>
						<InputRange min={-150} max={150} value={store.currentElementAnimation.y || 0} onChange={store.setProperty('y')} />
					</Label>
					<Label label='Opacity'>
						<InputRange
							min={0}
							max={100}
							value={store.currentElementAnimation.opacity || 0}
							onChange={store.setProperty('opacity')}
						/>
					</Label>
					<Label label='Scale'>
						<InputRange
							min={0}
							max={100}
							step={10}
							value={store.currentElementAnimation.scale}
							onChange={store.setProperty('scale')}
						/>
					</Label>
					<Label label='Blur'>
						<InputRange
							min={0}
							max={100}
							step={10}
							value={store.currentElementAnimation.blur}
							onChange={store.setProperty('blur')}
						/>
					</Label>
					<Label label='Speed'>
						<InputRange
							min={0}
							max={100}
							step={10}
							value={store.currentElementAnimation.speed}
							onChange={store.setProperty('speed')}
						/>
					</Label>
					<Label label='Delay'>
						<InputRange
							min={0}
							max={100}
							step={10}
							value={store.currentElementAnimation.delay}
							onChange={store.setProperty('delay')}
						/>
					</Label>
			</div>
		);
	})
);
