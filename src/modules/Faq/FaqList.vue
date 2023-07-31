<template>
  <div class="faq-list">
    <div class="faq-list__column">
      <div
        class="faq-list__item"
        v-for="(faq, index) of faqList.slice(0, Math.floor(faqList.length / 2))"
        :key="faq.title"
      >
        <v-faq :title="faq.title" :description="faq.description" :index="index" />
      </div>
    </div>
    <div class="faq-list__column">
      <div
        class="faq-list__item"
        v-for="(faq, index) of faqList.slice(Math.floor(faqList.length / 2))"
        :key="faq.title"
      >
        <v-faq :title="faq.title" :description="faq.description" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import VFaq from './VFaq.vue';
export default {
  setup() {
    const faqList = [
      {
        title: 'What kind of services do you provide?',
        description:
          'Fastoo INC. is a Georgia company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is a chargeback and how to avoid it?',
        description:
          'Chargeback is the reversal of funds to a customer forcibly initiated by the issuing bank which can be very costly. The most widespread reasons for chargebacks are returned goods, terminated services, disputes, mistakes or fraudulent activities. However, merchants can minimize chargebacks by ensuring customer satisfaction and transaction reliability, publishing his returns policy and providing a high level of support on his website.',
      },
      {
        title: 'How can I start?',
        description:
          'First of all you can start by signing up for a Fastoo account and filling the pre-check form. We have a plenty of different payment solutions with different conditions, but as more precise and exhaustive your business details are, as more optimal pricing and condition you will receive.',
      },
      {
        title: 'What is rolling reserve?',
        description:
          'Rolling reserve is some percentage of a merchant’s funds that is held by the merchant account provider as security for future contingencies, including chargebacks. The standard is 10% rolling reserve for 180 days, which means that there is a portion from every transaction that is held for 6 months, then settled to the merchant. Contact us to learn more about rolling reserve.',
      },
      {
        title: 'What cards can be processed by Fastoo?',
        description:
          'We are able to give you the possibility to accept cards bearing Visa, MasterCard, MIR logos as well as other major credit card payments. Contact us to know the full list of accepted credit cards.',
      },
      {
        title: 'How long does it take to set up?',
        description:
          'Your merchant account application will be checked within 24 hours. As soon as our acquirer considers your application in a positive way and you provide us with all the required documents you will be able to accept credit card payments on your website. It typically takes up 2 days.',
      },
      {
        title: 'What is registration for?',
        description:
          'Merchants are able to register on our website and have an access to cabinet. When integration is done, merchant obtains completely functional cabinet with advanced tools and report system. Before that the most of options are unavailable.',
      },
      {
        title: 'Where payment page is actually situated? I want customers stay on my website.',
        description:
          'That is okay, we can do it. Own payment page or iFrame might be the option you are looking for. In the terms of it your customers will not be redirected and the payment page appearance is up to you. Please note that Own payment page option requires PCI DSS license. Contact us to learn more about Fastoo integration options.',
      },
      {
        title: 'What is the price for my business?',
        description:
          'Fastoo works with multitude of different industries and each has own features. Fastoo pricing attitude is the most friendly in the market as our prices are fair and transparent. Contact us to learn more about pricing.',
      },
      {
        title: 'What is the main difference between direct merchant account and aggregated?',
        description:
          'Direct merchant or dedicated merchant account is merchant’ s exclusive and fully controlled account, not shared with other merchants. It is a flexible option with less processing fees which will give you a lot of benefits. To get it the merchant must satisfy all the requirements and provide the full package of documents. The account in the name of a 3rd party is called third-party or aggregated account. For those, who may have difficulties in obtaining their own account due to the type of business or a poor credit history, aggregated merchant account is the best alternative. In this case a large bank account is created and the merchants funds are processed and then dispersed to the individual merchants. It can be risky because there are other companies on the same account with you. The advantage of this type of account is that the acquirers have less strict acceptance criteria and it is relatively easy to get it.',
      },
      {
        title: 'How do I handle refunds?',
        description:
          'Refund is made in case of order cancellation and there are various reasons why customers may wish to return merchandise or service. A refund can be for any purpose, like defectiveness of goods, mistaken purchase of the unsuitable product or personal dissatisfaction. But regardless the reason of initiated refund, it is always between the merchant and its customer. To process a refund, you may follow several easy steps. You login to your merchant account, click on the transaction you wish to be refunded and just use the Refund button.',
      },
      {
        title: 'How does Fastoo prevent fraud?',
        description:
          'Fastoo provides safe and relevant payment services by implementing a mix of standards, rules and approaches. We are constantly doing our best to improve our anti-fraud system. This is achieved by the inclusion of a self-learning system of mathematical models, continuous improvement of the software and our professional analysts, availability of large and static database of successful and fraud transactions and may other options.',
      },
      {
        title: 'Does Fastoo support recurring billing?',
        description:
          'Recurring payments are the payments made automatically at regular intervals. Here is an example. A customer purchases a membership with a monthly cycle type. The order is set up and recurs every month and the customer’s credit card is automatically charged to process following payments in a fixed schedule. Fastoo supports recurring billing and subscription services.',
      },
    ];

    return { faqList };
  },
  components: {
    VFaq,
  },
};
</script>

<style lang="scss" scoped>
@import './faq.scss';
</style>
