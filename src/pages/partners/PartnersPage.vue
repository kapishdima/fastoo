<template>
  <v-page class="partners-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Partners" />
    <section class="section-row">
      <div class="section-content">
        <h3 class="heading-3 section-content__title">Information about our Partners</h3>
        <p class="paragraph--md">
          We are constantly developing our company in direction of partnership. Our partner programs
          provide a variety of opportunities that are designed specifically for every business,
          because Magua Pay has individual approach to every client. We have extensive experience in
          credit card processing, so we know how to make cooperation mutually beneficial.
        </p>
        <br />
        <p class="paragraph--md">
          The payment service provider Magua Pay rewards customers who want to cooperate. It may be
          credit card affiliate programmes, fees reduction, priority support, special bonus packages
          with attractive offers etc. Our partners have a strategic advantage over their competitors
          with good business prospects and possibilities to increase the customer base through a
          wide range of accepted payments types.
        </p>
        <br />
        <p class="paragraph--md">
          Magua Pay welcomes any type of cooperation with commercial and technical partners and
          resellers. It can be acquirers, payment processing companies and other types of partners
          who can help us to make our payment solutions even better. We want to be sure that our
          clients accept card payments online with the best quality of support in merchant services
          industry.
        </p>

        <h3 class="heading-3 section-content__title">Advantages of cooperation with Magua Pay</h3>
        <ul class="list">
          <li class="paragraph--md">
            – Already established working partnership with wide network of acquiring partners. Join
            this network and start receiving profits from working with us!
          </li>
          <li class="paragraph--md">
            – Combined together efforts, experience and teamwork allow both partners to strengthen;
          </li>
          <li class="paragraph--md">
            – Possibility to exchange experience in working with particular clients and in specific
            industries;
          </li>
          <li class="paragraph--md">
            – Partnership with Magua Pay gives possibility to start working with new industries.
          </li>
        </ul>
        <p class="paragraph--md">Only by making few steps valuable benefits could be Yours too.</p>
        <br />
        <p class="paragraph--md">
          Besides this, Magua Pay holds out the hand of comradeship to its clients. In case of
          cooperation customers are guaranteed to get a special reward. Proposition suggests credit
          card affiliate programs, fee reductions, priority support, special bonus packages with
          attractive offers etc.
        </p>

        <h3 class="heading-3 section-content__title">Why Magua Pay?</h3>
        <p class="paragraph--md">
          Magua Pay partners are ones, who has made a step towards effective business development.
          To co-work with Magua Pay team a lot of reasons could be mentioned, involving:
        </p>
        <br />
        <ul class="list">
          <li class="paragraph--md">– fair financial conditions for partnership;</li>
          <li class="paragraph--md">– timely commission payouts;</li>
          <li class="paragraph--md">– business relations with acquiring banks around the world;</li>
          <li class="paragraph--md">– constantly expanding network of partnership;</li>
          <li class="paragraph--md">– wide range of accessible industries;</li>
          <li class="paragraph--md">– wide list of processing and settlement currencies;</li>
          <li class="paragraph--md">– high approval ratio.</li>
        </ul>

        <h3 class="heading-3 section-content__title">Why Magua Pay?</h3>
        <br />
        <p class="paragraph--md">
          In order to let its partners earn more profit with each client, Magua Pay offers special
          exclusive program, so-called individual cooperation program.
        </p>
        <br />
        <p class="paragraph--md">
          All, that is required, is signing a partnership agreement and providing Magua Pay with
          potential clients. After clients change status from potential to current, partners obtain
          a reward.
        </p>
        <br />
        <p class="paragraph--md">
          As well as beneficial advantages Magua Pay partners gain a significant strategic
          superiority among their competitors, business prosperity and the possibility to increase a
          customer base through a wide range of accepted payment types. Joint effort is the right
          track to enhance business and to satisfy all needs of both sides. Become a partner of
          Magua Pay today!
        </p>
        <br />
        <p class="paragraph--md">
          Joint effort is the right track to enhance business and to satisfy all needs of both
          sides.
          <br /><b>Become a partner of Magua Pay today!</b>
        </p>
        <br />
      </div>

      <div class="section-sidebar">
        <v-card classes="section-card adventages-card">
          <h5 class="section-card__title">Our main advantages</h5>
          <div class="adventages-list">
            <div class="adventages-list__item">1. Fair financial conditions for partners</div>
            <div class="adventages-list__item">2. Timely commission payouts</div>
            <div class="adventages-list__item">
              3. Established business relations with acquiring banks around the world
            </div>
            <div class="adventages-list__item">4. Constantly expanding network of partners</div>
            <div class="adventages-list__item">5. Big number of acceptable industries</div>
            <div class="adventages-list__item">
              6. Wide list of processing and settlement currencies
            </div>
            <div class="adventages-list__item">7. High approval ratio</div>
          </div>
        </v-card>
        <v-card classes="section-card contacts-card">
          <h5 class="section-card__title">For more information - Contact Us</h5>
          <div class="contacts-list">
            <div class="contacts-list__item">
              <div class="contacts-list__item-title">Phone:</div>
              <div class="contacts-list__item-value">+1 (778) 401-7776</div>
            </div>
            <div class="contacts-list__item">
              <div class="contacts-list__item-title">Location:</div>
              <div class="contacts-list__item-value">
                555 Burrard St <br />
                Vancouver,BC V7X 1M8,Canada<br />
                Office 02-125<br />
              </div>
            </div>
            <div class="contacts-list__item">
              <div class="contacts-list__item-title">Email:</div>
              <div class="contacts-list__item-value">assistance@magua-pay.com</div>
            </div>
          </div>
        </v-card>
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import VCard from '@/components/cards/VCard.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';

export default {
  components: {
    VPage,
    VCard,
    SectionBanner,
  },
};
</script>

<style lang="scss" scoped>
@import './partners.scss';
</style>
