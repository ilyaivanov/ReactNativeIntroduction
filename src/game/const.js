import {Dimensions} from 'react-native';
import {cross} from './levels';

export const padding = 2;
const itemsInRow = cross[0].length;
export const cellHeight = (Dimensions.get('window').width - (padding * (itemsInRow * 2 + 2))) / itemsInRow;
