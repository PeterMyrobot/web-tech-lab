<template>
  <div class="expDiv">
    <div class="animateArea"></div>
    <p class="header">EXPERIENCES</p>
    <div class="expsContainer">
      <div v-for="job in jobs" :key="job.period" class="exp">
        <div class="info">
          <p class="companyName">
            {{ job.companyName }} <span>{{ job.location }}</span>
          </p>
          <p class="companyDes">{{ job.companyDes }}</p>
          <div class="detial" v-for="detail in job.details" :key="detail.period">
            <p class="jobtitle">{{ detail.jobTitle }}</p>
            <p class="period">{{ detail.period }}</p>
            <ul class="responsibility">
              <li v-for="res in detail.responsibility" :key="res">
                {{ res }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          companyName: 'Shoalter',
          location: 'Taipei City, Taiwn',
          companyDes:
            'The ultimate end-to-end solution provider that enables a full-on platform business with third-party sellers.',
          details: [
            {
              jobTitle: 'Senior Software Engineer',
              period: 'Jan 2021 - Present',
              responsibility: ['dlnscnsdlcdslc', 'cnlsdcnsdc;dscm;dscmd'],
            },
          ],
        },
        {
          companyName: 'Actura',
          location: 'Taipei City, Taiwn',
          companyDes:
            'A company provides the leading STEAM learning solution spanning from in-class and out of class environments.',
          details: [
            {
              jobTitle: 'Lead Software Engineer',
              period: 'Apr 2019 - Dec 2020',
              responsibility: [
                'Planning, scheduling, and adjusting projects of the department.',
                'Communicate and coordinate with other departments such as hardware, design, product manager, and senior manager.',
                'Evaluate new technologies with respect to improving the quality and performance of the software.',
                'Design and Implemented/created the full life cycle process for one software project.',
              ],
            },
            {
              jobTitle: 'Software Engineer',
              period: 'Nov 2017 - Apr 2019',
              responsibility: [
                'Design and build cross-platform desktop apps with JavaScript, HTML, and CSS using electron framework.',
                'Developing and maintaining firmware of devices, including the libraries using C++.',
                'Implemented and created three software products successfully to market.',
                'Working on the communication between the device and app via BLE or USB serial port.',
              ],
            },
          ],
        },
        {
          companyName: 'EAVE',
          location: 'London, United Kingdom',
          companyDes:
            'EAVE is a start-up company based in central London building integrated hearing protection and communications technology for use on construction sites and in other hazardous environments.',
          details: [
            {
              jobTitle: 'Software Engineer',
              period: 'Aug 2016 - Aug 2017',
              responsibility: [
                'Developing mobile applications to enhance the user experience with headsets.',
                'Building websites using HTML. CSS and Javascript to display the data collected from headset product',
                'Development and implementation of an indoor localization system using BLE for noise data collection.',
                'Design and implement the protocol between headset product and the data receiver.',
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
.expDiv {
  margin: 50px;
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  .animateArea {
    width: 500px;
  }
  .header {
    color: $colorSet3;
    text-align: right;
    padding-top: 10px;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-family: "Roboto", sans-serif;
    &:after {
      content: "";
      height: 70%;
      position: absolute;
      border-left: 3px solid $colorSet3;
      left: 0;
      bottom: 0;
    }
  }
  .expsContainer {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: $colorSet5;
    margin-left: 20px;
    .exp {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;

      .info {
        text-align: start;
        p {
          margin: 0;
        }

        .period {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .companyName {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          span {
            font-size: 0.9rem;
            color: $colorSet5;
          }
        }
        .companyDes {
          font-size: 1.2rem;
          color: $colorSet3;
          padding-left: 30px;
        }
        .detial {
          padding-left: 30px;
          padding-top: 10px;
          .jobTitle {
            font-size: 1.2rem;
          }
          .period {
            font-size: 0.9rem;
          }
          .responsibility {
            color: $colorSet5;
          }
        }
      }
    }
  }
}
</style>
