import { useEffect } from "react";




export default function useCustomHook(content, posts, images) {
    useEffect(() => {
        if(content.length != 0) {
            console.log(content, "content");
        }
    }, [content]);


    useEffect(() => {
        if(posts.length != 0) {
            console.log(posts, "posts");
        }
    }, [posts]);

    useEffect(() => {
        if(images.length != 0) {
            console.log(images, "images");
        }
    }, [images]);

}


