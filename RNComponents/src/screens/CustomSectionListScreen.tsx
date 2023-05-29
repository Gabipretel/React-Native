import {View, Text, SectionList} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const CustomSectionListScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <SectionList
        sections={casas}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={`total de casas ${casas.length}`} />
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        stickySectionHeadersEnabled
        renderSectionFooter={({section}) => (
          <View>
            <HeaderTitle title={` Existen ${section.data.length}`} />
          </View>
        )}
        // SectionSeparatorComponent={ ()=> <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSectionListScreen;
