import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {FabButton} from '../components';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends MaterialTopTabScreenProps<any, any> {
  title: string;
  uri?: string;
  text?: string;
}

export const RecipeScreen = ({
  navigation,
  title = 'dolor sit amet',
  uri = 'https://images.unsplash.com/photo-1693131819413-1acce151d69a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  // uri,
  text,
}: // text = 'lorem ipsum',
Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {/* TITULO */}
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" color="#000" size={50} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title} allowFontScaling={true}>
              {title}
            </Text>
          </View>
        </View>
        {/* IMAGEN */}
        {uri && (
          <View style={styles.imageContainer}>
            <Image source={{uri}} style={styles.image} />
          </View>
        )}
        {/* TEXTO */}
        {/* {text && ( */}
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>{text}</Text> */}
          <Text style={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            porro, nesciunt quasi nisi commodi temporibus animi facilis
            voluptatibus molestias culpa architecto blanditiis quae ipsum! Porro
            sit praesentium dicta neque impedit! Quisquam, molestiae qui eveniet
            assumenda sint adipisci accusamus. In, impedit. Sit consequatur
            beatae dicta voluptates? Atque quaerat corrupti, quod reiciendis
            neque repellendus quo! Odio, sapiente dolor vitae necessitatibus
            voluptates quod. Fugiat odio ipsa neque deserunt omnis eligendi
            distinctio labore fugit repudiandae, incidunt adipisci? Laborum et
            veniam delectus quia, aperiam maiores odio cupiditate dignissimos
            eaque quo aliquid magni eius ducimus impedit. Mollitia quos corrupti
            similique praesentium quibusdam enim nihil laudantium tempora.
            Commodi, quos laborum odio ex maiores nesciunt eos, quasi similique
            ipsa aliquid qui omnis, recusandae non eius nostrum reprehenderit
            cum! Totam ab dicta quod quibusdam eaque similique harum quidem
            necessitatibus qui? Sequi ex iste assumenda voluptate nisi maxime
            exercitationem facere dicta excepturi! Natus reprehenderit maiores
            quasi iste in optio consequuntur.
          </Text>
        </View>
        {/*  )} */}
      </ScrollView>
      {/* FAB */}
      <FabButton
        route="recipe"
        onPress={() => navigation.navigate('NewOrExistingRecipe')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    flex: 2,
    flexDirection: 'row',
  },
  iconContainer: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginLeft: 15,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000000aa',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 15,
  },
  titleContainer: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 5,
    paddingLeft: 35,
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    minHeight: 800,
    width: '100%',
  },
  textContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 30,
    color: '#000',
    fontWeight: '600',
  },
});
