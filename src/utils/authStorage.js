import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
    this.accessTokenKey = `${this.namespace}:accessToken`;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(this.accessTokenKey);
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.accessTokenKey, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.accessTokenKey);
  }
}

export default AuthStorage;
