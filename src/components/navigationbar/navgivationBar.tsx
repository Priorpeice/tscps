import React from 'react';
import { NavigationBar, NavigationLink } from '../../styles/naviationBar'; // styles 파일에서 NavigationBar와 NavigationLink import
import { NavLink } from 'react-router-dom';
// NavigationBar 컴포넌트 정의
const NavigationBarComponent: React.FC = () => {
    return (
        <NavigationBar>
            <NavigationLink to="../ide">IDE    </NavigationLink>
            <NavigationLink to="../Problems">     Problems</NavigationLink>
            <NavigationLink to="../Boards">     Boards   </NavigationLink>
            <NavigationLink to="../Verification">     Verification   </NavigationLink>
        </NavigationBar>
    );
}

export default NavigationBarComponent;
