import React from 'react';
import { ScrollView,Text } from 'react-native';
import Boat from './Boat';

const AllBoats = () => {
    return (
        <ScrollView>
            <Text>GetABoat - For Sale</Text>
            <Boat
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name="sailboat"
                image={require('../img/sea_ray.jpg')}
            />
            <Boat
                name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name="sailboat"
                image={require('../img/four_winns.jpg')}
            />
            <Boat
                name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family cruise."
                icon_name="sailboat"
                image={require('../img/flipper.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;
