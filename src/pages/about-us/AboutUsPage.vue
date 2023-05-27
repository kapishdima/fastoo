<template>
  <v-page class="partners-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="About us" />
    <section class="section-row">
      <div class="section-content">
        <h3 class="heading-3 section-content__title">Information about our company</h3>
        <p class="paragraph--md">
          Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business
          (MSB) that builds business upon high-quality service and customer's trust, providing that
          individual and attentive approach, immediate reaction to inquiries, readiness to provide
          nothing but the best possible service are the qualities to focus on, because they make us
          reliable.
        </p>
        <br />
        <p class="paragraph--md">
          Every person in Fastoo knows that reputation we have gained through years of conscientious
          work is our main property. We are sure that such attitude towards clients and partners
          leads to mutual prosperity and business achievements. Fastoo's main goal is to continue to
          prove that our solutions are the most appropriate, the most dependable and, of course, the
          most affordable. You will never find any kind of hidden fees, concealed charges and
          deliberate misunderstandings in our offerings.
        </p>

        <h3 class="heading-3 section-content__title">
          What makes Fastoo different from other processors?
        </h3>
        <p class="paragraph--md">
          The main difference between Fastoo and other companies is quality level of our payment
          solutions. There is no doubt that people determine whether company is successful or not.
          All our account managers, programmers, web-designers, senior management team and other
          stuff have considerable experience in payment processing area.
        </p>

        <h3 class="heading-3 section-content__title">How does Fastoo manage to be the best?</h3>
        <p class="paragraph--md">
          We understand our client's needs, hence we know how to meet their requirements. You can be
          sure that if you inquire about something you will receive a prompt reply. Thanks to our
          readiness to maintain close communication with clients we always know how to offer exactly
          what they want.
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

        <h3 class="heading-3 section-content__title">Why Fastoo?</h3>
        <br />
        <p class="paragraph--md">
          In order to let its partners earn more profit with each client, Fastoo offers special
          exclusive program, so-called individual cooperation program.
        </p>
        <br />
        <p class="paragraph--md">
          All, that is required, is signing a partnership agreement and providing Fastoo with
          potential clients. After clients change status from potential to current, partners obtain
          a reward.
        </p>
        <br />
        <p class="paragraph--md">
          As well as beneficial advantages Fastoo partners gain a significant strategic superiority
          among their competitors, business prosperity and the possibility to increase a customer
          base through a wide range of accepted payment types. Joint effort is the right track to
          enhance business and to satisfy all needs of both sides. Become a partner of Fastoo today!
        </p>
        <br />
        <p class="paragraph--md">
          Joint effort is the right track to enhance business and to satisfy all needs of both
          sides.
          <br /><b>Become a partner of Fastoo today!</b>
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
@import './about-us.scss';
</style>
