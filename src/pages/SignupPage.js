exports.SignupPage=class SignupPage{

    constructor(page)
    {
        this.page=page;
        this.signupLink="[class*=' cursor-pointer text']";
        this.nameField="[placeholder=' Name']";
        this.emailField="[placeholder=' Email']";
        this.passwordField="[placeholder=' Password']";
        this.signupButton="[type='submit']";
        this.signinLink="[class*=' cursor-pointer t']";
        this.requirdField="[class*='flex items-baseline'] span";
    }

    async signUpIntoTheApplication()
    {
        await this.page.click(this.signupLink)
        await this.page.waitForTimeout(2000)
        await this.page.click(this.signupButton)
        await this.page.waitForSelector(this.requirdField)
        await this.page.waitForTimeout(2000)
    }

    async signUpWithSomeData(name,email)
    {
        await this.page.click(this.signupLink)
        await this.page.locator(this.nameField).fill(name)
        await this.page.locator(this.emailField).fill(email)
        await this.page.click(this.signupButton)
        await this.page.waitForSelector(this.requirdField)
    }

    async signUpWithInvalidEmail(name,invalidEmail,password)
    {
        await this.page.click(this.signupLink)
        await this.page.locator(this.nameField).fill(name)
        await this.page.locator(this.emailField).fill(invalidEmail)
        await this.page.locator(this.passwordField).fill(password)
        await this.page.click(this.signupButton)
        await this.page.waitForSelector(this.requirdField)
        const message=await this.page.locator(this.requirdField).textContent()
        console.log(message)
    }

    async signUpWithInvalidPassword(name,email,invalidPassword)
    {
        await this.page.click(this.signupLink)
        await this.page.locator(this.nameField).fill(name)
        await this.page.locator(this.emailField).fill(email)
        await this.page.locator(this.passwordField).fill(invalidPassword)
        await this.page.click(this.signupButton)
        await this.page.waitForSelector(this.requirdField)
        const message=await this.page.locator(this.requirdField).textContent()
        console.log(message)
        
    }
}