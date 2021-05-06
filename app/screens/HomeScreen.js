import React, { useState, useEffect } from "react";
import {
  Animated,
  Alert,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import CalStrip from "../components/CalendarStrip";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import { Svg, Circle, Line, Rect } from "react-native-svg";
import * as Animatable from "react-native-animatable";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function HomeScreen({ navigation }) {
  // Alert.alert(
  //   "Begin Bluetooth Pairing",
  //   "",
  //   [
  //     {
  //       text: "Ask me later",
  //       onPress: () => console.log("Ask me later pressed"),
  //     },
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") },
  //   ],
  //   { cancelable: false }
  // );

  // var answer = 0;

  const title =
    "Would you like to input physiological information to help increase predictive accuracy?";
  const message = "";
  const buttons = [
    {
      text: "Yes",
    },
    {
      text: "Later",
      style: "cancel",
    },
  ];

  Alert.alert(title, message, buttons);

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(month + "/" + date + "/" + year);
    //Alert.alert(title, message, buttons);
  }, []);

  const chartConfig = {
    backgroundGradientFrom: colors.light,
    //backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.light,
    //backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ["5/2", "5/3", "5/4", "5/5", "5/6", "5/7"],
    datasets: [
      {
        data: [66, 65, 68, 65, 67, 69],
        //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
    legend: ["Average Heart Rate (BPM)"], // optional
  };
  const tempdata = {
    labels: ["5/2", "5/3", "5/4", "5/5", "5/6", "5/7"],
    datasets: [
      {
        data: [98.4, 98.1, 97.5, 96.4, 97.2, 97.7],
        //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
    legend: ["Basal Body Temperature (F)"], // optional
  };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.titletext}>{currentDate}</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(routes.MESSAGES)}>
          <View style={styles.circle}>
            <Text style={styles.circletext}>Ovulation in:</Text>
            <Text style={styles.circletextnumber}>10</Text>
            <Text style={styles.circletextday}>Days</Text>
          </View>
        </TouchableOpacity>
      </View>
      <LineChart
        data={data}
        width={screenWidth}
        height={170}
        chartConfig={chartConfig}
        withInnerLines={false}
        withOuterLines={false}
        withShadow={false}
        style={styles.paddingheart}
      />
      <Text style={styles.average}>Most recent heart rate: 65 BPM</Text>
      <LineChart
        data={tempdata}
        width={screenWidth}
        height={170}
        chartConfig={chartConfig}
        withInnerLines={false}
        withOuterLines={false}
        withShadow={false}
        style={styles.paddingheart}
      />
      <CalStrip></CalStrip>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primary,
    alignSelf: "center",
    // marginTop: 5,
  },
  circletext: {
    textAlign: "center",
    padding: 10,
    alignContent: "center",
    fontSize: 26,
    marginTop: 20,
  },
  circletextnumber: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 64,
  },
  average: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 10,
    color: colors.primary,
  },
  circletextday: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 26,
  },
  paddingheart: {
    padding: 5,
  },

  titletext: {
    textAlign: "center",
    padding: 10,
    backgroundColor: colors.light,
    alignContent: "center",
    textAlign: "center",
    fontSize: 32,
  },
});

export default HomeScreen;
