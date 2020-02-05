import 'react-addons-update';

const initialStore = {
    name: 'Ashtray',
    age: 69,
    email: 'abcdefg@gmail.com'
};

export default function profileReducer(store = initialStore) {
    return store;
}