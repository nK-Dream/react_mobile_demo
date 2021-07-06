//该文件专门用于统一管理路由
import Login from '../pages/Login'
import User from '../pages/User'
const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User
    },
]

export default routes