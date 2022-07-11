import { ReactComponent as ThumbsUpEmojiSVG } from './data/thumbs-up.svg'; 
import { ReactComponent as HeartEmojiSVG } from './data/heart.svg';
import { ReactComponent as LaughEmojiSVG } from './data/laugh.svg';
import { ReactComponent as EmotionalEmojiSVG } from './data/emotional.svg';
import { ReactComponent as TearsEmojiSVG } from './data/tears.svg';
import { ReactComponent as ShockedEmojiSVG } from './data/shocked.svg';

function ThumbsUpEmoji() {
    return <ThumbsUpEmojiSVG />
}

function HeartEmoji() {
    return <HeartEmojiSVG />
}

function LaughEmoji() {
    return <LaughEmojiSVG />
}

function EmotionalEmoji() {
    return <EmotionalEmojiSVG />
}

function TearsEmoji() {
    return <TearsEmojiSVG />
}

function ShockedEmoji() {
    return <ShockedEmojiSVG />
}

export {
    ThumbsUpEmoji,
    HeartEmoji,
    LaughEmoji,
    ShockedEmoji,
    TearsEmoji,
    EmotionalEmoji
}