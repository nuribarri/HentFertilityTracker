import React from "react";
import { Alert, StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";

import { ChevListItem } from "../components/lists";

import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "Bluetooth",
    icon: {
      name: "bluetooth",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Notifications",
    icon: {
      name: "phone-incoming-outline",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/hentLogo.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              toggle={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              //onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Connect to a New Device"
        IconComponent={<Icon name="bluetooth" backgroundColor="#6e6969" />}
        onPress={() =>
          Alert.alert(
            "Begin Bluetooth Pairing",
            "",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          )
        }
      />
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
