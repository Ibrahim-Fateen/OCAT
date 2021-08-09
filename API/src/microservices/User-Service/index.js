const { Users } = require(`../Database`);
const bcrypt = require(`bcrypt`);

const saltRounds = 12;

exports.login = async (credentials) => {

  const { username } = credentials.credentials;
  const { password } = credentials.credentials;

  async function checkUser(uname, pwd) {
    async function fetch_user(name) {
      try {
        return await Users.where({ username: name }).fetch({ require: true }).then((resData) => resData.serialize());
      } catch (error) {
        // return wrong username error
        return `user not found`;
      }
    }
    const user = await fetch_user(uname);
    // if wrong username error returned:
    //    return wrong username error
    if (user === `user not found`) {
      return user;
    }

    const { hash } = user;
    const { is_supervisor } = user;

    const match = await bcrypt.compare(pwd, hash);

    if (match) {
      return is_supervisor;
    }

    // return wrong password error
    return `wrong password`;

  }
  const token = await checkUser(username, password);
  return token;
};
