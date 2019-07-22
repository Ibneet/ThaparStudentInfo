import { StackNavigator } from "react-navigation";

import Profile from "./Profile";

export default ProfileScreen = StackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
