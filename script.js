function showVideo(videoId) {

    /* For pages with multiple videos */

    if (videoId) {

        const video = document.getElementById(videoId);

        if (!video) {
            return;
        }

        video.style.display = "block";

        const player = video.querySelector("video");

        if (player) {
            player.play();
        }

        return;
    }


    /* For pages with one video */

    const lectureContent = document.getElementById("lectureContent");

    const videoContainer = document.getElementById("videoContainer");

    if (lectureContent) {
        lectureContent.style.display = "none";
    }

    if (videoContainer) {
        videoContainer.style.display = "block";

        const player = videoContainer.querySelector("video");

        if (player) {
            player.play();
        }
    }

}