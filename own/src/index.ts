export function greet(name: string) {
    return `Hi ${name}`;
}

export function getAuthorContactInfo() {
    return;
}

export function getModuleName(moduleNumber: number) {
    switch (moduleNumber) {
        case 1: return 'Intro';
        case 2: return 'Declaration';
        case 3: return 'Building';
        case 4: return 'Publishing';
        default: return '404';
    }
}

export class AuthorInfo {
    firstName: string = "";
    lastName: string = "";
    twitterHandle: string = "";

    constructor(firstName: string, lastName: string, twitterHandle: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.twitterHandle = twitterHandle;
    }
}