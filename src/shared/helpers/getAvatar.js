const getAvatar = () => {
  const avatar = [1, 2, 3, 4, 5, 6, 7,]
  const randomAvatar = avatar[Math.floor(Math.random() * avatar.length)]

  return{randomAvatar}
}

export default getAvatar