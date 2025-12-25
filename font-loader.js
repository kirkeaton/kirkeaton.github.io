self.onmessage = async () => {
  try {
    const response = await fetch(
      "https://fonts.gstatic.com/s/ibmplexsans/v23/zYXzKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1syxeKYbSB4Zh.woff2",
    );
    const buffer = await response.arrayBuffer();
    self.postMessage({ status: "success", family: "IBM Plex Sans", buffer });
  } catch (error) {
    self.postMessage({ status: "error", error: error.message });
  }
};
