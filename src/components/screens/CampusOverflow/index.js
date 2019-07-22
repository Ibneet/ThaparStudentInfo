import { StackNavigator } from "react-navigation";

import CampusOverflow from "./CampusOverflow";

export default CampusOverflowScreen = StackNavigator(
    {
        CampusOverflow: {
            screen: CampusOverflow,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
