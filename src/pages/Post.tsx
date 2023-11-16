import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import Input from "../components/Input";
import Button from "../components/Button";
import { Success } from "../components/Messages";

import { IImage, IComment } from "../types";
import { api } from "../api/apiSlice";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentSection = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Comment = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  & span {
    font-weight: 1000;
  }
`;

const Post = () => {
  const { data: images, isLoading } = api.useFetchImagesQuery({});
  const [postComment, { data: responsePost, isSuccess: isSuccessPost }] =
    api.usePostCommentMutation();
  const [deleteComment, { data: responseDelete, isSuccess: isSuccessDelete }] =
    api.useDeleteCommentMutation();

  const { id } = useParams();

  const [comment, setComment] = useState("");
  const onChangeComment = (e: any) => {
    setComment(e.target.value);
  };

  const currentImage = images?.data.find(
    (item: IImage) => item.id.toString() === id
  );
  const currentUserId = localStorage.getItem("userId");

  const onSubmit = () => {
    postComment({ id, text: comment, userId: currentUserId });
  };

  const onDelete = (commentId: number) => {
    deleteComment({ id, commentId });
  };

  const isUserAuth = localStorage.getItem("token");

  const navigate = useNavigate();
  const goTo = useCallback((url: string) => navigate(url), [navigate]);

  if (!isUserAuth) {
    goTo("/login");
  }

  if (isLoading) return <Page>Loading...</Page>;

  return (
    <Page>
      <Container>
        <img src={currentImage?.url} alt={currentImage?.title} />
        <CommentSection>
          <h2>{currentImage?.title}</h2>
          {currentImage.comments.map((comment: IComment) => (
            <Comment key={comment.id}>
              <p>
                <span>user {comment.userId}:</span> {comment.text}
              </p>
              {currentUserId == comment.userId && (
                <Button
                  label="Delete"
                  type="delete"
                  onAction={() => onDelete(comment.id)}
                />
              )}
            </Comment>
          ))}
          <Input
            label="Tap your comment"
            value={comment}
            rows={4}
            onChange={onChangeComment}
          />
          <Button label="Sent" type="submit" onAction={onSubmit} />
          {(responsePost && isSuccessPost) ||
          (responseDelete && isSuccessDelete) ? (
            <Success>Success!</Success>
          ) : null}
        </CommentSection>
      </Container>
    </Page>
  );
};

export default Post;
