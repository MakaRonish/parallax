// const track = document.getElementById("image-track");

// window.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// }

// window.onmouseup = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// window.onmousemove = e => {
//     if (track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;
//     let percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
//     nextPercentage = Math.min(0, Math.max(-100, nextPercentage));
//     track.dataset.percentage = nextPercentage;
//     track.animate({
//         transform: `translate(${nextPercentage}%, -50%)`
//     }, { duration: 1200, fill: "forwards" });




//     for (const image of track.getElementsByClassName("image")) {
//         image.animate({
//             objectPosition: `${nextPercentage + 100}% center`
//         }, { duration: 1200, fill: "forwards" });

//     }
// }

const track = document.getElementById("image-track");

let mouseDownAt = 0;
let prevPercentage = 0;
let isDragging = false;

window.onmousedown = e => {
    mouseDownAt = e.clientX;
    isDragging = true;
}

window.onmouseup = () => {
    isDragging = false;
    prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if (!isDragging) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    let percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(prevPercentage) + percentage;
    nextPercentage = Math.min(0, Math.max(-100, nextPercentage));

    track.dataset.percentage = nextPercentage;
    requestAnimationFrame(() => {
        track.style.transform = `translate(${nextPercentage}%, -50%)`;
        for (const image of track.getElementsByClassName("image")) {
            image.style.objectPosition = `${nextPercentage + 100}% center`;
        }
    });
}



