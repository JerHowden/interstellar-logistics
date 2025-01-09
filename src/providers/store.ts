import { configureStore } from '@reduxjs/toolkit';
import fleet from '@/modules/assets/fleet/reducer';
import balance from '@/modules/infrastructure/balance/reducer';
import map from '@/modules/map/reducer';

export const store = configureStore({
  reducer: {
    balance,
    fleet,
    map,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
