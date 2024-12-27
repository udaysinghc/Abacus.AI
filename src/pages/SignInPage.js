exports.SignInPage=class SignInPage{

    constructor(page)
    {
        this.page=page;
        this.emailField="input[type='email']";
        this.passwordField="input[type='password']";
        this.signInButton="button[type='submit']";
        this.requiredField="[class*='flex items-baseline justify-between m'] span";
        this.incorrectMessage="[aria-label='Close toast']+div+div";
    }

    async signInWithInvalidEmail(invalidEmail, password)
    {
        await this.page.locator(this.emailField).fill(invalidEmail)
        await this.page.locator(this.passwordField).fill(password)
        await this.page.locator(this.signInButton).click()
        await this.page.waitForSelector(this.requiredField)
    }

    async signInWithInvalidPassword(Email, InvalidPassword)
    {
        await this.page.locator(this.emailField).fill(Email)
        await this.page.locator(this.passwordField).fill(InvalidPassword)
        await this.page.locator(this.signInButton).click()
        await this.page.waitForSelector(this.incorrectMessage)
    }
}