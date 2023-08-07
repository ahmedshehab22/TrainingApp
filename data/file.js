import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { readString } from 'react-native-csv'
export async function _pickDocument() {
  let result = await DocumentPicker.getDocumentAsync({})
  alert(result.uri)
  console.log(result)
}
