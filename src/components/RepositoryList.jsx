import { FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import theme from '../theme';
import TextInput from './TextInput';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  picker: {
    marginHorizontal: theme.paddings.primary,
  },
  pickerInfo: {
    color: theme.colors.placeholder,
  },
  pickerItem: {
    color: theme.colors.textPrimary,
  },
  filter: {
    backgroundColor: 'white',
    marginHorizontal: theme.paddings.primary,
    marginTop: theme.paddings.primary,
  },
});

const orders = {
  latest: {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  },
  highestRated: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
  },
  lowestRated: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
  },
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { order, setOrder, filter, setFilter } = this.props;

    return (
      <>
        <TextInput
          placeholder='Filter'
          style={styles.filter}
          value={filter}
          onChangeText={(value) => setFilter(value)}
        />
        <Picker
          selectedValue={order}
          onValueChange={(value) => setOrder(value)}
          style={styles.picker}>
          <Picker.Item
            label='Select an item...'
            enabled={false}
            style={styles.pickerInfo}
          />
          <Picker.Item
            label='Latest repositories'
            value={orders.latest}
            style={styles.pickerItem}
          />
          <Picker.Item
            label='Highest rated repositories'
            value={orders.highestRated}
            style={styles.pickerItem}
          />
          <Picker.Item
            label='Lowest rated repositories'
            value={orders.lowestRated}
            style={styles.pickerItem}
          />
        </Picker>
      </>
    );
  };

  // Get the nodes from the edges array
  getRepositoryNodes = () => {
    const { repositories } = this.props;
    return repositories ? repositories.edges.map((edge) => edge.node) : [];
  };

  render() {
    return (
      <FlatList
        data={this.getRepositoryNodes()}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable onPress={() => this.props.onPress(item.id)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(orders.latest);
  const [filter, setFilter] = useState('');
  const [searchKeyword] = useDebounce(filter, 500);
  const { repositories } = useRepositories(order, searchKeyword);

  const onPress = (id) => {
    navigate(`/${id}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPress}
      order={order}
      setOrder={setOrder}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
