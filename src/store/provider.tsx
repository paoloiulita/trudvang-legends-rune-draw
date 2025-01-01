import { PropsWithChildren, useReducer } from 'react';
import { AppState, AvailableActions, } from '../types';
import { Action } from '../enums';
import { AppContext, AppDispatchContext, initialState } from './context';

const reducer = (state: AppState, action: AvailableActions) => {
	console.log('action')
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case Action.Sth: {
			return {
				...state,
			}
		}
		case Action.Soth: {
			return {
				...state,
			}
		}
		default: {
			return state
		}
	}
}

export const Provider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	)
}
