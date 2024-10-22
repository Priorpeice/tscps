import React, { useEffect, useState } from "react";
import axios from "axios";
import ForbiddenRedirect from '../../handler/forbiddenRedirect';
import {
  MyPageContainer,
  Header,
  Sidebar,
  SidebarItem,
  Content,
  Section,
  SectionTitle,
  BasicInfo,
  ProfileImage,
  Info,
  Email,
  Verified,
  Button,
  PasswordSection,
  SkillsSection,
  Skills,
  Skill,
} from "../../styles/Mypage";
import { MemberInfo } from "../../interface/memberInfo";
import { BlueLogo,LogoLink } from "../../styles/logo";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const MyPage: React.FC = () => {
  const [member, setMember] = useState<MemberInfo | null >(null);
  const [isForbidden, setIsForbidden] = useState(false);
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken);
  const handleApiCall = async () => {
    if (!accessToken) {
      console.error("Access token not found in localStorage");
      return;
    }

    try {
      const response = await axiosInstance.get(`/member/details`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("API Response:", response.data.object);
      setMember(response.data.object);

    } catch (error:any) {
        if (error.response.status == 401) {
            setIsForbidden(true);
          } 
      console.error("Error fetching data:", error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []); // Runs once on component mount
  if (isForbidden) {
    // 403 Forbidden일 때 처리할 컴포넌트를 리턴
    return <ForbiddenRedirect />;
  }
  return (
    <MyPageContainer>
        <Header>
        <LogoLink to="/">
          <BlueLogo>CPS</BlueLogo>
        </LogoLink>
        </Header>
      <Sidebar>
        <SidebarItem active>계정 관리</SidebarItem>
        <SidebarItem>나의 활동</SidebarItem>
        <SidebarItem>문제 풀이 활동 기록</SidebarItem>
        <SidebarItem>MY 스쿨</SidebarItem>
        <SidebarItem>구매 내역</SidebarItem>
        <SidebarItem>이력서</SidebarItem>
        <SidebarItem>지원한 포지션</SidebarItem>
        <SidebarItem>받은 제안</SidebarItem>
        <SidebarItem>접수한 채용 프로그램</SidebarItem>
      </Sidebar>
      <Content>
        <Section>
          <SectionTitle>기본정보</SectionTitle>
          <BasicInfo>
            <Info>{member?.name}</Info>
          </BasicInfo>
        </Section>
        <Section>
          <SectionTitle>비밀번호</SectionTitle>
          <PasswordSection>
            <Info>
              <Email>{member?.email}</Email>
              <Verified>인증 완료</Verified>
            </Info>
          </PasswordSection>
        </Section>
        <Section>
          <SectionTitle>주요 기술 및 희망 직무</SectionTitle>
          <SkillsSection>
            <Skills>
              <Skill>서버/백엔드</Skill>
              <Skill>웹 풀스택</Skill>
              <Skill>인공지능(AI)</Skill>
            </Skills>
          </SkillsSection>
        </Section>
            <div>
              <Button>주요 기술 변경</Button>
              <Button>희망 직무 선택</Button>
            </div>
      </Content>
    </MyPageContainer>
  );
};

export default MyPage;
