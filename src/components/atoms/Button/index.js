import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from "./styles";

const Button = ({ disabled, onPress, children }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={styles.buttonSave}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    );
}

export default Button;