import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

interface IEmptyProps {
    message: string;
}

export const Empty = (p: IEmptyProps) => {
    return (
        <ThemedView style={{display: "flex", alignItems: "center"}}>
            <ThemedText type="subtitle">
                {p.message}
            </ThemedText>
        </ThemedView>
    )
}