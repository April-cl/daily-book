let id = 0
const createId = ():number => {
  id += 1
  console.log(id);
  return id
}

export {createId}