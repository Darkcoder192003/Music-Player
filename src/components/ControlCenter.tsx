import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Text,TouchableOpacity } from 'react-native'
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Neomorph } from 'react-native-neomorph-shadows';


const ControlCenter = () => {

  const playBackState = usePlaybackState()
  const skipToNext = async () => {
    await TrackPlayer.skipToNext()
  }
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
  }
  const togglePlayback = async (playback : State | undefined) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play()
      }
      else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={[styles.container]}>
      {/* <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="step-backward" size={30} />
      </Pressable>
      <Pressable onPress={()=>togglePlayback(playBackState.state)}>
        <Icon
          style={[styles.icon, styles.playButton]}
          name={playBackState.state === State.Playing ? "pause-circle-o" :  "play-circle-o"}
          size={55}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="step-forward" size={30} color="#900" />
      </Pressable> */}


<Neomorph
  style={{
    shadowRadius: -6,
    borderRadius: 35,
    backgroundColor: '#00586b',
    width: 70,
    height: 70,
    display :'flex',
    justifyContent : 'center',
    alignItems: 'center'
  }}>
    <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="step-backward" size={30} />
      </Pressable>
  </Neomorph>
  <Neomorph
  style={{
    shadowRadius: -6,
    borderRadius: 35,
    backgroundColor: '#00586b',
    width: 70,
    height: 70,
    display :'flex',
    justifyContent : 'center',
    alignItems: 'center'
  }}>
    <Pressable onPress={()=>togglePlayback(playBackState.state)}>
        <Icon
          style={[styles.icon, styles.playButton]}
          name={playBackState.state === State.Playing ? "pause" :  "play"}
          size={35}
        />
        </Pressable>
  </Neomorph>

      <Neomorph
  style={{
    shadowRadius: -6,
    borderRadius: 35,
    backgroundColor: '#00586b',
    width: 70,
    height: 70,
    display :'flex',
    justifyContent : 'center',
    alignItems: 'center',
  }}>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="step-forward" size={30} color="#900" />
      </Pressable>
  </Neomorph>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    width : 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly"
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    // marginHorizontal: 114,
  },
});

export default ControlCenter
