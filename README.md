# 스무디
## 프로젝트 주제
  * 운전중에 경로 탐색은 어렵고 불편합니다.
  * 선택한 시설 중 가까운 곳을 우선으로 빠르게 안내하는 서비스를 기획했습니다.
---
## 핵심 기능 - 빠른 길 찾기
* 기본 버튼(3개)
  * 주유소
  * 편의점
  * 화장실
* 선택한 장소를 가까운 경로순으로 목록을 띄웁니다.

* 사용자가 커스텀 가능하게 할 예정입니다.
---
## 진행 한 작업
* 23.06.26
  1. 뷰 페이지 제작
  2. 프로젝트 폴더링
* 23.06.27
  1. 뷰 페이지 제작
  2. 프로젝트 폴더링(적용 완료)
* 23.06.28
  1. 뷰 페이지 제작
  2. T-map API를 활용해 자신의 현재 위치를 맵으로 나타내기(완료)
  3. 리액트 라우터를 활용해 경로에 따라 페이지 컴포넌트를 바꿈(완료)
  4. PWA로 배포
* 23.06.29
  1. 와이어프레임을 바탕으로 뷰 페이지 제작(완료)
  2. T-map API를 활용해 출발지, 도착지의 경로를 그려내는 로직
* 23.06.30
  1. Context로 버튼 데이터 제공
  2. custom페이지에서 요소 선택후 데이터를 가지고, 변경 내용 적용 페이지로 이동
    - url 쿼리 파라미터로 가져감
  3. '예', '아니오' 선택하는 모달 생성
* 23.07.02
  1. custom 페이지에서 선택한 데이터 세개 모두 가지고 이동
    - name, image, vlaue 데이터 가지고 이동
---
### 진행중인 작업
```
  - 진행중인 작업 -
  1. T-map API를 활용해 출발지, 도착지의 경로를 그려내는 로직
```
### 진행이 필요한 작업
```
  1. 단축 버튼 편집 페이지 기능 구현
    - 편집을 하면 main페이지의 버튼 요소가 변경됨
    - 변경 사항을 유저의 데이터에 '저장'하는 로직
  2. PWA로 배포
```