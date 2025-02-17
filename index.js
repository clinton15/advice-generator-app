const getAdvice = async () => {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  const idElement = document.getElementById("adviceId");
  const paraElement = document.getElementById("advice");

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    idElement.innerHTML = data?.slip?.id;
    paraElement.innerHTML = `"${data?.slip?.advice}"`;
    loader.style.display = "none";
  } catch (error) {
    console.log(error);
  }
};
