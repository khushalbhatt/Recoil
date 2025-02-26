import { atom, selector } from 'recoil';

export const countAtom = atom({
  key: 'countAtom',
  default: 0,
});

export const todoAtom = atom({
    key: 'todoAtom',
    default: [
        { id: 1, title: 'Learn React' },
        { id: 2, title: 'Learn Recoil' },
        { id: 3, title: 'Learn Redux' },
    ],
  });
  

export const todoselector = selector({
    key: 'todoselector',
    get:  ({get}) => {
        const todo = get(todoAtom);
        return todo;
}
});
  

export const evenSelector = selector({
  key: 'evenSelector',
  get: ({get}) => {                  // (props)
    const count = get(countAtom);    // props.get(countAtom)
    return count % 2;
  },
});

