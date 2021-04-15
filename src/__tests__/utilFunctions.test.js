import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('ShortenText should not alter a string with less then 100 chars', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});
test('shortenText should cut off extra characters after 100 and leave three periods', () => {
    const shortend = shortenText(longText);
    expect(shortend).not.toHaveLength(longText.length);
    expect(shortend.slice(-3)).toBe('...');
});
test('attachUserName should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});
test('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });