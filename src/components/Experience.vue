<template>
  <div class="expDiv">
    <h2>Experiment</h2>
    <div class="expContainer">
      <div v-for="job in jobs" :key=job.period>
        <span class="companyName">{{job.companyName}}</span>
        <span class="title">{{job.jobTitle}}</span>
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
          companyName: 'EAVE',
          location: 'London',
          jobTitle: 'Software Engineer',
          period: '2017 -2018',
          responsibility: 'dnslckdcslncdlkcndsc',
        },
        {
          companyName: 'EAVE1',
          location: 'London',
          jobTitle: 'Software Engineer',
          period: '2019',
          responsibility: 'dnslckdcslncdlkcndsc',
        },
        {
          companyName: 'EAVE2',
          location: 'London',
          jobTitle: 'Software Engineer',
          period: '202-',
          responsibility: 'dnslckdcslncdlkcndsc',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
