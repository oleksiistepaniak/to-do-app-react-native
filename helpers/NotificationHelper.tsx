import { Alert } from "react-native";
import { T } from "@/constants/Text";

export const NotificationHelper = {
    displaySuccessMessage: (message: string) => {
        Alert.alert(T.titles.success, message);
    },
    displayErrorMessage: (message: string) => {
        Alert.alert(T.titles.error, message);
    },
};
