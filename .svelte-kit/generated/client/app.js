export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/buttons": [3],
		"/checkboxgroup": [4],
		"/columns": [5],
		"/header": [6],
		"/inputs": [7],
		"/labels": [8],
		"/lists": [9],
		"/markdown": [10],
		"/panels": [11],
		"/radiogroup": [12],
		"/rows": [13],
		"/select": [14],
		"/sidebar": [15],
		"/subheader": [16],
		"/tables": [17],
		"/textarea": [19],
		"/text": [18],
		"/toasts": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';