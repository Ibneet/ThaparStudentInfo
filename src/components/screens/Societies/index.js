import { StackNavigator } from "react-navigation";

import Societies from "./Societies";

export default SocietiesScreen = StackNavigator(
    {
        Societies: {
            screen: Societies,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
