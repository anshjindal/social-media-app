import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currArry, action) => {
  return currArry;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPostList = () => {};

  const deletePostList = () => {};

  return (
    <PostList.Provider value={{ postList, addPostList, deletePostList }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Btech passed",
    body: "After 4 years, i have passed.",
    reactions: 3,
    userId: "user-10",
    tags: ["btech", "passed", "party"],
  },
];

export default PostListProvider;
