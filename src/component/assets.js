import ThumbsUpEmojiSVG from './data/thumbs-up.svg'; 
import HeartEmojiSVG from './data/heart.svg';
import LaughEmojiSVG from './data/laugh.svg';
import EmotionalEmojiSVG from './data/emotional.svg';
import TearsEmojiSVG from './data/tears.svg';
import ShockedEmojiSVG from './data/shocked.svg';

function getReactionData() {
    const reactionData = [
        { content: ThumbsUpEmojiSVG },
        { content: HeartEmojiSVG },
        { content: LaughEmojiSVG },
        { content: TearsEmojiSVG },
        { content: ShockedEmojiSVG },
        { content: EmotionalEmojiSVG }
    ];
    return reactionData;
}

export {
    getReactionData
}