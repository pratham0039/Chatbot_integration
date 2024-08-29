import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const Chatbot = () => {
  const [iframeVisible, setIframeVisible] = React.useState(false);

  const toggleIframe = () => {
    setIframeVisible(!iframeVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={toggleIframe}>
        <Text style={styles.fabIcon}>💬</Text>
      </TouchableOpacity>
      {iframeVisible && (
        <View style={styles.iframeContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleIframe}>
            <Text style={styles.closeButtonText}>✖</Text>
          </TouchableOpacity>
          <WebView
            source={{ uri: 'https://your-external-chatbot-url' }}
            style={styles.iframe}
          />
        </View>
      )}
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#ff5a5f',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  fabIcon: {
    color: 'white',
    fontSize: 24,
  },
  iframeContainer: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: width * 0.9,
    height: height * 0.7,
    maxHeight: 500,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#999',
  },
  iframe: {
    flex: 1,
  },
});

export default Chatbot;
