import { View, StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import React from "react";
import { color } from "react-native-reanimated";

var days = ["2021-05-03", "2021-05-04"];

const CalStrip = () => (
  <View style={styles.container}>
    <CalendarStrip
      style={styles.calstrips}
      headerText={"Menstrual Cycle"}
      showMonth={true}
      markedDates={[
        {
          date: "2021-04-01",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-04-02",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-04-03",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-04-04",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-05-03",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-05-04",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-05-05",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
        {
          date: "2021-05-06",
          dots: [
            {
              color: "red",
              selectedDotColor: "red",
            },
          ],
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  calstrips: {
    height: 150,
    paddingTop: 10,
    paddingBottom: 50,
  },
});

export default CalStrip;
