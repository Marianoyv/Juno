const text = document.querySelector(".changer");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Compro Cobre";
        }, 0);
        setTimeout(() => {
            text.textContent = "Compro Bronce";
        }, 2000);
        setTimeout(() => {
            text.textContent = "Compro Plomo";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Compro Aluminio";
        }, 6000);
        setTimeout(() => {
            text.textContent = "Compro Perfil";
        }, 8000);
        setTimeout(() => {
            text.textContent = "Compro Acero";
        }, 10000);
        setTimeout(() => {
            text.textContent = "Compro Carter";
        }, 12000);
        setTimeout(() => {
            text.textContent = "Compro Radiadores";
        }, 14000);
        setTimeout(() => {
            text.textContent = "Compro Cables";
        }, 16000); //1s = 1000 milliseconds
    }
    textLoad();
    setInterval(textLoad, 12000);