import { StackNavigator } from "react-navigation";

import CampusOverflow from "./CampusOverflow";

export default HomeScreen = StackNavigator(
    {
        Home: {
            screen: CampusOverflow,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
