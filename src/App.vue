<script setup lang="ts">
import "primeicons/primeicons.css";
</script>

<template>
  <header>
    <h2>Reports</h2>
    <button>
      <i class="pi pi-download"></i>
      <p>Download</p>
    </button>
  </header>
  <aside>
    <img class="logo" src="@/assets/logo.png" alt="" />
    <ul>
      <li>
        <a class="active" href="/"
          ><i class="pi pi-wave-pulse"></i><p>Reports</p></a
        >
      </li>
      <li>
        <a href="/"><i class="pi pi-bolt"></i><p>Library</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-users"></i><p>People</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-book"></i><p>Activities</p></a>
      </li>
    </ul>
    <h4 class="aside__heading">Support</h4>
    <ul>
      <li>
        <a href="/"><i class="pi pi-lightbulb"></i><p>Get Started</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-cog"></i><p>Settings</p></a>
      </li>
    </ul>
    <div class="aside-bottom">
      <img class="avatar" src="@/assets/avatar.png" alt="" />
      <h5>Sam Wheeler</h5>
      <p class="avatar__email">samwheeler@example.com</p>
    </div>
  </aside>
  <main>
    <section class="top-selects">
      <div class="top-select">
        <p>Timeframe:<span>All-time</span></p>
        <i class="pi pi-sort-down-fill"></i>
      </div>
      <div class="top-select">
        <p>People:<span>All</span></p>
        <i class="pi pi-sort-down-fill"></i>
      </div>
      <div class="top-select">
        <p>Topic:<span>All</span></p>
        <i class="pi pi-sort-down-fill"></i>
      </div>
    </section>
    <section class="charts">
      <article class="charts__overview">
        <div class="chart overview">
          <h6 class="overview__head mb-2">Active Users</h6>
          <h2 class="overview__details">27<span>/80</span></h2>
        </div>
        <div class="chart overview">
          <h6 class="overview__head mb-2">Questions Answered</h6>
          <h2 class="overview__details">3,298</h2>
        </div>
        <div class="chart overview">
          <h6 class="overview__head mb-2">Av. Session length</h6>
          <h2 class="overview__details">2m 34s</h2>
        </div>
        <div class="chart overview">
          <h6 class="overview__head mb-2">Starting Knowledge</h6>
          <h2 class="overview__details">64%</h2>
          <img class="overview__graph" src="@/assets/graph.png" alt="graph" />
        </div>
        <div class="chart overview">
          <h6 class="overview__head mb-2">Current Knowledge</h6>
          <h2 class="overview__details">86%</h2>
          <img class="overview__graph" src="@/assets/graph.png" alt="graph" />
        </div>
        <div class="chart overview">
          <h6 class="overview__head mb-2">Knowledge Gain</h6>
          <h2 class="overview__details">+34%</h2>
          <img class="overview__graph" src="@/assets/graph.png" alt="graph" />
        </div>
      </article>
      <article class="chart charts__activity">
        <div class="activity__head">
          <h6 class="overview__head">Activity</h6>
          <h6 class="activity__drop">
            Month
            <i class="pi pi-chevron-down"></i>
          </h6>
        </div>
        <div class="activity__divider"></div>
        <div class="activity__chart">
          <div class="activity__labels">
            <div class="activity__label text-sm">0</div>
            <div class="activity__label text-sm">100</div>
            <div class="activity__label text-sm">200</div>
            <div class="activity__label text-sm">300</div>
            <div class="activity__label text-sm">400</div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">JAN</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 25%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">FEB</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 23%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">MAR</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 23%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">APR</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 52%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">MAY</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 60%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">JUN</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 50%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">JUL</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 56%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">AUG</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 25%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">SEP</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 70%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">OCT</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 80%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">NOV</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 90%"
              ></div>
            </div>
          </div>
          <div class="activity__month">
            <div class="activity__month-name text-sm">DEC</div>
            <div class="activity__month-chart">
              <div
                class="activity__month-chart-child"
                style="height: 100%"
              ></div>
            </div>
          </div>
        </div>
      </article>
      <article class="chart charts__weakest-topics">
        <h6 class="overview__head mb-2">Weakest Topics</h6>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-1.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Food Safety</h4>
            <div class="topics__bar weak">
              <div class="topics__bar-child weak" style="width: 74%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">74% <span>Correct</span></h4>
          </div>
        </div>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-2.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Compliance Basics Procedures</h4>
            <div class="topics__bar weak">
              <div class="topics__bar-child weak" style="width: 52%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">52% <span>Correct</span></h4>
          </div>
        </div>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-3.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Company Networking</h4>
            <div class="topics__bar weak">
              <div class="topics__bar-child weak" style="width: 36%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">36% <span>Correct</span></h4>
          </div>
        </div>
      </article>
      <article class="chart charts__strongest-topics">
        <h6 class="overview__head mb-2">Strongest Topics</h6>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-4.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Covid Protocols</h4>
            <div class="topics__bar strong">
              <div class="topics__bar-child strong" style="width: 95%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">95% <span>Correct</span></h4>
          </div>
        </div>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-5.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Cyber Security Basics</h4>
            <div class="topics__bar strong">
              <div class="topics__bar-child strong" style="width: 92%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">92% <span>Correct</span></h4>
          </div>
        </div>
        <div class="topics__container">
          <img class="topics__img" src="@/assets/thumbnail-6.png" alt="" />
          <div class="topics__info">
            <h4 class="topics__topic">Social Media Policies</h4>
            <div class="topics__bar strong">
              <div class="topics__bar-child strong" style="width: 89%"></div>
            </div>
          </div>
          <div class="topics__details">
            <h4 class="topics__percentage">89% <span>Correct</span></h4>
          </div>
        </div>
      </article>
      <article class="chart charts__user-leaderboard">
        <h6 class="overview__head mb-2">User Leaderboard</h6>
        <div class="leaderboard__container">
          <img class="leaderboard__img" src="@/assets/avatar-1.png" alt="" />
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Jesse Thomas</h4>
            <p class="leaderboard__details">637 Points - 98% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>1</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <img class="leaderboard__img" src="@/assets/avatar-2.png" alt="" />
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Thisal Mathiyazhagan</h4>
            <p class="leaderboard__details">637 Points - 89% Correct</p>
          </div>
          <div class="leaderboard__rank down"
            ><h4>2</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <img class="leaderboard__img" src="@/assets/avatar-3.png" alt="" />
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Helen Chuang</h4>
            <p class="leaderboard__details">637 Points - 88% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>3</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <img class="leaderboard__img" src="@/assets/avatar-4.png" alt="" />
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Lura Silverman</h4>
            <p class="leaderboard__details">637 Points - 66% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>4</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
      </article>
      <article class="chart charts__groups-leaderboard">
        <h6 class="overview__head mb-2">Groups Leaderboard</h6>
        <div class="leaderboard__container">
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Houston Facility</h4>
            <p class="leaderboard__details">52 Points / User - 97% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>1</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Test Group</h4>
            <p class="leaderboard__details">52 Points / User - 95% Correct</p>
          </div>
          <div class="leaderboard__rank down"
            ><h4>2</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Sales Leadership</h4>
            <p class="leaderboard__details">52 Points / User - 87% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>3</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
        <div class="leaderboard__container">
          <div class="leaderboard__info">
            <h4 class="leaderboard__name">Northeast Region</h4>
            <p class="leaderboard__details">51 Points / User - 80% Correct</p>
          </div>
          <div class="leaderboard__rank up"
            ><h4>4</h4><i class="pi pi-sort-down-fill"></i
          ></div>
        </div>
      </article>
    </section>
  </main>
  <footer></footer>
</template>

<style scoped>
aside {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -230px;
  width: 230px;
  background-color: #fff;
  padding: 2.7rem 1.16rem;
  border-radius: 0 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  box-shadow: 0 5px 20px 0 #0000000d;
  transition: all 500ms ease;
}
.logo {
  width: 138px;
  margin-bottom: 2rem;
}

ul {
  margin-bottom: 2.5rem;
}

li {
  margin-bottom: 0.25rem;
}

a {
  width: 100%;
  color: #000000b2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.625rem;
  transition: all 200ms ease;
}

a.active {
  background-color: #1b59f81a;
  color: #1b59f8;
}

a:hover,
a:active {
  background-color: #1b59f81a;
  color: #1b59f8;
}
.aside__heading {
  color: #00000080;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.aside-bottom {
  padding: 2rem 1rem 0;
  border-top: 1px solid #e5e5e5;
  margin-top: auto;
}

.avatar {
  width: 34px;
  height: 34px;
  margin-bottom: 0.5rem;
}
h5 {
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: #000;
}

.avatar__email {
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #00000080;
}

header,
main,
footer {
  padding: 1rem 0.75rem;
  max-width: 1280px;
  margin-inline: auto;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #0000001a;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;
}
button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4d4d4d;
  cursor: pointer;
  background-color: transparent;
  transition: all 200ms ease;
}

button:hover,
button:active {
  color: #1b59f8;
}

.top-selects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
}

.top-select {
  background-color: #fff;
  border: 1px solid #eff0f6;
  border-radius: 1.25rem;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.top-select > p {
  color: #000000b2;
}
.top-select > p > span {
  color: #000;
  font-weight: 500;
}
.top-select > i {
  font-size: 10px;
}

.charts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.chart {
  background-color: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 5px 20px 0 #0000000d;
  padding: 1.25rem 1rem;
}

.charts__overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

.text-sm {
  font-size: 0.5rem;
  font-weight: 600;
  color: #000000b2;
}

.overview__head {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #000000b2;
}

.overview__details > span {
  font-size: 1rem;
  font-weight: 600;
  color: #000000b2;
}

.overview__graph {
  width: 100%;
}

.charts__activity {
  padding-inline: 2rem;
  min-height: 400px;
}

.activity__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.activity__drop {
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}
.activity__drop > i {
  color: #848a95;
}

.activity__divider {
  margin-block: 0.5rem 2rem;
  height: 1px;
  background-color: #e4e5e799;
}

.activity__chart {
  height: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
}

.activity__labels {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.activity__label {
  text-align: end;
  font-size: 0.5rem;
  font-weight: 600;
}

.activity__month {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0.5rem;
}

.activity__month-chart {
  display: flex;
  flex-direction: column-reverse;
  width: 10px;
  border-radius: 100px;
  flex: 1;
  background-color: #f2f7ff;
}

.activity__month-chart-child {
  background: linear-gradient(
    356.64deg,
    rgba(27, 89, 248, 0.8) 48.49%,
    rgba(27, 89, 248, 0) 282.14%
  );
  border-radius: 100px;
}

.charts__weakest-topics,
.charts__strongest-topics {
  padding-inline: 2rem;
}

.topics__container {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.topics__img {
  width: 49.45px;
  height: 32px;
}

.topics__info {
  flex: 1;
  margin-bottom: 2px;
}

.topics__topic {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.topics__bar {
  width: 100%;
  height: 10px;
  border-radius: 100px;
}

.topics__bar.weak {
  background: linear-gradient(143.13deg, #ffbf1a44 5.36%, #ff408044 94.64%);
}
.topics__bar.strong {
  background: linear-gradient(270deg, #2fea9b44 15.5%, #7fdd5344 85.5%);
}

.topics__bar-child {
  height: 100%;
  border-radius: 100px;
}

.topics__bar-child.weak {
  background: linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%);
}

.topics__bar-child.strong {
  background: linear-gradient(270deg, #2fea9b 15.5%, #7fdd53 85.5%);
}
.topics__percentage {
  font-size: 0.875rem;
  font-weight: 600;
  color: #000000b3;
}

.topics__percentage > span {
  color: #00000077;
  font-weight: 600;
}

.charts__user-leaderboard {
  padding-inline: 2rem;
}
.charts__groups-leaderboard {
  padding-inline: 2rem;
}

.leaderboard__container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.leaderboard__img {
  width: 42px;
  height: 42px;
}

.leaderboard__info > h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
}

.leaderboard__info > p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.75rem;
  font-weight: 500;
}

.leaderboard__rank {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.leaderboard__rank > h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #151e23;
}

.leaderboard__rank.up > i {
  transform: rotate(180deg);
  color: #1fe08f;
}
.leaderboard__rank.down > i {
  color: #ff3e13;
}
@media (min-width: 640px) {
}

@media (min-width: 768px) {
}
@media (min-width: 908px) {
  .charts {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  aside {
    left: 0;
  }
  header,
  main,
  footer {
    padding: 2rem;
  }
  .charts {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 1280px) {
  .charts {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1536px) {
}
</style>
