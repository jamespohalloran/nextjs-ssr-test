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
        <button>Exit Preview Mode</button>
      ) : (
        <button onClick={startPreview}>Enter Preview Mode</button>
      )}
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
