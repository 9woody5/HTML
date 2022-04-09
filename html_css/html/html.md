# html

## 학습 내용

- Contents

  - Text contents
  - Image, Video, Audio contents

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

  <body>: 웹페이지의 본문 영역 - 웹페이즤 모든 콘텐츠 표시
  </body>

</html>
```

## HTML Syntax

- Tag를 사용해서 Element를 표시/표현

```
<tag>contents</tag>: 시작태그, 종료태그로 구성

<tag>: 시작 태그만 -존재하는 경우  빈 요소(Empty Element)
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

  ```
  <a href="url">텍스트</a>
  ```

  -url(Uniform Resource Locator): 파일 위치 식별자