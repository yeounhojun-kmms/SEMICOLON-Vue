<template>
  <div class="page1-container">
    <header data-thq="thq-navbar" class="page1-navbar-interactive">
      <router-link to="/" class="page1-navlink">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page1-image"
        />
      </router-link>
      <div data-thq="thq-navbar-nav" class="page1-desktop-menu">
        <nav class="page1-links">
          <navigation-links rootClassName="rootClassName11"></navigation-links>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="page1-burger-menu">
        <svg viewBox="0 0 1024 1024" class="page1-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="page1-mobile-menu">
        <div class="page1-nav">
          <div class="page1-top">
            <router-link to="/" class="page1-navlink1">
              <img
                alt="image"
                src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
                class="page1-image1"
              />
            </router-link>
            <div data-thq="thq-close-menu" class="page1-close-menu">
              <svg viewBox="0 0 1024 1024" class="page1-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="page1-links1">
            <router-link to="/cand" class="page1-navlink2 navbar">
              후보자 소개
            </router-link>
            <router-link to="/promise_notopen" class="page1-text navbar">
              공약 소개
            </router-link>
            <span class="page1-text01 navbar"> </span>
            <router-link to="/brand" class="page1-navlink3 navbar">
              Semi;Colon이란?
            </router-link>
            <span class="page1-text02 navbar"> </span>
            <div class="page1-icon-group">
              <a
                href="https://instagram.com/semicolon_50th"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 877.7142857142857 1024" class="page1-icon4">
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
    <div class="page1-feature-card">
      <h2 class="page1-text03 Heading">아직 공개되지 않은 페이지입니다.</h2>
      <span class="page1-text04 Text">
        <span>
          확정되는 공약부터 차근차근 채워 나가겠습니다.
          <span v-html="raw8nna"></span>
        </span>
        <br />
        <span>나중에 다시 찾아주세요!</span>
      </span>
    </div>
    <footer class="page1-footer">
      <router-link to="/" class="page1-navlink4">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page1-image2"
        />
      </router-link>
      <span class="page1-text08 Content">
        <span>© 2024. SEMI;COLON 선거캠프</span>
        <br />
        <span>총괄선거대책위원회</span>
        <br />
        <span><span v-html="rawh51u"></span></span>
      </span>
    </footer>
  </div>
</template>

<script>
import NavigationLinks from '../components/navigation-links'

export default {
  name: 'Page1',
  props: {},
  components: {
    NavigationLinks,
  },
  data() {
    return {
      raw8nna: ' ',
      rawh51u: ' ',
    }
  },
  metaInfo: {
    title: 'Page1 - SEMI;COLON',
    meta: [
      {
        property: 'og:title',
        content: 'Page1 - SEMI;COLON',
      },
    ],
  },
}
</script>

<style scoped>
.page1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page1-navbar-interactive {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.page1-navlink {
  display: contents;
}
.page1-image {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page1-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.page1-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.page1-burger-menu {
  display: none;
}
.page1-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page1-mobile-menu {
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
.page1-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page1-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.page1-navlink1 {
  display: contents;
}
.page1-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page1-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page1-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page1-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.page1-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page1-text {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page1-text01 {
  margin-bottom: var(--dl-space-space-unit);
}
.page1-navlink3 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page1-text02 {
  margin-bottom: var(--dl-space-space-unit);
}
.page1-icon4 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page1-feature-card {
  width: 100%;
  height: 60vh;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page1-text03 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.page1-text04 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.page1-footer {
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
.page1-navlink4 {
  display: contents;
}
.page1-image2 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page1-text08 {
  text-align: right;
}
@media(max-width: 790px) {
  .page1-navbar-interactive {
    justify-content: space-between;
  }
  .page1-links {
    justify-content: flex-end;
  }
  .page1-icon-group {
    width: 24px;
    height: 24px;
  }
  .page1-icon4 {
    width: 32px;
    height: 32px;
  }
}
@media(max-width: 785px) {
  .page1-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .page1-desktop-menu {
    display: none;
  }
  .page1-burger-menu {
    display: flex;
  }
  .page1-mobile-menu {
    padding: 16px;
  }
  .page1-links1 {
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page1-icon4 {
    width: var(--dl-size-size-small);
  }
  .page1-feature-card {
    height: 80vh;
  }
  .page1-footer {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .page1-image2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .page1-text08 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .page1-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page1-desktop-menu {
    display: none;
  }
  .page1-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page1-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
</style>
