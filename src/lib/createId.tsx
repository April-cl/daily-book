let id = parseInt(window.localStorage.getItem('idMax') || '0')
const createId = ():number => {
  id += 1
  // console.log('idMax');
  // console.log(window.localStorage.getItem('idMax'));
  // console.log('id');
  // console.log(id);
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id
}

export {createId}