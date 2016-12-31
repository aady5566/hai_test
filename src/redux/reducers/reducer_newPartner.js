export default function(state = null, action) {
  switch(action.type) {
  case 'PARTNER_SELECTED':
    return action.partner;
  }

  return state;
}
