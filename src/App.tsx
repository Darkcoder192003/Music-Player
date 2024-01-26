
import { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Button
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { setupPlayer,addTrack } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): React.JSX.Element {
  const [isPlayerReady,setIsPlayerReady] = useState(false)

  async function setUp() {
    let isSetUp = await setupPlayer()
    const queue = await TrackPlayer.getQueue();
    if(isSetUp && queue.length <= 0) {
      await addTrack();
    }
    setIsPlayerReady(isSetUp);
    
  }
  useEffect(()=>{
   setUp () 
  },[])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#bbb"/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={"light-content"} backgroundColor={'#054c5b'} />
    <MusicPlayer/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
