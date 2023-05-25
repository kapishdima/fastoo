<template>
  <v-page classes="home-page">
    <v-promo
      :image="require('@/assets/illustrations/illustration_1.png')"
      classes="home-page__promo home-page__offset"
    >
      <h1 class="heading-1 promo-title">We do not miss important details</h1>
      <p class="paragraph promo-text">
        Individual and careful approach leads to complete understanding of your needs. You will
        recieve even better payment solution than you expect!
      </p>
      <router-link class="button-link" :to="{ path: pathes.ACCOUNT_NEEDED_DOCUMENTS }">
        <v-button>Get started</v-button>
      </router-link>
    </v-promo>
    <card-list :list="informationCards">
      <template #item="{ item }">
        <information-card :icon="item.icon" :title="item.title" :description="item.description" />
      </template>
    </card-list>
    <section class="section section--centered">
      <h2 class="section-title">How to connect</h2>
      <interactions-list />
      <router-link class="button-link" :to="{ path: pathes.ACCOUNT_NEEDED_DOCUMENTS }">
        <v-button>Get started</v-button>
      </router-link>
    </section>
    <section
      class="section"
      :style="{
        marginBottom: '40px',
      }"
    >
      <v-promo
        :image="require('@/assets/illustrations/illustration_2.png')"
        classes="home-page__promo with-padding-bottom"
        :reverse="true"
        :has-delimiter="true"
      >
        <h1 class="heading-2 promo-title">Apply for Magua Pay merchant services now!</h1>
        <p class="paragraph promo-text">
          To work with Magua Pay processing means to earn money receiving genuine payments through
          reliable payment gateway.Start accepting credit cards with us and enjoy it!
        </p>
        <promo-list :list="promoList" />
      </v-promo>
      <v-promo
        :image="isTouchableDevice() ? '' : require('@/assets/illustrations/illustration_3.png')"
        classes="home-page__promo"
      >
        <h1 class="heading-2 promo-title">Who is Magua Pay?</h1>
        <p class="paragraph">
          Magua Pay INC. is a Canadian company, licensed by the standards of Money Service Business
          (MSB) that builds business upon high-quality service and customers’ trust, providing that
          individual and attentive approach, immediate reaction to inquiries, readiness to provide
          nothing but the best possible service are the qualities to focus on, because they make us
          reliable.
        </p>
        <br />
        <p class="paragraph promo-text">
          Every person in Magua Pay knows that reputation we have gained through years of
          conscientious work is our main property. We are sure that such attitude towards clients
          and partners leads to mutual prosperity and business achievements. Magua Pay’s main goal
          is to continue to prove that our solutions are the most appropriate, the most dependable
          and, of course, the most affordable. You will never find any kind of hidden fees,
          concealed charges and deliberate misunderstandings in our offerings.
        </p>
        <router-link class="button-link" :to="{ path: pathes.ABOUT_US }">
          <v-button>About us</v-button>
        </router-link>
      </v-promo>
    </section>

    <section class="section">
      <div class="section-decoration"></div>
      <card-list :list="statisticsList">
        <template #item="{ item }">
          <statistic-card :icon="item.icon" :value="item.value" :title="item.title" />
        </template>
      </card-list>
    </section>

    <section class="section">
      <v-promo
        :image="require('@/assets/illustrations/illustration_4.png')"
        classes="home-page__promo with-padding-bottom"
        :reverse="true"
        :has-delimiter="true"
      >
        <h1 class="heading-2 promo-title">What makes Magua Pay different from other processors?</h1>
        <p class="paragraph promo-text">
          The main difference between Magua Pay and other companies is quality level of our payment
          solutions. There is no doubt that people determine whether company is successful or not.
          All our account managers, programmers, web-designers, senior management team and other
          stuff have considerable experience in payment processing area.
        </p>
        <promo-list :list="promoList1" :centered="true" />
      </v-promo>

      <v-promo
        :image="require('@/assets/illustrations/illustration_5.png')"
        classes="home-page__promo "
      >
        <h1 class="heading-2 promo-title">How does Magua Pay manage to be the best?</h1>
        <p class="paragraph">
          We understand our client's needs, hence we know how to meet their requirements. You can be
          sure that if you inquire about something you will receive a prompt reply. Thanks to our
          readiness to maintain close communication with clients we always know how to offer exactly
          what they want.
        </p>
        <br />
        <p class="paragraph promo-text">Accept payments easily from all sorts of devices:</p>
        <promo-list :list="promoList2" :centered="true" />
      </v-promo>
    </section>

    <section class="section-partners">
      <div class="partner-item">
        <img src="@/assets/partners/partner-1.png" alt="" />
      </div>
      <div class="partner-item">
        <img src="@/assets/partners/partner-2.png" alt="" />
      </div>
      <div class="partner-item">
        <img src="@/assets/partners/partner-3.png" alt="" />
      </div>
      <div class="partner-item">
        <img src="@/assets/partners/partner-4.png" alt="" />
      </div>
      <div class="partner-item">
        <img src="@/assets/partners/partner-5.png" alt="" />
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import VPromo from '@/components/layout/Promo/VPromo.vue';
import VButton from '@/components/button/VButton.vue';
import InformationCard from '@/components/cards/InformationCard.vue';
import CardList from '@/components/cards/CardList.vue';
import InteractionsList from '@/modules/InteractionsList/InteractionsList.vue';
import PromoList from '@/components/layout/Promo/PromoList.vue';
import StatisticCard from '@/components/cards/StatisticCard.vue';
import { isTouchableDevice } from '@/app/media-query/media-query';
import { pathes } from '@/app/router';

export default {
  setup() {
    const informationCards = [
      {
        icon: require('@/assets/icons/information/info-icon-1.svg'),
        title: 'What is Magua Pay?',
        description:
          'Magua Pay is a payment service provider of online merchant accounts with secured and reliable <b>payment gateway.</b>',
      },
      {
        icon: require('@/assets/icons/information/info-icon-2.svg'),
        title: 'Who are our clients?',
        description:
          'Our clients are merchants that need online <b>payment solutions</b> and <b>internet acquiring</b> for accepting payments via their website.',
      },
      {
        icon: require('@/assets/icons/information/info-icon-3.svg'),
        title: 'Why choose Magua Pay?',
        description:
          'Magua Pay provides first-rate service along with affordable pricing and high security level. Apply for a <b>merchant account</b> and make sure!',
      },
    ];

    const promoList = [
      {
        icon: require('@/assets/icons/icon_circle_1.svg'),
        title: 'Get in touch with us',
        description:
          'Our professional account managers are always glad to hear from you. They will make your integration quick and smooth.',
      },
      {
        icon: require('@/assets/icons/icon_circle_2.svg'),
        title: 'Become approved',
        description:
          'Give us a bit of time and become approved! Thanks to our wide range of acquiring banks and partners we are able to find payment solution literally for every merchant.',
      },
      {
        icon: require('@/assets/icons/icon_circle_3.svg'),
        title: 'Start accepting payments',
        description:
          'Once approved, you will start accepting payments within few business days. Do not forget to make a test transaction!',
      },
    ];

    const statisticsList = [
      {
        icon: require('@/assets/icons/statistics/statistic-1.svg'),
        value: '2,763',
        title: 'Happy customers',
      },
      {
        icon: require('@/assets/icons/statistics/statistic-2.svg'),
        value: '10',
        title: 'Years in payments',
      },
      {
        icon: require('@/assets/icons/statistics/statistic-3.svg'),
        value: '13',
        title: 'Our branches',
      },
      {
        icon: require('@/assets/icons/statistics/statistic-4.svg'),
        value: '341',
        title: 'Merchants',
      },
    ];

    const promoList1 = [
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'Reliable payment gateway',
      },
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'High approval ratio',
      },
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'Low rates',
      },
    ];

    const promoList2 = [
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'YES personal computer and notebook',
      },
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'YES tablet',
      },
      {
        icon: require('@/assets/icons/check_icon.svg'),
        title: 'YES mobile phone',
      },
    ];

    return {
      informationCards,
      promoList,
      promoList1,
      promoList2,
      statisticsList,
      isTouchableDevice,
      pathes,
    };
  },
  components: {
    VPage,
    VPromo,
    VButton,
    InformationCard,
    CardList,
    InteractionsList,
    PromoList,
    StatisticCard,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
