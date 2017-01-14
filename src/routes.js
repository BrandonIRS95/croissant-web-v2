import Login from './components/Login'
import Home from './components/Home'
import Root from './components/Root'

export const routes = [
	{
		path: '/',
		component: Root,
		redirect: '/home',
		meta: {
			forAuth: true
		},
		children: [
			{
				path: '/home',
				component: Home,
				meta: {
					forAuth: true
				}
			}
		]
	},
	{
		path: '/login',
		component: Login,
		meta: {
			forVisitors: true
		},
		name: 'login'
	}
]