

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

const users = {
  0: { name: "Ипатий", lastname: "Ельцин" },
  1: { name: "Валерия", lastname: "Ялбачевa" },
  2: { name: "Ксения", lastname: "Тетеринa" },
  3: { name: "Нина", lastname: "Ельцинa" },
  4: { name: "Владислава", lastname: "Енютинa" },
  5: { name: "Юлия", lastname: "Юлбачевa" },
  6: { name: "Петр", lastname: "Праздников" },
  7: { name: "Владислав", lastname: "Вольпов" },
  8: { name: "Константин", lastname: "Вольпов" },
  9: { name: "Нина", lastname: "Тетеринa" },
  10: { name: "Владислав", lastname: "Яблочков" },
};

export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}