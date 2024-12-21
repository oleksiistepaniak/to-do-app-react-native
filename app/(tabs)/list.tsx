import ParallaxScrollView from "@/components/ParallaxScrollView";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {StyleSheet} from "react-native";
import {useTask} from "@/contexts/taskContext";
import {TaskListItem} from "@/components/task/TaskListItem";

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
                    <TaskListItem key={`task-${it.id}`} task={it}/>
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