import { configureStore } from '@reduxjs/toolkit';
import fleet from '@/modules/assets/fleet/reducer';
import balance from '@/modules/infrastructure/balance/reducer';

export const store = configureStore({
  reducer: {
    balance,
    fleet,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
