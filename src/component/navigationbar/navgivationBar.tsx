import React from 'react';
import { Link } from 'react-router-dom';

// NavigationBar 컴포넌트 정의
const NavigationBar: React.FC = () => {
    return (
        <div className="navigation-bar">
            {/* Link 컴포넌트를 사용하여 네비게이션 링크를 생성합니다. */}
            <Link to="../ide">IDE </Link>
            <Link to="../Problems">Problems </Link>
            <Link to="../Verification">Verification</Link>
        </div>
    );
}

export default NavigationBar;
