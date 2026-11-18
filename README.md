# 유혜진 소개 홈페이지 (yu-heajin-home)

KB손해보험 여주지점 양평영업소장 **유혜진**의 한 페이지 소개 홈페이지입니다.

## 폴더 구조

```
yu-heajin-home/
├── index.html      ← 페이지 내용 (글자 수정은 여기서)
├── css/style.css   ← 색상·디자인
├── js/main.js      ← 타이핑 효과, 메뉴, 애니메이션
├── images/         ← 사이트에 쓰는 사진 (profile.png, preview.png)
├── netlify.toml    ← Netlify 배포·보안 설정
├── .gitignore      ← GitHub에 올리지 않을 파일 목록
└── README.md       ← 이 설명서
```

## 내 컴퓨터에서 미리보기

`index.html` 파일을 더블클릭하면 브라우저에서 바로 열립니다.

## 색상표

| 역할 | 코드 |
|---|---|
| 메인(바탕) 남색 | `#0B1B3A` |
| 보조 남색 | `#13284F` |
| 포인트 골드 | `#D4AF37` |
| 밝은 골드 | `#F0D78C` |
| 밝은 섹션 배경 | `#FAF7F0` |

## 자주 고치는 곳

- **한 줄 소개(타이핑 문구)**: `index.html`에서 `data-text="..."` 부분
- **경력**: `index.html`의 `<!-- 3. 경력 -->` 아래 `timeline-item`
- **영업 분야**: `index.html`의 `<!-- 4. 영업 분야 -->` 아래 `field-card`
- **사진 바꾸기**: `images/` 폴더의 같은 이름 파일을 교체

## 배포

GitHub 저장소에 올리면 Netlify가 자동으로 다시 배포합니다.
