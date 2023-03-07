import CountryPage from "../pages/CountryPage";
import HomePage from "../pages/HomePage";

const routes = [
    {
        path: "/",
        component: HomePage,
        state: '"home'
    },
    {
        path: "/country",
        component: CountryPage,
        state: "country"
    }
]

export default routes