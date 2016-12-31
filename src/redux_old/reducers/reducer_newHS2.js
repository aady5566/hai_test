export default function(state = null, action) {
  switch(action.type) {
  case 'HS2_SELECTED':
    return action.hs2;
  }

  return state;
}
