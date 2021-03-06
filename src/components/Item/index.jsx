import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import styles from './styles';

/***
 * @params
 *
 */

function removedButton() {}

function notRemovedButton() {}
export default function Item({
  itemId,
  timeToRemember,
  titleOfMemory,
  contentOfMemory,
  createdAtDate,
  createdAtHours,
  handlerModal,
  visibleModal,
  confirmButton,
  deleteButton,
  removed,
}) {
  return removed ? (
    <View style={styles.wrapper}>
      {/* BEGIN ITEM CONTENT */}
      <TouchableOpacity onPress={handlerModal}>
        {/* BEGIN ITEM HEADER */}
        <ItemHeader
          title={`In ${timeToRemember} minutes`}
          iconFamily="EvilIcons"
          iconName="trash"
          fontSize={35}
          color="#195C92"
          onPress={deleteButton}
        />
        {/* END ITEM HEADER */}

        {/* BEGIN ITEM BODY */}
        <ItemBody style={styles.itemBodyContainer}>
          {/*<Text>{itemId}</Text>*/}
          <View style={styles.titleTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="format-text"
              iconSize={30}
              iconColor="#ffffff"
            />
            <Text style={styles.descriptionTextTitle}>{titleOfMemory}</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="update"
              iconSize={20}
              iconColor="#ffffff"
              style={{ marginLeft: 5 }}
            />
            {/* [] O QUE FAZER --> Criado em {date(dd/mm/aa)} às {time(hh/mm)} */}
            <Text style={styles.dateText}>{`${createdAtDate} ${createdAtHours}`}</Text>
          </View>
        </ItemBody>

        {/* END ITEM BODY */}
      </TouchableOpacity>

      {/* END ITEM CONTENT */}
    </View>
  ) : (
    <View style={styles.wrapper}>
      {/* BEGIN ITEM CONTENT */}
      <TouchableOpacity onPress={handlerModal}>
        {/* BEGIN ITEM HEADER */}
        <ItemHeader
          title={`In ${timeToRemember} minutes`}
          iconFamily="AntDesign"
          iconName="checkcircleo"
          fontSize={30}
          color="#195C92"
          onPress={confirmButton}
        />
        {/* END ITEM HEADER */}

        {/* BEGIN ITEM BODY */}
        <ItemBody style={styles.itemBodyContainer}>
          {/*<Text>{itemId}</Text>*/}
          <View style={styles.titleTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="format-text"
              iconSize={30}
              iconColor="#ffffff"
            />
            <Text style={styles.descriptionTextTitle}>{titleOfMemory}</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="update"
              iconSize={20}
              iconColor="#ffffff"
              style={{ marginLeft: 5 }}
            />
            {/* [] O QUE FAZER --> Criado em {date(dd/mm/aa)} às {time(hh/mm)} */}
            <Text style={styles.dateText}>{`${createdAtDate} ${createdAtHours}`}</Text>
          </View>
        </ItemBody>

        {/* END ITEM BODY */}
      </TouchableOpacity>
      {/* END ITEM CONTENT */}
    </View>
  );
}
