# html

## 학습 내용

- Contents

  - Text contents
  - Image, Video, Audio contents
    -Embed contents

- Structure

## HTMl Introduction

- Hyper Test Markup Language
- Html을 사용해서 웹페이지에 콘텐츠와 구조를 표시

## HTML Basic

```
<!DOCTYPE html>: 문서(웹페이지) 타입(종류) - 버전(HTML5)
<html>: 웹페이지 전체 영역
  <head>: 웹페이지의 추가 정보, 타이틀, 파일 임포트
    <title></title>
  </head>

  <body>: 웹페이지의 본문 영역 - 웹페이지의 모든 콘텐츠 표시
  </body>

</html>
```

## HTML Syntax

- Tag를 사용해서 Element를 표시/표현

```
<tag>contents</tag>: 시작태그, 종료태그로 구성

<tag>: 시작 태그만 존재하는 경우  빈 요소(Empty Element)
```

-포함관계(Nested Element)
-Tag 영역 안에 다른 Tag가 포함되는 것

- 포함하는 요소: 조상요소(ancestor), 부모요소(parent)
- 포함되는 요소: 자손요소(descendant), 자식요소(child)

```
<html>
  <body>
    <h1>큰 제목</h1>
    <p>단락</p>
  </body>
</html>

html 기준
- 자식요소: body
- 자손요소: h1, p
body 기준
- 조상요소: X
- 부모요소: html
- 자식요소: h1, p
- 자손요소: X
```

- Attribute(속성)
  -tag에 추가 정보
  -attr이름 = "값"

```
<tag attr="값"></tag>
```

## Text Contents Markup

### Heading(제목)

- h태그: heading
- h1 ~ h6

### Paragraph(단락)

- p태그

```
WYSWYG(what you see is what you get:네가 보는 것이 얻는 것이다)
- html은 WYSWYG 지원이 되지 않음
```

- 강제 줄바꿈: br(eak)태그를 사용

  - 시작 태그만 존재하는 빈 요소(Empty Element)

- 강제 공백: &nbsp;(Non-break Space)(엔터티 코드)

```
&(ampersand)

엔터티 코드: 대체코드
- 특수문자를 직접 사용하지 못 할 때 대체해서 사용하는 코드
```

- 수평선(Horizontal Rule): Hr 태그
  - 단락을 구분하는 구분선
  - 빈 요소

### HTML Link

- a(nchor): 하이퍼링크 연결하는 태그
- href: 목적지 정보 제공 속성 (atrribute)
- bookmark -연결된 페이지로 이동하지 않고, 같은 페이지 내에서 위아래 이동

```
-page link
<a href="url">텍스트</a>

-bookmark

-Link
<a href="#target">목적지</a>

-target
<h2 id="target">단락 제목</h2>

```

-url(Uniform Resource Locator): 파일 위치 식별자 - 상세주소

-인터넷 주소 체계
-IP(Internet Protocol) address: 인터넷에서 사용하는 주소
-Domain name: IP주소를 영어 단어로 표현 
-서버종류: www 
-회사이름: naver, daum 
-기관성격: com, net(3자리), co, go, ac (4자리) -국가(4자리): kr, uk, ca, fr...

```
-IP: 0~255까지의 숫자 4개로 구성
EX) 192.168.0.1

-인터넷 접속 프로세스: 주소표시줄에 Domain Nam 입력 => IP 주소로 변환 => 접속

-URL 체계

IP 또는 Domain 주소/상세경로/파일정보
EX) www.w3schools.com(도메인주소)/html(상세경로)/default.asp(파일정보)
```

### HTML table

```
<table>: 테이블 작성
  <tr>: table row - 행
    <th></th>: table header - 열제목
  </tr>
  <tr>
    <td</td>: table data - 데이터
  </tr>
  <tr>
    <td></td>
  </tr>
</table>
```

### HTML List

-ul(Unordered List): 순서 없는 목록
  -기호로 표시
-ol(Ordered List): 순서 있는 목록
  -숫자로 표시
-li(List Item): 목록 아이템
-중첩 목록(Nested List)
  - 목록 안에 작은 목록이 포함되는 경우

```
<ul>
  <li>HTML</li>
  <li>css</li>
  <li>js</li>
</ul>

<ol>
  <li>HTML</li>
  <li>css</li>
  <li>js</li>
</ol>
```

-Description List: 설명 목록
  -dl(list)
  -dt(title)
  -dd(data)

```
<dl>
  <dt>목록 주제</dt>
  <dd>목록 설명</dd>
</dl>
```

### HTML Image

-img(빈 요소)
-src(source): 이미지 파일 경로/파일명 표시
-alt(alternative): 대체 텍스트

```
<img src="html5.gif" alt="이미지 설명">
```

### HTML Video

-video
  -이름만 사용하는 attribute는 on/off 기능 형태
  -controls: 영상 컨트롤러 표시
  -autoplay: 자동 재생
  -muted: 소리 제거

```
<video>
  <source src="www.daum.net/video.movie.mp4" type="video/mp4">
</video>
```

### Youtube Video

-option, parameter(매개변수)

(링크) 깃허브 포크 자료 참조

```
<iframe src="youtube-url?parameter=1"></iframe>
```