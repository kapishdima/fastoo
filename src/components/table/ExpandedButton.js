import { h } from 'vue';

export const expandedButton = (value, isExpanded) => {
  return h('div', { class: 'table-expanded__column' }, [
    h(
      'button',
      {
        class: `table-expanded__button ${isExpanded ? 'expanded' : ''}`,
      },
      [h('img', { src: require('@/assets/icons/chevron-right.svg') })],
    ),
    value,
  ]);
};
