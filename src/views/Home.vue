<template>
  <div class="main">
    <div class="container">
      <div class="left">
        <img
          id="hero-image"
          src="https://i.etsystatic.com/7941995/r/il/3650e1/2713966365/il_1588xN.2713966365_90os.jpg"
          style="margin-left: 35px"
        />
      </div>
      <div class="right">
        <!-- <h1 class="heading">About -->
        <!-- </h1> -->
        <p class="heading" style="text-transform: capitalize;">
          Building Adaptive Capacity through Sociotechnical Networks on the
          Texas Gulf Coast.
        </p>
        <br />
        <p class="mini-heading">
          Enabling Smart Cities in Coastal Regions of Environmental and
          Industrial Change.
        </p>
      </div>
    </div>

    <div class="content">
      <p class="heading">Abstract:</p>
      <br />
      <p class="">
        The Coastal Bend Region (CBR) of Texas is vulnerable to acute and
        chronic environmental stressors stemming from natural and industrial
        sources, including flooding and erosion from high tides, storm surge
        events, and ship traffic, as well as higher levels of air and water
        pollution due to expansion of nearby industrial operations. Despite the
        multitude of environmental hazards facing the region, formal monitoring
        systems are limited and provide an incomplete view of local-level
        conditions. In addition, networks for communication and decision-making
        are often localized and/or fragmented. As a result, CBR communities lack
        the comprehensive data and decision-making structures needed to plan
        for, respond to, and mitigate the impacts of potential hazards. This
        project will advance the understanding of how smart and connected
        technologies can be integrated into and support regional communication
        networks to build adaptive capacity in the face of cumulative impacts
        from climate change and industrial expansion, using the CBR as an
        exemplar. Research activities will be co-developed and coordinated with
        residents, community-based organizations, elected officials, and
        city/county staff to strengthen multidisciplinary, cross-sector
        partnerships, enhance public engagement with science and technology, and
        broaden participation by underrepresented groups and frontline
        communities in the scientific process. This project will apply a
        mixed-methods approach to assess how sociotechnical networks can be
        leveraged to increase knowledge and awareness of environmental and
        industrial hazards and to build community adaptive capacity equitably
        among diverse residents of the CBR. This project's main objectives are
        to (1) evaluate the structure and evolution of regional communication,
        information-sharing, and policy-making networks focused on environmental
        change and industrial expansion using grounded theory, (2) develop and
        leverage real-time sensing technologies, machine learning models, and
        data dissemination tools to monitor, predict, and communicate
        local-level environmental conditions, and (3) integrate the social and
        technical components through usability testing, tabletop exercises, and
        longitudinal questionnaires to assess how the generated data can be
        effectively interpreted and presented to various stakeholders to
        increase knowledge of environmental hazards, strengthen regional
        decision-making processes, and build adaptive capacity. Community
        workshops and symposia will provide opportunities to refine the study
        needs and objectives, obtain feedback on the sensor network and data
        products, share project results, co-develop a vision for long-term
        sustainability of the project, and discuss opportunities for integration
        with other regional efforts.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

#hero-image {
  height: 640px;
}

.main {
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;

  width: 100vw;
}

.left {
  left: 0px;
  width: 50%;
  align-self: center;
  justify-content: center;
  /* padding: 50px; */
}

.right {
  align-self: center;

  right: 0px;
  width: 50%;
}

.heading {
  font-size: 2.5rem;
  font-weight: bolder;
  color: #1f1f1f;
  justify-content: space-evenly;
}

.mini-heading {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f1f1f;
  /* font-family: 'Poppins', sans-serif; */
}

.content {
  justify-content: space-evenly;
  padding: 0px 50px 50px 50px;
  /* font-size: 1.1rem; */
  /* font-weight: bolder; */
  color: black;
}
</style>
