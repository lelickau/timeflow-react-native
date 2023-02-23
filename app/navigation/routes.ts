import { IRoute } from "./navigation.types";
import Auth from "@/components/screens/Auth/Auth";
import Home from "@/components/screens/Home/Home";
import Profile from "@/components/screens/Profile/Profile";
import Settings from "@/components/screens/Settings/Settings";

export const routes: IRoute[] = [
    {
        name: 'Auth',
        component: Auth
    },
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Settings',
        component: Settings
    },
    {
        name: 'Profile',
        component: Profile
    },
]