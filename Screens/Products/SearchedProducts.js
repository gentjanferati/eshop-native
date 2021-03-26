import React from 'react';
import { View, StyleSheet} from 'react-native';
import {Content, left, Body, ListItem , Thumbnail, Text} from 'native-base';

const SearchedProduct = (props) =>{
    const {productsFiltered} = props;
    return (
        <Content>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => {
                    <ListItem>
                    key={item._id.$oid}
                    avatar
                    <Left>
                        <Thumbnail
                        source={{uri: item.image ?
                            item.image: "https://findicons.com/files/icons/577/refresh_cl/256/box_empty.png" 
                        }}/>
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note >{item.description}</Text>
                    </Body>
                    </ListItem>
                })
            ): (
                <View>
                    <Text style={{alignSelf: 'center'}}>
                        No products match the selected criteria
                    </Text>
                </View>
            )
            
            }
        </Content>
    );

};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchedProduct;