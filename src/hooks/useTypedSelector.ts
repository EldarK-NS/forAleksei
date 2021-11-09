// import {useSelector, TypedUseSelectorHook} from 'react-redux';

// import {RootState} from '../redux/reducers/rootReducer';

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export {}

//! так как мы изначально определяем структуру стейта через интерфейс IUsersState, то TS определяет егов конкретном виде, и при попытке получения конкретного поля из объекта стейта на приходится прохоить через верхнюю обертку, а ее в плане интерфейса не указано что и ведет к ошибке, этот хук как бы расшивает роот стейт, при этом необходимо создать рутСтейт в редьюсере export type RootState = ReturnType<typeof rootReducer>;