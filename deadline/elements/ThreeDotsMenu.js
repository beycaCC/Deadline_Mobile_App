// ThreeDotsMenu.js
import React from 'react';
import { IconButton, Menu } from 'react-native-paper';

const ThreeDotsMenu = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleMenuSelect = (itemValue) => {
    navigation.navigate(itemValue);
    closeMenu(); // Close the menu after selecting an option
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      contentStyle={{ marginTop: 50 }}
      anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
    >
      <Menu.Item onPress={() => handleMenuSelect('SettingsPage')} title="Settings" />
      <Menu.Item onPress={() => handleMenuSelect('CompletedPage')} title="Completed" />
    </Menu>
  );
};

export default ThreeDotsMenu;
