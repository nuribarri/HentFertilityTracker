import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SimpleSurvey from "react-native-simple-survey";

const surveydetails = [
  {
    questionType: "Info",
    questionText:
      "Welcome to the React Native Simple Survey Example app! Tap next to continue",
  },
  {
    questionType: "TextInput",
    questionText: "Simple Survey supports free form text input",
    questionId: "favoriteColor",
    placeholderText: "Tell me your favorite color!",
  },
  {
    questionType: "NumericInput",
    questionText:
      "It also supports numeric input. Enter your favorite number here!",
    questionId: "favoriteNumber",
    placeholderText: "",
  },
  {
    questionType: "SelectionGroup",
    questionText:
      "Simple Survey also has multiple choice questions. What is your favorite pet?",
    questionId: "favoritePet",
    options: [
      {
        optionText: "Dogs",
        value: "dog",
      },
      {
        optionText: "Cats",
        value: "cat",
      },
      {
        optionText: "Ferrets",
        value: "ferret",
      },
    ],
  },
  {
    questionType: "MultipleSelectionGroup",
    questionText: "Select two or three of your favorite foods!",
    questionId: "favoriteFoods",
    questionSettings: {
      maxMultiSelect: 3,
      minMultiSelect: 2,
    },
    options: [
      {
        optionText: "Sticky rice dumplings",
        value: "sticky rice dumplings",
      },
      {
        optionText: "Pad Thai",
        value: "pad thai",
      },
      {
        optionText: "Steak and Eggs",
        value: "steak and eggs",
      },
      {
        optionText: "Tofu",
        value: "tofu",
      },
      {
        optionText: "Ice cream!",
        value: "ice crem",
      },
      {
        optionText: "Injera",
        value: "injera",
      },
      {
        optionText: "Tamales",
        value: "tamales",
      },
    ],
  },
];

function Survey() {
  return (
    <View style={styles.container}>
      <SimpleSurvey
        survey={surveydetails}
        containerStyle={styles.surveyContainer}
        selectionGroupContainerStyle={styles.selectionGroupContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "70%",
    maxWidth: "90%",
    alignItems: "stretch",
    justifyContent: "center",

    elevation: 20,
    borderRadius: 10,
    flex: 1,
  },
  answersContainer: {
    width: "90%",
    maxHeight: "20%",
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 20,
    borderRadius: 10,
  },
  surveyContainer: {
    width: "auto",
    alignSelf: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: "center",
    padding: 5,
    flexGrow: 0,
  },
  selectionGroupContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignContent: "flex-end",
  },
  background: {
    flex: 1,
    minHeight: 800,
    maxHeight: 800,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: "rgba(204,204,204,1)",
    backgroundColor: "white",
    borderRadius: 10,

    padding: 10,
    textAlignVertical: "top",
    marginLeft: 10,
    marginRight: 10,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: "rgba(204,204,204,1)",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    marginLeft: 10,
    marginRight: 10,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Survey;
