const getAdvice = async () => {
  const idElement = document.getElementById("adviceId");
  const paraElement = document.getElementById("advice");

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    idElement.innerHTML = data?.slip?.id;
    paraElement.innerHTML = `"${data?.slip?.advice}"`;
  } catch (error) {
    console.log(error);
  }
};
