import React, { useEffect } from "react";

import { fetchPost, postSelector } from "../slices/post";
import { commentsSelector, fetchComments } from "../slices/comments";

// Components
import { Comment } from "../components/Comment";
import { Post } from "../components/Post";
import { useDispatch, useSelector } from "react-redux";

const PostPage = ({ match }) => {
  const dispatch = useDispatch();
  const {
    comments,
    loading: commentsLoading,
    hasErrors: commentHasErrors,
  } = useSelector(commentsSelector);
  const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
    postSelector
  );

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (postLoading) return <p>Loading post</p>;
    if (postHasErrors) return <p>Unable to load post</p>;
    return <Post key={post.id} post={post} />;
  };

  const renderComments = () => {
    if (commentsLoading) return <p>Loading comment</p>;
    if (commentHasErrors) return <p>Unable to load post</p>;
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      {console.log("Post: ", post)}
      {console.log("Comment: ", comments)}
      {renderPost()}
      <h3>Comment</h3>
      {renderComments()}
    </section>
  );
};

export default PostPage;
