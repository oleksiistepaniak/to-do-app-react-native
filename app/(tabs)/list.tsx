import ParallaxScrollView from "@/components/ParallaxScrollView";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {StyleSheet} from "react-native";
import {useTask} from "@/contexts/taskContext";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function TaskList() {
    const {tasks} = useTask();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>
            {
                tasks.map(it => (
                    <ThemedView key={`task-${it.id}`}>
                        <ThemedText>
                            Identifier: {it.id}
                        </ThemedText>
                        <ThemedText>
                            Title: {it.title}
                        </ThemedText>
                        <ThemedText>
                            Description: {it.description}
                        </ThemedText>
                        <ThemedText>
                            Status: {it.status}
                        </ThemedText>
                    </ThemedView>
                ))
            }
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    input: {
        outline: "1px solid red",
    },
    text: {
        outline: "1px solid red",
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});