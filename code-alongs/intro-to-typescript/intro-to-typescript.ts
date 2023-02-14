let username: string = 'Fred'
let userAge: number = 22
let userIsAdult: boolean = true

function addNumbers (number1: number, number2: number): number {
  return number1 + number2
}

let sum: number = addNumbers(7, 5)

function displaySum (number1: number, number2: number): void{
  console.log(number1 + number2)
}

displaySum(6,8)

interface Profile {
  profileId: string,
  profileName: string,
  profileImageUrl: string | null,
  profileAge: number
}

let profile: Profile = {
  profileId: 'sakdjhf9843w8r5hwehjdf843hdkdjfh3',
  profileName: 'Jimmy McGill',
  profileImageUrl: null,
  profileAge: 50
}

let names: string[] = ['jim', 'bob', 'sue']
let ages: Array<number> = [22, 45, 34]
let profiles: Array<Profile> = [profile, profile, profile]
