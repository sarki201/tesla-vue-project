import { type InjectionKey } from "vue";
// @ts-ignore
import { createStore, useStore as baseUseStore, Store } from "vuex";

export type State = {
  modals: {
    isAsideOpen: boolean;
    isTimeframeOpen: boolean;
    isPeopleOpen: boolean;
    isTopicOpen: boolean;
  };
  isOverlayActive: boolean;
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    modals: {
      isAsideOpen: false,
      isTimeframeOpen: false,
      isPeopleOpen: false,
      isTopicOpen: false,
    },
    isOverlayActive: false,
  },
  mutations: {
    openAside(state: State) {
      state.modals.isAsideOpen = true;
      state.isOverlayActive = true;
    },
    openTimeframe(state: State) {
      state.modals.isTimeframeOpen = true;
      state.isOverlayActive = true;
    },
    openPeople(state: State) {
      state.modals.isPeopleOpen = true;
      state.isOverlayActive = true;
    },
    openTopic(state: State) {
      state.modals.isTopicOpen = true;
      state.isOverlayActive = true;
    },
    closeAllModals(state: State) {
      Object.keys(state.modals).forEach((key): void => {
        //@ts-ignore
        state.modals[key] = false;
      });
      state.isOverlayActive = false;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
