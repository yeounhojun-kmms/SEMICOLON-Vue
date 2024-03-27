<template>
  <div class="page5-container">
    <header data-thq="thq-navbar" class="page5-navbar-interactive">
      <router-link to="/" class="page5-navlink">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page5-image"
        />
      </router-link>
      <div data-thq="thq-navbar-nav" class="page5-desktop-menu">
        <nav class="page5-links">
          <navigation-links rootClassName="rootClassName17"></navigation-links>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="page5-burger-menu">
        <svg viewBox="0 0 1024 1024" class="page5-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="page5-mobile-menu">
        <div class="page5-nav">
          <div class="page5-top">
            <router-link to="/" class="page5-navlink1">
              <img
                alt="image"
                src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
                class="page5-image1"
              />
            </router-link>
            <div data-thq="thq-close-menu" class="page5-close-menu">
              <svg viewBox="0 0 1024 1024" class="page5-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="page5-links1">
            <router-link to="/cand" class="page5-navlink2 navbar">
              후보자 소개
            </router-link>
            <router-link to="/promise_notopen" class="page5-text navbar">
              공약 소개
            </router-link>
            <span class="page5-text01 navbar"> </span>
            <router-link to="/brand" class="page5-navlink3 navbar">
              Semi;Colon이란?
            </router-link>
            <span class="page5-text02 navbar"> </span>
            <div class="page5-icon-group">
              <a
                href="https://instagram.com/semicolon_50th"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 877.7142857142857 1024" class="page5-icon04">
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
    <div class="page5-banner">
      <h2 class="page5-text03 SectionTitle">
        <span class="page5-text04">후보자 소개</span>
        <br class="page5-text05" />
        <span>
          <span><span v-html="rawazbn"></span></span>
          <span><span v-html="raw0bxt"></span></span>
        </span>
      </h2>
    </div>
    <a
      href="https://instagram.com/skjn615"
      target="_blank"
      rel="noreferrer noopener"
      class="page5-link1"
    >
      <div class="page5-container01">
        <img
          alt="image"
          src="https://i.ibb.co/TWbGph7/Frame-1.png"
          class="page5-image2"
        />
        <div class="page5-container02">
          <div class="page5-container03">
            <div class="page5-container04">
              <span class="page5-text09 Heading">홍석준</span>
            </div>
            <span class="16px page5-text10">회장 후보자</span>
          </div>
          <span class="page5-text11 16px">
            <span>경력사항</span>
            <br />
          </span>
          <span class="page5-text14">
            <span>(現) </span>
            <span>중앙고등학교 학생회 총무기획부원</span>
            <br />
            <span>(前) 미동초등학교 전교회장</span>
            <br />
            <span>(前) 옥정중학교 전교부회장</span>
            <br />
          </span>
        </div>
      </div>
    </a>
    <a
      href="https://instagram.com/p_zlor16"
      target="_blank"
      rel="noreferrer noopener"
      class="page5-link2"
    >
      <div class="page5-container05">
        <img
          alt="image"
          src="https://i.ibb.co/tx8VsJN/Frame-2.png"
          class="page5-image3"
        />
        <div class="page5-container06">
          <div class="page5-container07">
            <div class="page5-container08">
              <span class="page5-text22 Heading">박지우</span>
            </div>
            <span class="16px page5-text23">부회장 후보자</span>
          </div>
          <span class="page5-text24 16px">
            <span>경력사항</span>
            <br />
          </span>
          <span class="page5-text27">
            <span>(現) 중앙고등학교 학생회 총무기획부장</span>
            <br />
            <span>(現) 법무부 대변인실 제16기 국민기자</span>
            <br />
            <span>
              (前) 제20대 대통령선거 후보
              <span v-html="rawam4d"></span>
            </span>
            <br />
            <span>청소년특별보좌관</span>
            <br />
            <span>
              (前) 대한민국청소년의회 제13대
              <span v-html="raw0u3w"></span>
            </span>
            <br />
            <span>정치법제위원회 의원</span>
            <br />
            <span>서울국제고 인문사회영재교육원 사회학 수료</span>
            <br />
          </span>
        </div>
      </div>
    </a>
    <div class="page5-container09"></div>
    <footer class="page5-footer">
      <router-link to="/" class="page5-navlink4">
        <img
          alt="image"
          src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
          class="page5-image4"
        />
      </router-link>
      <span class="page5-text42 Content">
        <span>© 2024. SEMI;COLON 선거캠프</span>
        <br />
        <span>총괄선거대책위원회</span>
        <br />
        <span><span v-html="raw731d"></span></span>
      </span>
    </footer>
    <div data-thq="thq-mobile-menu" class="page5-mobile-menu1">
      <div class="page5-nav1">
        <div class="page5-top1">
          <router-link to="/" class="page5-navlink5">
            <img
              alt="image"
              src="https://i.ibb.co/cJQQYck/semicolon-redblue-vert.png"
              class="page5-image5"
            />
          </router-link>
          <div data-thq="thq-close-menu" class="page5-close-menu1">
            <svg viewBox="0 0 1024 1024" class="page5-icon06">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
        <nav class="page5-links2">
          <router-link to="/cand" class="page5-navlink6 navbar">
            후보자 소개
          </router-link>
          <router-link to="/promise_notopen" class="page5-text48 navbar">
            공약 소개
          </router-link>
          <span class="page5-text49 navbar"> </span>
          <router-link to="/brand" class="page5-navlink7 navbar">
            Semi;Colon이란?
          </router-link>
          <span class="page5-text50 navbar"> </span>
          <div class="page5-icon-group1">
            <a
              href="https://instagram.com/semicolon_50th"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" class="page5-icon08">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLinks from '../components/navigation-links'

export default {
  name: 'Page5',
  props: {},
  components: {
    NavigationLinks,
  },
  data() {
    return {
      rawazbn: ' ',
      raw0bxt: ' ',
      rawam4d: ' ',
      raw0u3w: ' ',
      raw731d: ' ',
    }
  },
  metaInfo: {
    title: 'Page5 - SEMI;COLON',
    meta: [
      {
        property: 'og:title',
        content: 'Page5 - SEMI;COLON',
      },
    ],
  },
}
</script>

<style scoped>
.page5-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page5-navbar-interactive {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.page5-navlink {
  display: contents;
}
.page5-image {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page5-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.page5-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.page5-burger-menu {
  display: none;
}
.page5-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page5-mobile-menu {
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
.page5-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page5-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.page5-navlink1 {
  display: contents;
}
.page5-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page5-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page5-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page5-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.page5-navlink2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text01 {
  margin-bottom: var(--dl-space-space-unit);
}
.page5-navlink3 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text02 {
  margin-bottom: var(--dl-space-space-unit);
}
.page5-icon04 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page5-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
}
.page5-text03 {
  color: var(--dl-color-gray-white);
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.page5-link1 {
  display: contents;
}
.page5-container01 {
  flex: 0 0 auto;
  width: 561px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
  text-decoration: none;
}
.page5-image2 {
  width: 200px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-unit);
}
.page5-container02 {
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page5-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.page5-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.page5-text09 {
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.page5-text11 {
  color: var(--dl-color-gray-700);
}
.page5-text14 {
  width: auto;
  font-size: 16px;
  font-family: "SUIT-Regular";
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.page5-link2 {
  display: contents;
}
.page5-container05 {
  flex: 0 0 auto;
  width: 568px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: flex-start;
  text-decoration: none;
}
.page5-image3 {
  width: 200px;
  object-fit: cover;
  margin-left: 0px;
  margin-right: var(--dl-space-space-unit);
}
.page5-container06 {
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page5-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.page5-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.page5-text22 {
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.page5-text24 {
  color: var(--dl-color-gray-700);
}
.page5-text27 {
  width: auto;
  font-size: 16px;
  font-family: SUIT-Regular;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}
.page5-container09 {
  flex: 0 0 auto;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page5-footer {
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
.page5-navlink4 {
  display: contents;
}
.page5-image4 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page5-text42 {
  text-align: right;
}
.page5-mobile-menu1 {
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
.page5-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page5-top1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.page5-navlink5 {
  display: contents;
}
.page5-image5 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.page5-close-menu1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page5-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page5-links2 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.page5-navlink6 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text48 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text49 {
  margin-bottom: var(--dl-space-space-unit);
}
.page5-navlink7 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page5-text50 {
  margin-bottom: var(--dl-space-space-unit);
}
.page5-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
@media(max-width: 790px) {
  .page5-navbar-interactive {
    justify-content: space-between;
  }
  .page5-links {
    justify-content: flex-end;
  }
  .page5-icon-group {
    width: 24px;
    height: 24px;
  }
  .page5-icon04 {
    width: 32px;
    height: 32px;
  }
  .page5-banner {
    background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
  }
  .page5-container01 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
  .page5-image2 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
  }
  .page5-container02 {
    flex: 1;
    align-items: flex-start;
  }
  .page5-text09 {
    align-self: flex-start;
    text-align: left;
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-container05 {
    align-self: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
  .page5-image3 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
  }
  .page5-container06 {
    flex: 1;
    align-items: flex-start;
  }
  .page5-text22 {
    align-self: flex-start;
    text-align: left;
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-icon-group1 {
    width: 24px;
    height: 24px;
  }
  .page5-icon08 {
    width: 32px;
    height: 32px;
  }
}
@media(max-width: 785px) {
  .page5-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .page5-desktop-menu {
    display: none;
  }
  .page5-burger-menu {
    display: flex;
  }
  .page5-mobile-menu {
    padding: 16px;
  }
  .page5-links1 {
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-icon04 {
    width: 32px;
    height: 32px;
  }
  .page5-banner {
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    background-image: linear-gradient(90deg, rgb(255, 102, 0) 0.00%,rgb(255, 0, 93) 99.00%);
  }
  .page5-text04 {
    font-weight: 600;
  }
  .page5-text05 {
    font-weight: 600;
  }
  .page5-container01 {
    flex: 0;
    width: 100%;
    height: 100%;
    align-self: flex-start;
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
  .page5-image2 {
    width: var(--dl-size-size-xlarge);
    height: auto;
    align-self: center;
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
    animation-name: none;
  }
  .page5-container02 {
    width: 100%;
    flex-direction: column;
  }
  .page5-container03 {
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    align-items: center;
    justify-content: center;
  }
  .page5-text09 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-text10 {
    font-size: 16px;
    font-family: SUIT-Regular;
    font-weight: 700;
    line-height: 1.3;
    text-transform: none;
    text-decoration: none;
  }
  .page5-text11 {
    color: var(--dl-color-gray-700);
    align-self: center;
    margin-bottom: 0px;
    text-transform: none;
  }
  .page5-text14 {
    font-size: 16px;
    align-self: center;
    text-align: center;
    font-family: SUIT-Regular;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--dl-space-space-halfunit);
    text-transform: none;
    text-decoration: none;
  }
  .page5-container05 {
    flex: 0;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    animation-name: none;
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
  .page5-image3 {
    width: var(--dl-size-size-xlarge);
    height: auto;
    align-self: center;
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
  }
  .page5-container06 {
    width: 100%;
    align-self: center;
    flex-direction: column;
  }
  .page5-container07 {
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    align-items: center;
  }
  .page5-text22 {
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-text23 {
    font-size: 16px;
    font-family: SUIT-Regular;
    font-weight: 700;
    line-height: 1.3;
    text-transform: none;
    text-decoration: none;
  }
  .page5-text24 {
    color: var(--dl-color-gray-700);
    align-self: center;
    margin-bottom: 0px;
    text-transform: none;
  }
  .page5-text27 {
    font-size: 16px;
    align-self: center;
    text-align: center;
    font-family: SUIT-Regular;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--dl-space-space-halfunit);
    text-transform: none;
    text-decoration: none;
  }
  .page5-container09 {
    width: 100%;
    height: var(--dl-size-size-xlarge);
  }
  .page5-footer {
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .page5-image4 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .page5-text42 {
    text-align: center;
  }
  .page5-mobile-menu1 {
    padding: 16px;
  }
  .page5-links2 {
    margin-top: var(--dl-space-space-halfunit);
    margin-left: var(--dl-space-space-halfunit);
    margin-right: var(--dl-space-space-halfunit);
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .page5-icon08 {
    width: var(--dl-size-size-small);
  }
}
@media(max-width: 767px) {
  .page5-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page5-desktop-menu {
    display: none;
  }
  .page5-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page5-banner {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page5-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
</style>
