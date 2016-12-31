export default function(state = null, action) {
  switch(action.type) {
  case 'HS6_SELECTED':
    return action.hs6;
  }

  return state;
}
