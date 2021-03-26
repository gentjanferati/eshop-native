import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import ProductList from './ProductList';
import {Container , Header, Icon, Item, Input, Text} from 'native-base';
import SearchedProduct from './SearchedProducts';


const data = require('../../assets/data/products.json');
 


const ProductContainer = ()=>{
    const [products, setProducts ] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return ()=>{
            setProducts([])
            setProductsFiltered([])
            setFocus()
        }
    }, [])
    const searchProduct = (text) =>{
        setProductsFiltered(
            products.filter((i)=> i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    return(
        <Container>      
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input 
                    placeHolder="Search"
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                    />
                </Item>
            </Header>  
            {focus == true ? (
                <SearchedProduct
                    productsFiltered={productsFiltered}
                />
            ) : (
                <View style={styles.container}>

            <View style={styles.listContainer}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <ProductList
                key={item.id}
                item={item}/>}
                keyExtractor = {item => item.name}
            />
            </View>
        </View>
            )
            }
            
        </Container>

    )
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro'
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
})

export default ProductContainer; 