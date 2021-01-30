import createPersistedState from 'use-persisted-state';

const friendState = createPersistedState('friend');

const useFriends = () => {
    const [friendChoices, setFriendChoices] = friendState([]);

    return [friendChoices, setFriendChoices];
};

export default useFriends;
