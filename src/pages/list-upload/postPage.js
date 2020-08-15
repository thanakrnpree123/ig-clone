import React, { useEffect, useState } from "react";
import * as loadingData from "../../loading.json";
import * as successData from "../../success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import PostList from "../../components/Post/postList";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setLoading(true);
          setTimeout(() => {
            setSuccess(true);
          }, 1000);
        });
    }, 1500);
  }, []);

  return (
    <div>
      {!success ? (
        <FadeIn>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20%",
            }}
          >
            {!loading ? (
              <Lottie options={defaultOptions} height={140} width={140} />
            ) : (
              <Lottie options={defaultOptions2} height={140} width={140} />
            )}
          </div>
        </FadeIn>
      ) : (
        <PostList />
      )}
    </div>
  );
}
