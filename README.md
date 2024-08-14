# TsCPS

## (TypeScript Coding Practice Service)

## 💡 프로젝트 소개

- CPS 프로젝트에 FrontEnd 파트입니다.
- BackEnd : https://github.com/Priorpeice/cps
- LlmServer : https://github.com/Priorpeice/llamaServer

## ⚙️ 프로젝트 개발 환경

- 프로그래밍 언어 : JavaScript, TypeScript
- 개발도구: Visual Studio Code
- 프레임워크 및 라이브러리: React, AceEditor,Styled-components

## ❓ 왜 프로젝트 이름이 TsCPS인가?

- 기존 프로젝트를 JavaScript만으로 진행을 했었습니다.

이때 오류가 발생을 캐치하는 것과 발생 시 디버깅할 때 애를 많이 먹었습니다. 따라서 정적으로 타입을 제한하여 오류를  배제하고자 TS를 프로젝트에 적용해보았습니다. 

- TypeScript의 재사용성

Ts가 Js에 비해 코드 재사용성이 높다고 생각합니다. Interface를 만들어 사용한다는 장점이 있는데 숙련도를 그만큼 향상시킬수록 빛을 바랄것으로 전망됩니다. 

## 📚 기능

- 메인 화면
    - 메인화면에서는 ide 와 문제 게시판 , 코드 검증 기능 , 로그인 기능들로 이동할 수 있습니다.
    
   ![MAIN](https://github.com/user-attachments/assets/983f0709-ce21-486b-9e11-b285df14ea12)
    
- 코드 실행 및 채점 기능
    - AceEditor를 사용하여 ide 화면을 구현하였으며 오른쪽 input 창을 통해 사용자 입력도 받을수 있게 구현하였습니다. 언어의 경우는 Java,C,C++,Python, Dart 언어를 제공하고 있습니다.
        
        ![IDE](https://github.com/user-attachments/assets/76d79b14-73c9-4a94-bfc6-4d047bda01e8)
        
    
    - 코드 제출의 경우에는 별도의 ide를 두어서 제출 전 실행하여 확인 해볼수도 있습니다.
        
        ![submit](https://github.com/user-attachments/assets/b1541315-b8b7-40aa-99f4-61db324e0e95)
        
- 게시판 기능
    - 게시판은 문제 게시판과 커뮤니티 게시판이 있습니다.
    
    문제 게시판의 게시물은 아래 그림과 같습니다.
    
    ![problem](https://github.com/user-attachments/assets/601dc35d-2254-4fca-9626-d4ad665d88f9)
    
- 로그인 기능
    - 로그인 화면에서는 로그인과 회원가입으로 이동할 수 있는 기능이 있습니다.
    
    로그인 폼은 모달로써 구현이 되었습니다. 로그인 페이지로 이동하는 것이 아닌 모달을 띄움으로써 로그인을 꼭 하고 이용하도록 강조하는 역활로 사용되었습니다.
    
    ![login](https://github.com/user-attachments/assets/4db77e24-13fa-40a0-93bc-87e3f086625a)
    
- 코드 분석 기능
    
    사용자의 코드를 입력받아 WAS에 요청합니다.
