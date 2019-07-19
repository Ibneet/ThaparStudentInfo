import { StackNavigator } from "react-navigation";

import Home from "./Home.js";

export default HomeScreen = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
