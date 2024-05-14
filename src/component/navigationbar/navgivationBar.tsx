import React from 'react';
import { NavigationBar, NavigationLink } from '../../styles/naviationBar'; // styles 파일에서 NavigationBar와 NavigationLink import

// NavigationBar 컴포넌트 정의
const NavigationBarComponent: React.FC = () => {
    return (
        <NavigationBar>
            {/* NavigationLink 컴포넌트를 사용하여 네비게이션 링크를 생성합니다. */}
            <NavigationLink to="../ide">IDE </NavigationLink>
            <NavigationLink to="../Problems"> Problems </NavigationLink>
            <NavigationLink to="../Verification"> Verification</NavigationLink>
        </NavigationBar>
    );
}

export default NavigationBarComponent;
