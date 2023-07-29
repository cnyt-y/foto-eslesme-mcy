let puanText = document.getElementById('puanText');
puan = 0;

puanText.innerHTML = "0"

const kartTemplate = `
    <div class="kart-cerceve">
        <div class="kart-onyuz">
            <img src="https://via.placeholder.com/100x100?text=?">
        </div>

        <div class="kart-arkayuz">
            <img src="">
        </div>
    </div>
`;

let randomNum = function () {
    let randomArray = [];

    for (let i = 0; i < 8; i++) {
        
        let randomNumbers = Math.floor(Math.random() * 99);
        randomArray.push(randomNumbers, randomNumbers);
        if (randomArray.length > 6) break;
    }
    return randomArray
};

    if (acikKartImg.src === secilenKartImg.src) {
        //İki açık kart arasında eşleşme var.
        acikKart.classList.add("eslesti");
        secilenKart.classList.add("eslesti");

        puan++;

        console.log(puan);

        puanText.innerHTML = puan;

        if (puan == 8) {
            var congrats = document.createElement('img');
            congrats.src = "https://media.giphy.com/media/26tk0jALFpsXmAF8c/giphy.gif"
            imageShow = document.querySelector('body').appendChild(congrats);
            console.log("Tebrikler");

            setTimeout(function () {
                imageShow.remove();
                console.log("Image Deleted");
            }, 5000);
        }

        /* Görev 1. */

        acikKart.classList.remove("acik");
        secilenKart.classList.remove("acik");

        setTimeout(() => {
            acikKart.removeEventListener("click", kartTiklama);
            secilenKart.removeEventListener("click", kartTiklama);
        }, 1000);
    } else {
        //İki açık kartın görsel dosya adı birbirinden farklı, eşleşme yok, kartlar kapansın.
        setTimeout(() => {
            acikKart.classList.remove("acik");
            secilenKart.classList.remove("acik");
        }, 1500);
    }
}