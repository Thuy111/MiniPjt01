# :paperclip:Readme

- 카카오뱅크 UX/UI 구현 미니 프로젝트

![카카오뱅크 - 나무위키](https://i.namu.wiki/i/tcO6LsmBe-rB-laaABweXNy9TaTU1fruiJaYVH39cCCZzg054tDwfbSmzsOvDU_zVZCJZzPS_YRe7vdgED3xQA.svg)



**프로젝트 기간** 2025.02.11 ~ 2025.02.21

**사용 기술** Html5, Css3, JavaScript, jQuery, Bootstrap4



**프로젝트 구조**

> :open_file_folder: **src** (source) - 소스코드 저장 (주요 코드와 관련된 모든 파일)
> ​	:open_file_folder: **assets** - 정적 자산 파일
> ​		:file_folder: icon - `favicon`
> ​		:file_folder: media - 각자 필요한 파일 추가
> ​			:file_folder: images
> ​			:file_folder: videos
>
> ​	:file_folder: components - 독립적, 재사용 가능한 UI요소 및 기능
> ​		:page_facing_up: footer.html
> ​		:page_facing_up: header.html
>
> ​	:file_folder: **data**
> ​		:page_facing_up: nav.json
> ​		(ajax로 활용할 데이터 작성)
>
> ​	:open_file_folder: **js** - 기능 파일 관리
> ​		:page_facing_up: app.js - 전역 기능
> ​		:page_facing_up: utils.js - 재사용 함수 및 API
> ​		(각자 js 파일)
>
> ​	:file_folder: **pages** - 각 페이지 구성
> ​		:page_facing_up: about.html
> ​		:page_facing_up: FAQ.html
> ​		:page_facing_up: IR.html
> ​		:page_facing_up: products.html
>
> ​	:file_folder: **styles** - css 관리
> ​		:page_facing_up: main.css - `reset`, `base`, `font`, `header`, `footer` 
> ​		(각자 css 파일)
>
> index.html
>
> **readme**

- 파일 경로 오류가 날 경우 상대경로가 아닌 절대 경로를 추천
- 기본 틀로 구성하였으나, 상황에 따른 폴더 구조가 상이할 수 있음
  - 현재 배포 단계가 아니므로 `public` 폴더는 구성하지 않음. (`src`가 개발 내부에서 사용하는 파일이라면 `public`은 사용자가 접근 가능한 파일)

### Rules

1. 타인의 버그를 발견할 시, 자체적 수정X
   - 담당 파일 관계자에게 언급 및 조율
   - 즉, 상호간의 동의 없이는 본인의 파일만 건들 수 있습니다.
     (git협업시 매우 중요)
2. 참고 자료 및 코드 리뷰는 Notion에 추가