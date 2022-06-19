// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
/*~ If this library is callable (e.g. can be invoked as communicatorGlobal(3)),
 *~ include those call signatures here.
 *~ Otherwise, delete this section.
 */
declare function communicatorGlobal(a: string): string;
declare function communicatorGlobal(a: number): number;
/*~ If you want the name of this library to be a valid type name,
 *~ you can do so here.
 *~
 *~ For example, this allows us to write 'var x: communicatorGlobal';
 *~ Be sure this actually makes sense! If it doesn't, just
 *~ delete this declaration and add types inside the namespace below.
 */
interface communicatorGlobal {
    name: string;
    length: number;
    extras?: string[];
}
/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */
declare namespace communicatorGlobal {
    //~ We can write 'communicatorGlobal.timeout = 50;'
    let timeout: number;
    //~ We can access 'communicatorGlobal.version', but not change it
    const version: string;
    //~ There's some class we can create via 'let c = new communicatorGlobal.Cat(42)'
    //~ Or reference e.g. 'function f(c: communicatorGlobal.Cat) { ... }
    class Cat {
        constructor(n: number);
        //~ We can read 'c.age' from a 'Cat' instance
        readonly age: number;
        //~ We can invoke 'c.purr()' from a 'Cat' instance
        purr(): void;
    }
    //~ We can declare a variable as
    //~   'var s: communicatorGlobal.CatSettings = { weight: 5, name: "Maru" };'
    interface CatSettings {
        weight: number;
        name: string;
        tailLength?: number;
    }
    //~ We can write 'const v: communicatorGlobal.VetID = 42;'
    //~  or 'const v: communicatorGlobal.VetID = "bob";'
    type VetID = string | number;
    //~ We can invoke 'communicatorGlobal.checkCat(c)' or 'communicatorGlobal.checkCat(c, v);'
    function checkCat(c: Cat, s?: VetID);
}