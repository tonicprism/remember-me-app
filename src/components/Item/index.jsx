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
}) {
  return (
    <View style={styles.wrapper}>
      {/* BEGIN ITEM CONTENT */}
      <TouchableOpacity onPress={handlerModal}>
        {/* BEGIN ITEM HEADER */}
        <ItemHeader
          title={`Em ${timeToRemember} minutos`}
          iconName="md-time"
          color="#195C92"
          fontSize={30}
        />
        {/* END ITEM HEADER */}

        {/* BEGIN ITEM BODY */}
        <ItemBody style={styles.itemBodyContainer}>
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
            <Text style={styles.dateText}>{`Criado em ${createdAtDate} às ${createdAtHours}`}</Text>
          </View>
        </ItemBody>
        {/* END ITEM BODY */}
      </TouchableOpacity>
      {/* END ITEM CONTENT */}

      {/* BEGIN BUTTONS CONTAINER */}
      <View style={[styles.buttonsContainerItem]}>
        <Button
          iconFamily="AntDesign"
          iconName="checkcircleo"
          iconSize={20}
          iconColor="green"
          style={{ marginBottom: 9 }}
          onPress={confirmButton}
        />
        <Button
          iconFamily="EvilIcons"
          iconName="trash"
          iconSize={35}
          iconColor="red"
          style={{ marginBottom: 13 }}
          onPress={deleteButton}
        />
      </View>
      {/* END BUTTONS CONTAINER */}

      {/* BEGIN MODAL */}
      <Modal
        isVisible={visibleModal}
        onPress={handlerModal}
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: 10,
          padding: 20,
          paddingLeft: 10,
          marginTop: 2,
        }}
      >
        <ItemHeader title="Em 10 minutos" iconName="md-time" color="#fff" fontSize={25} />
        {/* BEGIN ITEM BODY */}
        <ItemBody style={{ flexDirection: 'column' }}>
          <Text>{itemId}</Text>
          <View style={styles.itemTextTitleContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="format-text"
              iconSize={30}
              iconColor="#ffffff"
            />
            <Text style={styles.descriptionTextTitle}>{titleOfMemory}</Text>
          </View>
          <View style={styles.itemTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="update"
              iconSize={20}
              iconColor="#ffffff"
              style={{ marginLeft: 5 }}
            />
            {/* [] O QUE FAZER -->'Criado em {date(dd/mm/aa)} às {time(hh/mm)}' */}
            <Text style={styles.dateText}>{`Criado em ${createdAtDate} às ${createdAtHours}`}</Text>
          </View>
          <Input
            keyboardType="default"
            maxLength={100}
            placeholder="Conteúdo da lembrança?"
            defaultValue={contentOfMemory}
            style={{ marginTop: 10, paddingLeft: 15, padding: 0 }}
          />
        </ItemBody>
        {/* END ITEM BODY */}

        <View style={styles.buttonsContainerModal}>
          <Button
            iconFamily="MaterialCommunityIcons"
            iconColor="#ffffff"
            iconSize={30}
            iconName="pencil"
            onPress={handlerModal}
            style={{ marginRight: 20 }}
          />
          <Button
            iconFamily="MaterialCommunityIcons"
            iconColor="#ffffff"
            iconSize={30}
            iconName="close"
            onPress={handlerModal}
          />
        </View>
      </Modal>
      {/* END MODAL */}
    </View>
  );
}
