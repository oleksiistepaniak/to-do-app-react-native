import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";

interface IEmptyProps {
    message: string;
    href?: Href;
    textLinkButton?: string;
}

export const Empty = (p: IEmptyProps) => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="subtitle" style={styles.message}>
                {p.message}
            </ThemedText>
            {p.href && p.textLinkButton && (
                <Link href={p.href}>
                    <ThemedText type="link">{p.textLinkButton}</ThemedText>
                </Link>
            )}
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    message: {
        textAlign: "center",
        color: "orange",
    },
});
