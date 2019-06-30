import * as React from "react";
import {Animated,StatusBar,StyleSheet,Text,View} from "react-native";
import Koji from 'koji-tools';

export default class HomePage extends React.Component {
    private imageAnimation: Animated.Value;

    constructor(props: any) {
        super(props);

        this.imageAnimation = new Animated.Value(0);
    }

    public componentDidMount() {
        Animated.loop(
            Animated.timing(this.imageAnimation, {
                duration: 3000,
                toValue: 1
            })
        ).start();

        StatusBar.setBarStyle("light-content");
    }

    public render(): JSX.Element{
        const rotationStyle = {
            transform: [
                {
                    rotate: this.imageAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"]
                    })
                }
            ]
        };

        return (
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    <Animated.Image
                        style={[styles.headerImage, rotationStyle]}
                        resizeMode={"contain"}
                        source={Koji.config.images.icon}
                    />
                    <Text style={styles.appTitle}>{Koji.config.strings.appTitle}</Text>
                    <Text style={styles.appSubtitle}>{Koji.config.strings.appSubtitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    appHeader: {
        alignItems: "center",
        backgroundColor: Koji.config.colors.backgroundColor,
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    appIntro: {
        flex: 3,
        fontSize: 30,
        textAlign: "center"
    },
    appSubtitle: {
        color: Koji.config.colors.textColor,
    },
    appTitle: {
        color: Koji.config.colors.textColor,
        flex: 1,
        fontSize: 16
    },
    headerImage: {
        flex: 3,
        height: 200,
        width: 200
    }
});
