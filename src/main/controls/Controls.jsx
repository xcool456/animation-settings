import { inject, observer } from 'mobx-react';
import { InputRange } from '../../components/input-range/InputRange';
import { Label } from '../../components/label/Label';
import './style.scss';
import { InputSelect } from '../../components/input-select/InputSelect';
import { Checkbox } from '../../components/checkbox/Checkbox';

const EASING = [
	{ label: 'Ease', value: 'ease' },
	{ label: 'Ease-in', value: 'ease-in' },
	{ label: 'Ease-out', value: 'ease-out' },
	{ label: 'Linear', value: 'linear' },
];

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
						showValue={`${store.currentElementAnimation.opacity || 0}%`}
						value={store.currentElementAnimation.opacity || 0}
						onChange={store.setProperty('opacity')}
					/>
				</Label>
				<Label label='Scale'>
					<InputRange
						min={0}
						max={20}
						step={1}
						start={10}
						showValue={`${store.currentElementAnimation.scale / 10 || 0}`}
						value={store.currentElementAnimation.scale || 0}
						onChange={store.setProperty('scale')}
					/>
				</Label>
				<Label label='Blur'>
					<InputRange
						min={0}
						max={10}
						step={1}
						start={5}
						value={store.currentElementAnimation.blur || 0}
						onChange={store.setProperty('blur')}
					/>
				</Label>
				<Label label='Speed'>
					<InputRange
						min={0}
						max={9}
						step={1}
						showValue={`.${store.currentElementAnimation.speed || 0}s`}
						value={store.currentElementAnimation.speed || 0}
						onChange={store.setProperty('speed')}
					/>
				</Label>
				<Label label='Delay'>
					<InputRange
						min={0}
						max={20}
						step={1}
						showValue={`${store.currentElementAnimation.delay / 10 || 0}s`}
						value={store.currentElementAnimation.delay || 0}
						onChange={store.setProperty('delay')}
					/>
				</Label>
				<Label label='Easing'>
					<InputSelect
						options={EASING}
						value={store.currentElementAnimation.easing}
						onChange={store.setProperty('easing')}
						disabled={!store.currentElement}
					/>
				</Label>
				<Label label='Replay'>
					<Checkbox
						type='checkbox'
						value={store.currentElementAnimation.replay}
						onChange={store.setProperty('replay')}
						disabled={!store.currentElement}
					/>
				</Label>
			</div>
		);
	})
);
