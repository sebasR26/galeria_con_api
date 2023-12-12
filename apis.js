const main = document.querySelector("main")

async function galeria(){
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const fotos = await res.json()

    for(let i=0; i < 12; i++){
        const f = fotos[i];
        console.log(f)

        const carta = document.createElement("div");
        carta.className="imagenes";

        const img = document.createElement("img");
        img.src = f.url;

        carta.append(img);
        main.append(carta);
    }
}

galeria()

