import StoryItem from "./StoryItem"; 

const StoryItems = (props) => {
    

    return(
        <>
            <StoryItem val={props.c}></StoryItem>
            <StoryItem val={parseInt(props.c)+1}></StoryItem>
            <StoryItem val={parseInt(props.c)+2}></StoryItem>
        </>
    );
}

export default StoryItems;