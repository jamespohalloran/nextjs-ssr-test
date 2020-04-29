import Link from "next/link";

const Test = (props) => {
  function startPreview() {
    // Default options are marked with *
    fetch("/api/preview").then(() => {
      window.location.href = window.location.pathname;
    });
  }

  return (
    <>
      <h1>{props.date}</h1>
      {props.preview ? (
        <>
          <h2>Hi {props.previewData.username}</h2>
        </>
      ) : (
        <button onClick={startPreview}>Enter Preview Mode</button>
      )}

      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </>
  );
};

export default Test;

export const getStaticProps = async ({ preview = false, previewData = {} }) => {
  console.log("getStaticProps");
  return {
    props: {
      date: new Date().toString(),
      preview,
      previewData,
    },
  };
};
