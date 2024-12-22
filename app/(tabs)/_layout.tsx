import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';
import {HapticTab} from '@/components/HapticTab';
import {IconSymbol, IconSymbolName} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {T} from "@/constants/Text";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            {tabsScreenConfig.map(it => (
                <Tabs.Screen
                    key={`tabs-screen-${it.name}`}
                    name={it.name}
                    options={{
                        title: it.iconTitle,
                        tabBarIcon: ({color}) => <IconSymbol size={28} name={it.iconName} color={color}/>
                    }}
                />
            ))}
        </Tabs>
    );
}

interface ITabScreenConfig {
    name: string;
    iconTitle: string;
    iconName: IconSymbolName;
}

const tabsScreenConfig: ITabScreenConfig[] = [
    {
        name: "index",
        iconTitle: T.titles.tabs.main,
        iconName: "house.fill",
    },
    {
        name: "create",
        iconTitle: T.titles.tabs.create_task,
        iconName: "plus",
    },
    {
        name: "list",
        iconTitle: T.titles.tabs.task_list,
        iconName: "list.dash",
    },
]
