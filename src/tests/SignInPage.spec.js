import{test,expet} from '@playwright/test'
import { SignInPage } from '../pages/SignInPage'
import {page, testdata} from '../setup/Hooks'
require('../setup/Hooks')

test('Sign In With Invalid Email', async()=>{
    const signinpage=new SignInPage(page)
    await signinpage.signInWithInvalidEmail(testdata.invalidEmail,testdata.password)

})

test('Sign In With Invalid Password', async()=>{
    const signinpage=new SignInPage(page)
    await signinpage.signInWithInvalidPassword(testdata.email,testdata.invalidPassword)
})