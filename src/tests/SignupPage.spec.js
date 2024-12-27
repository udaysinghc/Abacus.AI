import{test,expect} from '@playwright/test'
import { SignupPage } from '../pages/SignupPage.js'
import { page,testdata } from '../setup/Hooks.js'

require('../setup/Hooks.js')

test('Sign Up To Application With out any data', async()=>{
    const signuppage=new SignupPage(page)
    await signuppage.signUpIntoTheApplication()
})

test('Sign Up To The Application with some data', async()=>{
    const signuppage=new SignupPage(page)
    await signuppage.signUpWithSomeData(testdata.name,testdata.email)
})

test('sign Up with invalid email', async()=>{
    const signuppage=new SignupPage(page)
    await signuppage.signUpWithInvalidEmail(testdata.name,testdata.invalidEmail,testdata.password)
})

test('Sign Up To Application With invalid Password', async()=>{
    const signuppage=new SignupPage(page)
    await signuppage.signUpWithInvalidPassword(testdata.name, testdata.email, testdata.invalidPassword)
})