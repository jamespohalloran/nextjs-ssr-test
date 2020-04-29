export default (req, res) => {
  res.setPreviewData({
    username: "Frankie",
  });

  console.log("set preview data");
  res.end("Preview mode enabled");
};
