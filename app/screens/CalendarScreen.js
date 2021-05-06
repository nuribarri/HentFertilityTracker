import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import CalStrip from "../components/CalendarStrip";
import Screen from "../components/Screen";
import colors from "../config/colors";

function CalendarScreen() {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(month + "/" + date + "/" + year);
  }, []);

  return (
    <Screen style={styles.screen}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
        markedDates={{
          "2021-04-01": { startingDay: true, color: colors.primary },
          "2021-04-02": {
            selected: true,
            color: colors.primary,
          },
          "2021-04-03": {
            selected: true,
            color: colors.primary,
          },
          "2021-04-04": {
            selected: true,
            color: colors.primary,
            endingDay: true,
          },
          "2021-04-08": {
            startingDay: true,
            color: colors.secondary,
          },
          "2021-04-09": {
            selected: true,
            color: colors.secondary,
          },
          "2021-04-10": {
            selected: true,
            color: colors.secondary,
          },
          "2021-04-11": {
            selected: true,
            color: colors.secondary,
          },
          "2021-04-12": {
            selected: true,
            color: colors.secondary,
          },
          "2021-04-13": {
            selected: true,
            color: "purple",
            startingDay: true,
            endingDay: true,
          },
          "2021-04-14": {
            selected: true,
            color: colors.secondary,
            endingDay: true,
          },
          "2021-05-03": { startingDay: true, color: colors.primary },
          "2021-05-04": {
            selected: true,
            color: colors.primary,
          },
          "2021-05-05": {
            selected: true,
            color: colors.primary,
          },
          "2021-05-06": {
            selected: true,
            color: colors.primary,
            endingDay: true,
          },
          "2021-05-10": {
            startingDay: true,
            color: colors.secondary,
          },
          "2021-05-11": {
            selected: true,
            color: colors.secondary,
          },
          "2021-05-12": {
            selected: true,
            color: colors.secondary,
          },
          "2021-05-13": {
            selected: true,
            color: colors.secondary,
          },
          "2021-05-14": {
            selected: true,
            color: colors.secondary,
          },
          "2021-05-15": {
            selected: true,
            color: "purple",
            startingDay: true,
            endingDay: true,
          },
          "2021-05-16": {
            selected: true,
            color: colors.secondary,
            endingDay: true,
          },
        }}
        markingType={"period"}
        //calendarWidth={320}
      ></CalendarList>
      <Text style={styles.titletext}>{currentDate}</Text>
      <Text style={styles.text}>Cycle Day 6</Text>
      <Text style={styles.text}>Fertile Window in 3 Days</Text>
      <Text style={styles.text}>Low Chance of Getting Pregnant</Text>
    </Screen>
  );
}
//<Text> style={styles.text}Cycle Day 6</Texti>

const styles = StyleSheet.create({
  container: {
    padding: 3,
    paddingLeft: 0.5,
  },
  calendar: {
    marginBottom: 10,
    backgroundColor: "white",
  },
  screen: {
    backgroundColor: "white",
  },
  text: {
    textAlign: "left",
    padding: 10,
    backgroundColor: "white",
    fontSize: 32,
  },
  titletext: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "white",
    alignContent: "center",
    textAlign: "center",
    fontSize: 48,
  },
});

export default CalendarScreen;
