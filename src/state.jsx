

const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  id: "1",
  about:
    "Также как граница обучения кадров играет важную роль в формировании новых принципов формирования материально-технической и кадровой базы.Задача организации, в особенности же выбранный нами инновационный путь выявляет срочную потребность как самодостаточных, так и внешне зависимых концептуальных решений.",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU",
};
// let users = {};
// const users = {
//   0: { name: "Ипатий", lastname: "Ельцин", id: 4 },
//   1: { name: "Валерия", lastname: "Ялбачевa", id: 6 },
//   2: { name: "Ксения", lastname: "Тетеринa", id: 32 },
//   3: { name: "Нина", lastname: "Ельцинa", id: 45 },
//   4: { name: "Владислава", lastname: "Енютинa", id: 11 },
//   5: { name: "Юлия", lastname: "Юлбачевa", id: 25 },
//   6: { name: "Петр", lastname: "Праздников", id: 36 },
//   7: { name: "Владислав", lastname: "Вольпов", id: 86 },
//   8: { name: "Константин", lastname: "Вольпов", id: 3 },
//   9: { name: "Нина", lastname: "Тетеринa", id: 72 },
//   10: { name: "Владислав", lastname: "Яблочков", id: 66 },
// };
let users ={};
export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if(users[i].id == userId) return users[i];
  }
  return user;
}
export async function getUsers() {
  let response = await fetch("https://orabelle.p-host.in/getUsers");
  users = await response.json();
  // console.log(users);
  return users;
}