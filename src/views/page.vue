<template>
  <div class="page-container">
    <header data-thq="thq-navbar" class="page-navbar-interactive">
      <router-link to="/" class="page-navlink">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page-image"
        />
      </router-link>
      <div data-thq="thq-navbar-nav" class="page-desktop-menu">
        <nav class="page-links">
          <navigation-links rootClassName="rootClassName10"></navigation-links>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="page-burger-menu">
        <svg viewBox="0 0 1024 1024" class="page-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="page-mobile-menu">
        <div class="page-nav">
          <div class="page-top">
            <router-link to="/" class="page-navlink1">
              <img
                alt="image"
                src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
                class="page-image1"
              />
            </router-link>
            <div data-thq="thq-close-menu" class="page-close-menu">
              <svg viewBox="0 0 1024 1024" class="page-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="page-links1">
            <router-link to="/cand" class="page-navlink2 navbar">
              후보자 소개
            </router-link>
            <router-link to="/promise_notopen" class="page-text navbar">
              공약 소개
            </router-link>
            <span class="page-text01 navbar"> </span>
            <router-link to="/brand" class="page-navlink3 navbar">
              Semi;Colon이란?
            </router-link>
            <span class="page-text02 navbar"> </span>
            <div class="page-icon-group">
              <a
                href="https://instagram.com/semicolon_50th"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 877.7142857142857 1024" class="page-icon4">
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="page-banner">
      <h2 class="page-text03 SectionTitle">
        <span class="page-text04">Semi;Colon이란?</span>
        <br class="page-text05" />
        <span><span v-html="rawbrzf"></span></span>
      </h2>
    </div>
    <div class="page-container1">
      <h1 class="page-text07 Heading">Semi;Colon의 뜻</h1>
      <span class="page-text08 Text">
        <br />
        <span>Semi;Colon 선거캠프는</span>
        <br />
        <span>&apos;학생회장&apos;이란</span>
        <br />
        <br />
        <span>학생과 학생을,</span>
        <br />
        <span>학생과 선생님을,</span>
        <br />
        <span>학생과 학교 사이를</span>
        <br />
        <br />
        <span>독립적이면서도</span>
        <br />
        <span>유기적으로 </span>
        <span>
          이어주는
          <span v-html="rawngao"></span>
        </span>
        <br />
        <span>역할이라고 생각했습니다.</span>
        <br />
        <br />
        <span>캠프 이름인 Semi;Colon은,</span>
        <br />
        <span>마치 문장 부호 세미콜론처럼</span>
        <br />
        <span>
          학생회장으로서의
          <span v-html="rawcadv"></span>
        </span>
        <br />
        <span>
          책무를 다하겠다는
          <span v-html="rawfapx"></span>
        </span>
        <br />
        <span>우리의 다짐입니다.</span>
        <br />
      </span>
    </div>
    <footer class="page-footer">
      <router-link to="/" class="page-navlink4">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page-image2"
        />
      </router-link>
      <span class="page-text40 Content">
        <span>© 2024. SEMI;COLON 선거캠프</span>
        <br />
        <span>총괄선거대책위원회</span>
        <br />
        <span><span v-html="raw5hf5"></span></span>
      </span>
    </footer>
  </div>
</template>

<script>
import NavigationLinks from '../components/navigation-links'

export default {
  name: 'Page',
  props: {},
  components: {
    NavigationLinks,
  },
  data() {
    return {
      rawbrzf: ' ',
      rawngao: ' ',
      rawcadv: ' ',
      rawfapx: ' ',
      raw5hf5: ' ',
    }
  },
  metaInfo: {
    title: 'Page - SEMI;COLON',
    meta: [
      {
        property: 'og:title',
        content: 'Page - SEMI;COLON',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-navbar-interactive {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.page-navlink {
  display: contents;
}
.page-image {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.page-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.page-burger-menu {
  display: none;
}
.page-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.page-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.page-navlink1 {
  display: contents;
}
.page-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.page-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-text {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-text01 {
  margin-bottom: var(--dl-space-space-unit);
}
.page-navlink3 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-text02 {
  margin-bottom: var(--dl-space-space-unit);
}
.page-icon4 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
}
.page-text03 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.page-text05 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  font-family: "GmarketSansBold";
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -1px;
}
.page-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.page-text07 {
  padding-bottom: var(--dl-space-space-unit);
}
.page-text08 {
  text-align: center;
}
.page-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.page-navlink4 {
  display: contents;
}
.page-image2 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page-text40 {
  text-align: right;
}
@media(max-width: 790px) {
  .page-navbar-interactive {
    justify-content: space-between;
  }
  .page-links {
    justify-content: flex-end;
  }
  .page-icon-group {
    width: 24px;
    height: 24px;
  }
  .page-icon4 {
    width: 32px;
    height: 32px;
  }
  .page-banner {
    background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
  }
  .page-text03 {
    color: var(--dl-color-gray-white);
  }
  .page-container1 {
    width: 100%;
    height: auto;
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    border-color: rgba(255, 255, 255, 0);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-text07 {
    padding-bottom: var(--dl-space-space-unit);
  }
  .page-text08 {
    text-align: center;
    line-height: 1.3;
  }
}
@media(max-width: 785px) {
  .page-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .page-desktop-menu {
    display: none;
  }
  .page-burger-menu {
    display: flex;
  }
  .page-mobile-menu {
    padding: 16px;
  }
  .page-links1 {
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page-icon4 {
    width: var(--dl-size-size-small);
  }
  .page-banner {
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
  }
  .page-text03 {
    color: var(--dl-color-gray-white);
    width: auto;
    font-size: 30px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-text04 {
    font-weight: 600;
  }
  .page-text07 {
    padding-bottom: var(--dl-space-space-unit);
  }
  .page-footer {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .page-image2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-text40 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .page-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-desktop-menu {
    display: none;
  }
  .page-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
</style>
