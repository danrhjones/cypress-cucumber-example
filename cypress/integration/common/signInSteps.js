import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import SignIn from "../../elements/pages/SignInPage";
import AddPost from "../../elements/pages/addPost";

Given("I have saved a post", () => {
  SignIn.login();

  AddPost.newPost();
});

When(/^I attempt to view the revisions$/, () => {
  // Todo open the revisions bit

});

Then(/^I see that there is no content to process$/, () => {
// todo
});
