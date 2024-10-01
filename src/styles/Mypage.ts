import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;
export const Sidebar = styled.div`
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #ddd;
`;

interface SidebarItemProps {
    active?: boolean;
  }
  
  export const SidebarItem = styled.div<SidebarItemProps>`
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
    ${({ active }) => active && `
      background-color: #e9f3fe;
      color: #007bff;
      font-weight: bold;
    `}
  `;
  
export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  margin-left: 20px;
  border-radius: 8px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Email = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Verified = styled.div`
  color: green;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const PasswordSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
`;

export const SkillsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Skill = styled.span`
  margin-bottom: 5px;
`;
