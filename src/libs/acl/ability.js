import { Ability } from "@casl/ability";
import { initialAbility } from "./config";

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user 如果用户已登录，则处理自动获取以前的功能
// ? You can update this if you store user abilities to more secure place   如果您将用户功能存储到更安全的位置，则可以更新此功能
// ! Anyone can update localStorage so be careful and please update this    任何人都可以更新localStorage，因此请小心并更新此
const userData = JSON.parse(localStorage.getItem("userData"));
const existingAbility = userData ? userData.ability : null;

export default new Ability(existingAbility || initialAbility);
