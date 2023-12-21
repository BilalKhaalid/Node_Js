// !  A stream is a continuous flow of data that's being processed or transferred in a system, often byte by byte or by chunks

// ! A buffer is a temporary storage area in computer memory that holds data while it's being transferred from one place to another.

// ! Examples
/*  Imagine YouTube as a Buffet Restaurant:

    Buffer (Food Trays):
        Original Definition: A buffer is like a temporary storage area.
        Simple Explanation: In a buffet, people are grabbing food from different dishes at different rates. To avoid running out or overwhelming the chef, there's a buffer of food trays. The trays hold a limited amount of each dish, ensuring a smooth and steady supply of food without overloading the kitchen.

    Stream (Food Serving Line):
        Original Definition: A stream is a continuous flow of data.
        Simple Explanation: The food serving line in the buffet is like a stream. People move along the line, picking up the food they want. The chef keeps adding new dishes to the serving line to maintain a continuous flow.

Putting it Together:

    Buffer (Food Trays): Imagine you're watching a YouTube video. The buffer is like a temporary storage area for the video. Instead of waiting for the entire video to load before you start watching, YouTube loads a portion of the video into a buffer. This buffer ensures that you can start watching without interruptions while the rest of the video continues to load.

    Stream (Food Serving Line): The video streaming process is like the continuous flow of food in a buffet. As you watch the video, YouTube is constantly sending data (frames of the video) to your device in a continuous stream. This allows you to watch the video without having to wait for the entire file to download.

So, in YouTube terms:

    Buffer (Food Trays): A temporary storage area that holds part of the video, ensuring a smooth viewing experience by allowing you to start watching while the rest loads.
    Stream (Food Serving Line): The continuous flow of video data sent to your device, enabling seamless playback.

Just like in a buffet, the buffer and stream work together to provide a satisfying and uninterrupted experience. */

const buffer = new Buffer.alloc(5, "Bilal");

console.log(buffer.toJSON());
console.log(buffer.toString());
