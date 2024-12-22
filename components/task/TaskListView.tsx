import ParallaxScrollView from "@/components/ParallaxScrollView";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {StyleSheet} from "react-native";
import {useTask} from "@/contexts/taskContext";
import {TaskListItem} from "@/components/task/TaskListItem";
import {Empty} from "@/components/common/empty";
import {T} from "@/constants/Text";

export const TaskListView = () => {
    const {tasks} = useTask();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <IconSymbol
                    size={220}
                    color="orange"
                    name="list.bullet.clipboard.fill"
                    style={styles.headerImage}
                />
            }>
            {tasks.length === 0
                ? <Empty message={T.empty_task_list}/>
                : tasks.map(it => <TaskListItem key={`task-${it.id}`} task={it}/>)
            }
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: 0,
        left: 90,
        position: 'absolute',
    }
});