import { Nav } from "./Nav";
import * as config from '../config';

export const Header = () => {
	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">Form Site</h1>
			{config.debugging() && (
<div className="text-xs text-orange-900">Number of logs: 324</div>
			)}
			<Nav/>
		</>
	);
};
