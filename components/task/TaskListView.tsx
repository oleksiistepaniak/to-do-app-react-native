import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet } from "react-native";
import { TaskListItem } from "@/components/task/TaskListItem";
import { T } from "@/constants/Text";
import { Empty } from "@/components/common/Empty";
import { useTask } from "@/contexts/TaskContext";

export const TaskListView = () => {
    const { tasks } = useTask();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={<IconSymbol size={220} color="orange" name="list.bullet.clipboard.fill" style={styles.headerImage} />}
        >
            {tasks.length === 0 ? (
                <Empty message={T.empty_task_list} href="/create" textLinkButton={T.titles.redirect_to_create_task} />
            ) : (
                tasks.map((it) => <TaskListItem key={`task-${it.id}`} task={it} />)
            )}
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: 0,
        left: 90,
        position: "absolute",
    },
});
