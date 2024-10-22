import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, image }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                <Icon name={icon_name} size={20} color="#B23B23" /> {name}
            </Text>
            <Image
                source={image}
                style={{ width: '100%', height: 250, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 16, color: '#555' }}>
                {description}
            </Text>
        </View>
    );
};

export default Boat;
