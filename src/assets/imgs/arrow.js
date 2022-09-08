import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';

import colors from '../../constants/colors';

const ArrowRight = ({ width = 30, height = 10, color = colors.text }) => {

    return (
        <Svg width={width} height={height} viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.119141" y="4.80647" width="26" height="1" rx="0.5" fill={color} />
            <Path d="M27.6709 4.49233C28.3376 4.87723 28.3376 5.83948 27.6709 6.22438L23.9209 8.38944C23.2542 8.77434 22.4209 8.29322 22.4209 7.52342V3.19329C22.4209 2.42349 23.2542 1.94236 23.9209 2.32726L27.6709 4.49233Z" fill={color} />
        </Svg>

    )
};

export default ArrowRight;