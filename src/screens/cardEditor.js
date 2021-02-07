import React, { useState, useEffect, useRef, useContext } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, TouchableWithoutFeedback, Image, Button } from "react-native";
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import db from '../../assets/test.json'
import {useLanguages} from '../../App'
import {useDispatch, useSelector} from 'react-redux'
import ar from '../lang/ar.json'
import * as ActionTypes from '../redux/actions/actionTypes'
import { ColorPicker } from 'react-native-color-picker'
import {LocalizationContext} from '../../App'

const CardEditor = (props) => {

  const dispatch = useDispatch()

  const state = useSelector(store => store.UndoRedo)

  const pan = useRef(new Animated.ValueXY()).current;
  const rotZ = useRef(new Animated.Value(0)).current;
  const rotX = useRef(new Animated.Value(0)).current;
  const rotY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.ValueXY()).current;

  const [data, setData] = useState([])
  const [editItem, setEditItem] = useState(-1)
  const [action, setAction] = useState('default')
  const [slider, setSlider] = useState(-1)


  useEffect(() => {
    const copy = JSON.parse(JSON.stringify(db))
    setData(copy)
    //dispatch({type:ActionTypes.INITIALIZETRACK, payload:copy})
    return () => {
      setData([])
    }
  }, [])

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        setAction('movement')
      },
      onPanResponderMove:(e, g) =>{
        pan.x.setValue(g.dx)
        pan.y.setValue(g.dy)
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  const rotResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        rotZ.setOffset(rotZ._value)
        setAction('rotation')
      },
      onPanResponderMove:(e, g) =>{
        rotZ.setValue(g.dx)
      },
      onPanResponderRelease: () => {
        rotZ.flattenOffset();
      }
    })
  ).current;

    const rotXResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        rotX.setOffset(rotX._value);
        setAction('rotationX')
      },
      onPanResponderMove:(e, g) =>{
        rotX.setValue(g.dx)
      },
      onPanResponderRelease: () => {
        rotX.flattenOffset();
      }
    })
  ).current;

    const rotYResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        rotY.setOffset(rotY._value);
        setAction('rotationY')
      },
      onPanResponderMove:(e, g) =>{
        rotY.setValue(g.dx)
      },
      onPanResponderRelease: () => {
        rotY.flattenOffset();
      }
    })
  ).current;

  const scaleResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        scale.setOffset({
          x: scale.x._value,
          y: scale.y._value
        });
        setAction('scalling')
      },
      onPanResponderMove:(e, g) =>{
        scale.x.setValue(g.dx)
        scale.y.setValue(g.dy)
      },
      onPanResponderRelease: () => {
        scale.flattenOffset();
      }
    })
  ).current;

  const rotate = rotZ.interpolate({
    inputRange:[-360,0,360],
    outputRange:['360deg', '0deg', '-360deg'],
  })

  const rotateX = rotX.interpolate({
    inputRange:[-360,0,360],
    outputRange:['360deg', '0deg', '-360deg'],
  })

  const rotateY = rotY.interpolate({
    inputRange:[-360,0,360],
    outputRange:['360deg', '0deg', '-360deg'],
  })

  const scaleX = scale.x.interpolate({
    inputRange:[0, 400],
    outputRange:[1, 5],
  })

  const scaleY = scale.y.interpolate({
    inputRange:[0, 400],
    outputRange:[1, 5],
  })

const choose = (index) => {
  pan.x.setValue(data[index].style.transform[0].translateX)
  pan.y.setValue(data[index].style.transform[1].translateY)
  scale.x.setValue(data[index].scaleX)
  scale.y.setValue(data[index].scaleY)
  rotZ.setValue(0-data[index].style.transform[2].rotate.split('d')[0])
  rotX.setValue(data[index].rotXX)
  rotY.setValue(data[index].rotYX)
setAction('default')
setEditItem(index)
}

const endMove = (index) => {
  data[index].style.transform[0].translateX = pan.x._value
  data[index].style.transform[1].translateY = pan.y._value
  const copy1 = JSON.parse(JSON.stringify(data))
  dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
  setAction('default')
}

  const endScale = (index) => {
    data[index].scaleX = scale.x._value
    data[index].scaleY = scale.y._value
    data[index].style.transform[5].scaleX = scale.x._value/100+1
    data[index].style.transform[6].scaleY = scale.y._value/100+1
    const copy1 = JSON.parse(JSON.stringify(data))
    dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
    setAction('default')
}

  const endrotate = (index) => {
    data[index].style.transform[2].rotate = (-rotZ._value)+'deg'
    data[index].rotX = rotZ._value
    const copy1 = JSON.parse(JSON.stringify(data))
    dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
    setAction('default')
}

  const endrotateX = (index) => {
    data[index].style.transform[3].rotateX = (-rotX._value)+'deg'
    data[index].rotXX = rotX._value
    const copy1 = JSON.parse(JSON.stringify(data))
    dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
    setAction('default')
}

  const endrotateY = (index) => {
    data[index].style.transform[4].rotateY = (-rotY._value)+'deg'
    data[index].rotYX = rotY._value
    const copy1 = JSON.parse(JSON.stringify(data))
    dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
    setAction('default')
}

  const remove = (index) => {
    setData(data.filter(item => item.id !=index))
    setEditItem(-1)
    const copy1 = JSON.parse(JSON.stringify(data))
    dispatch({type:ActionTypes.UPDATETRACK, payload:copy1})
    setAction('default')
  }

  const renderView = (item, index) => {
    return(
        <Animated.View
          key={index}
          onTouchEnd={() => {
            if(action == 'movement'){
              endMove(index)
            }
            }}
          {...panResponder.panHandlers}
          style={[
            {
              ...item.style,
              transform:[
                {translateX:pan.x},
                {translateY:pan.y},
                {rotateZ:rotate},
                {rotateX:rotateX},
                {rotateY:rotateY},
                {scaleX:scaleX},
                {scaleY:scaleY}],
              backgroundColor:'gray'}
          ] }>
          {item.type == 'image' ?
            <Animated.Image
              source={{uri:item.uri}}
              style={{
                height:item.style.height, 
                width:item.style.width,
                borderWidth:1,
                borderColor:'white',
              }}
              />
            :
            <Text style={{"height":item.style.height}}>{item.text}</Text>
          }
        </Animated.View>
    )
  }

  const renderButtons = (index) => {
    const item = data[index]
    return(
      <View 
      style={{flexDirection:'row', position:'absolute', bottom:10}}>
      <View
        onTouchStart={() => {remove(item.id)}}
        //style={{position:'absolute', top:-20, left:-20}}
        >
        <Icon name='close-thick' size={24} />
      </View>
      {slider == 0 && <Slider
        style={{width: 250, height: 40}}
        minimumValue={-90}
        maximumValue={90}
        value={rotX._value}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(v) => rotX.setValue(v)}
        onSlidingComplete={() => endrotateX(index)}
      />}
      {slider == 1 &&<Slider
        style={{width: 250, height: 40}}
        minimumValue={-90}
        maximumValue={90}
        value={rotY._value}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(v) => rotY.setValue(v)}
        onSlidingComplete={() => endrotateY(index)}
      />}
      {slider == 2 &&<Slider
        style={{width: 250, height: 40}}
        minimumValue={-90}
        maximumValue={90}
        value={rotZ._value}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(v) => rotZ.setValue(v)}
        onSlidingComplete={() => endrotate(index)}
      />}
      <View>
        <Icon onPress={() => setSlider(0)} name='axis-y-rotate-counterclockwise' size={24} />
        <Text>rotate x</Text>
      </View>
      <View>
        <Icon onPress={() => setSlider(1)} name='axis-z-rotate-counterclockwise' size={24} />
        <Text>rotate y</Text>
      </View>
      <View>
        <Icon onPress={() => setSlider(2)} name='rotate-left' size={24} />
        <Text>rotate z</Text>
      </View>
      <View
        {...scaleResponder.panHandlers}
        onTouchEnd={() => endScale(index)}
        //style={{position:'absolute', bottom:-20, right:-20}}
        >
        <Icon name='arrow-all' size={24} />
      </View>
    </View>
    )
  } 

  const render = (item, index) =>{
      return(
        <View key={index} style={[
          {...item.style, 
            transform:[
            {translateX:item.style.transform[0].translateX},
            {translateY:item.style.transform[1].translateY},
            {rotateZ:item.style.transform[2].rotate},
            {rotateX:item.style.transform[3].rotateX},
            {rotateY:item.style.transform[4].rotateY},
            {scaleX:item.style.transform[5].scaleX},
            {scaleY:item.style.transform[6].scaleY},
          ]}
        ]}>
            <TouchableWithoutFeedback onPress={() => choose(index)}>
                {item.type == 'image' ?
                  <Image
                    source={{uri:item.uri}}
                    style={{
                      height:item.style.height,
                      width:item.style.width
                    }}
                    />
                  :
                  <Text style={{"height":item.style.height}}>{item.text}</Text>
                }
            </TouchableWithoutFeedback>
        </View>
      )
  }

  const canUndo = state.past.length > 0
  const canRedo = state.future.length > 0 

  const undo = () =>{
    dispatch({type:ActionTypes.UNDO})
    const copyData = JSON.parse(JSON.stringify(state.present))
    setData(copyData)
    setEditItem(-1)
  }

  const redo = () =>{
    dispatch({type:ActionTypes.REDO})
    const copyData = JSON.parse(JSON.stringify(state.present))
    setData(copyData)
    setEditItem(-1)
  }

  const {t, locale, setLocale} = useContext(LocalizationContext)
  return (
    <View style={{...styles.container }}>
      {data.map((item, index) => {
        if(editItem == index){
          return renderView(item, index)
        }
        return render(item, index)
        })
      }
      {editItem != -1 ? renderButtons(editItem) : null}
      <Button title='undo' disabled={!canUndo} onPress={() =>undo()} />
      <Button title='redo' disabled={!canRedo} onPress={() =>redo()} />
      <Button title='change language' onPress={() => setLocale(locale=='en'?'ar':'en')} />
      <ColorPicker style={{flex:1}} />
      <Text>{t('hello')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'orange'
  }
});

export default CardEditor;