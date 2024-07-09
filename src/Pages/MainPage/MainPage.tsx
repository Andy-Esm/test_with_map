import {Circles} from '../../components';
import cl from './MainPage.module.css';
export const MainPage = () => {
	return (
		<main className={cl.main}>
			<div className={cl.mapBox}>
				<Circles />
			</div>
		</main>
	);
};
