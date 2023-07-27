import { atom, selector } from 'recoil';

export const minuteState = atom({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector({
  key: 'hours',
  get: ({ get }) => {
    return get(minuteState) / 60;
  },
  set: ({ set }, newValue) => {
    set(minuteState, Number(newValue) * 60);
  },
});
