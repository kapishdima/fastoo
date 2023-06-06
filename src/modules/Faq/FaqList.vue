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
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is a chargeback and how to avoid it?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'How can I start?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is rolling reserve?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What cards can be processed by Fastoo?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'How long does it take to set up?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is registration for?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'Where payment page is actually situated? I want customers stay on my website.',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is the price for my business?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'What is the main difference between direct merchant account and aggregated?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'How do I handle refunds?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'How does Fastoo prevent fraud?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
      },
      {
        title: 'Does Fastoo support recurring billing?',
        description:
          'Fastoo INC. is a Canadian company, licensed by the standards of Money Service Business (MSB) that builds business upon high-quality service and customers’ trust, providing that individual and attentive approach, immediate reaction to inquiries, readiness to provide nothing but the best possible service are the qualities to focus on, because they make us reliable. Every person in Fastoo knows that reputation we have gained through years of conscientious work is our main property. We are sure that such attitude towards clients and partners leads to mutual prosperity and business achievements. Fastoo’s main goal is to continue to prove that our solutions are the most appropriate, the most dependable and, of course, the most affordable. You will never find any kind of hidden fees, concealed charges and deliberate misunderstandings in our offerings.',
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
