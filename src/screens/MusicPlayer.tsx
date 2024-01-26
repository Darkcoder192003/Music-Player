import React, {useState} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import { playListData } from '../constant';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';
import { getTrack } from 'react-native-track-player/lib/trackPlayer';
import LinearGradient from 'react-native-linear-gradient';



const {width} = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>()
    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        // switch (event.type) {
        //     case Event.PlaybackActiveTrackChanged:
        //         const playingTrack = await TrackPlayer.getTrack(event.index)
        //         if (playingTrack) {
        //           setTrack(playingTrack);
        //           console.log("Haan bhai track change ho gya firse")
        //         } else {
        //           console.error("Error fetching track information");
        //         }
        //         break;
        
        // }
        switch (event.type) {
          case Event.PlaybackActiveTrackChanged:
              const playingTrack = await TrackPlayer.getActiveTrack()
              setTrack(playingTrack)
              break;
      
      }
    })

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (
    <LinearGradient colors={['#054c5b','#0b023c']} style={{height: "100%"}}  >
    <View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        />

        <SongInfo track={track}/>
        <SongSlider />
        <ControlCenter />
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderColor : "#D7E1F3",
      borderWidth: 10,
      position : 'relative',
      overflow : "hidden"
    },
    albumArtImg: {
      height: '100%',
      resizeMode: 'contain',
    },
  });
  

export default MusicPlayer
