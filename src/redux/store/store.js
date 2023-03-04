import React from 'react';
// import redux files 
import {  createStore } from 'redux';

// import reducers
import reducer from '../reducers';

export default function configStore () {
    let store = createStore(reducer )

    return store
}