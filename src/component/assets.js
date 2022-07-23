import ThumbsUpEmojiSVG from './data/thumbs-up.svg'; 
import HeartEmojiSVG from './data/heart.svg';
import LaughEmojiSVG from './data/laugh.svg';
import EmotionalEmojiSVG from './data/emotional.svg';
import TearsEmojiSVG from './data/tears.svg';
import ShockedEmojiSVG from './data/shocked.svg';

function getReactionData(name=null) {
    if (!name) {
        const reactionData = [
            { content: ThumbsUpEmojiSVG, name: 'thumbs-up' },
            { content: HeartEmojiSVG, name: 'heart' },
            { content: LaughEmojiSVG, name: 'laugh' },
            { content: TearsEmojiSVG, name: 'tears' },
            { content: ShockedEmojiSVG, name: 'shocked' },
            { content: EmotionalEmojiSVG, name: 'emotional' }
        ];
        return reactionData;
    } else {
        switch(name) {
            case 'thumbs-up': return ThumbsUpEmojiSVG;
            case 'heart': return HeartEmojiSVG;
            case 'laugh': return LaughEmojiSVG;
            case 'tears': return TearsEmojiSVG;
            case 'shocked': return ShockedEmojiSVG;
            case 'emotional': return EmotionalEmojiSVG;

            default: console.warn('emoji not found'); break;
        }
    }
}

async function getMoreReactionsData() {
    let emojisList = [];
    const emojiAPIBaseURL = 'https://emoji-api.com/emojis';
    const emojiAPIRequest = `${emojiAPIBaseURL}?access_key=61908277211628e9df7fae3fe6be1a63838a0da1`;
    let apiResponse = await fetch(emojiAPIRequest);
    let apiResponseJSON = await apiResponse.json();
    apiResponseJSON?.map((emoji) => (
        emojisList.push({
            title: emoji?.slug,
            image: emoji?.character
        })
    ));
    return await emojisList;
}

function getProfilePicture() {
    return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
}

export {
    getReactionData,
    getProfilePicture,
    getMoreReactionsData
}