import Login from './components/Login'
import Home from './components/Home'

export const routes = [
	{
		path: '/login',
		component: Login,
		meta: {
			forVisitors: true
		}
	},
	{
		path: '/home',
		component: Home,
		meta: {
			forAuth: true
		}
	}
]