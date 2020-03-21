import React, {createContext, useContext, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import userReducer from './reducers/user_reducer'
import booksReducer from "./reducers/books_reducer";
import moviesReducer from './reducers/movies_reducer'
// 1. 初始化数据，将数据都放在 store 中
const store = {
    user: null,
    books: null,
    movies: null
};
const obj = {
    ...userReducer,
    ...booksReducer,
    ...moviesReducer
}
// 2. 将所有操作集中在 reducer(state, action) 中
const reducer = (state, action) => {
    const fn = obj[action.type]
    if(fn){
        return fn(state, action)
    }else {
        throw new Error('unKnow Type')
    }
};
// 3. 创建 Context
const Context = createContext(null);


const App = () => {
    // 4. 创建读写 API
    const [state, dispatch] = useReducer(reducer, store);
    // 5. 将 4 与 3 结合起来
    // 6. 用 Context.Provider 将 Context 提供给所有组件
    return (
        <Context.Provider value={{state, dispatch}}>
            <User/>
            <Books/>
        </Context.Provider>
    );
};
const User = () => {
    // 7. 各个组件通过 useContext 提供给各个组件
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        ajax('/user').then(user => {
            dispatch({type: 'setUser', user});
        });
    }, []);
    return (
        <div>
            {state.user ? state.user.name : ''}
        </div>
    );
};
const Books = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        ajax('/books').then(books => {
            dispatch({type: 'setBooks', books});
        });
    }, []);
    return (
        <ol>
            {state.books && state.books.map(book=><li key={book.id}>{book.name}</li>)}
        </ol>
    )
};

function ajax(path) {
    return new Promise((resolve, reject) => {
            if (path === '/user') {
                setTimeout(() => {
                        resolve({id: 1, name: 'rourou'});
                    }, 2000
                );
            }else if (path === '/books') {
                setTimeout(() => {
                        resolve([{id: 1, name: '我和我的祖国'},{id: 2, name: '建功伟业'}]);
                    }, 2000
                );
            }
        }
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

