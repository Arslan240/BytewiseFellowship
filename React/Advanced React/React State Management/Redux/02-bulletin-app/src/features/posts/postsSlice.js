import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsup: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    },
},
{
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsup: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    },
},
];

// inside createSlice we can do state.push, because redux uses immerjs underneath which handles such mutation and create new state and pass it to react. It's implemented this way so that logic is easier to build. It only works inside createSlice.

// prepare callback is a function which accepts arguments and creates a properly formated payload, which is then passed to reducer function.

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
        reducer(state, action) {
            state.push(action.payload);
        },
        prepare(title, content, userId){
            return {
                payload: {
                    id:nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsup: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    },
                }
            }
        }
    },
    reactionAdded(state, action){
        const {postId, reaction} = action.payload
        const existingPost = state.find(post => post.id === postId)

        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
  },
});

// selector is a function which is used to extract state from store. If we define selector in our component. Then there is tight coupling and if the state structure ever changes, we need to apply changes here too. So we implement selector in slice file and export it.
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
