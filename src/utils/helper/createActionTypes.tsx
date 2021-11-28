type Ttype = string;
type Tnamespace = string;

const createActionType = (namespace: Tnamespace, type: Ttype) => `${namespace}/${type}`

function getActionTypes<ReturnType>(namespace: Tnamespace, types: Ttype[]) {
  
  return types.reduce((acc, type) => ({
    ...acc,
    [type]: createActionType(namespace, type),
  }), {}) as ReturnType
}

export default getActionTypes;