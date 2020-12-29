import AsyncStorage from '@react-native-community/async-storage'

class PhotoStorage {
  // save item to async storage. first param being string 
  // then 2nd param will be the data wanting to be saved
  saveItem(itemName, item) {
    return AsyncStorage.setItem(itemName, JSON.stringify(item))
      .catch(err => console.log('PhoneStorage: saveItem: Error:', err))
  }

  // getting item from async storage by name saved with
  retrieveItem(itemName) {
    return AsyncStorage.getItem(itemName)
      .then(retrievedItem => JSON.parse(retrievedItem))
      .catch(err => console.log('PhoneStorage: retrieveItem: Error:', err))
  }

  // deleting item from async storage by name saved with
  deleteItem(itemName) {
    return AsyncStorage.removeItem(itemName)
      .catch(err => console.log('PhoneStorage: deleteItem: Error:', err))
  }

  // clearing all async storage items
  clearAllItems() {
    return AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .catch(err => console.log('PhoneStorage: clearAllItems: Error:', err))
  }

  // getting all items in async storage
  getAllItems() {
    return AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiGet(keys))
      .then(items => {
        const newObj = {}
        items.forEach(item => {
          newObj[item[0]] = JSON.parse(item[1])
        })
        return newObj
      }).catch(err => console.log('PhoneStorage: getAllItems: ERROR:', err))
  }
}

export default new PhotoStorage()
