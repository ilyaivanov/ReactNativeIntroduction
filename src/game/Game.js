import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Cell from './Cell';
import {cellHeight, padding} from './const';
import flipCell from './flipCell';
import {cross, diamond, random, square} from './levels';

export default class App extends Component {
  state = {
    rows: cross,
  };

  updateCell = (row, column) =>
    this.setState({rows: flipCell(this.state.rows, row, column)});

  renderCell = (rowIndex, columnIndex, isEnabled) => (
    <Cell style={{height: cellHeight}}
          key={columnIndex}
          enabled={isEnabled}
          onPress={() => this.updateCell(rowIndex, columnIndex)}/>
  );

  renderRow = (row, rowIndex) => (
    <View style={s.row} key={rowIndex}>
      {row.map((cell, columnIndex) => this.renderCell(rowIndex, columnIndex, cell === 1))}
    </View>
  );

  render() {
    return (
      <View style={s.container}>
        <View style={s.buttons}>
          <Button title="Square" onPress={() => this.setState({rows: square})}/>
          <Button title="Cross" onPress={() => this.setState({rows: cross})}/>
          <Button title="Diamond" onPress={() => this.setState({rows: diamond})}/>
          <Button title="Random" onPress={() => this.setState({rows: random()})}/>
        </View>
        <View>
          {this.state.rows.map(this.renderRow)}
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding,
  },
  row: {
    flexDirection: 'row',
  },
});
