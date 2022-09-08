## TypeScript cheatsheet

### curso de **TypeScript Microsot**

#### crear el tsconfig.json

`tsc --init`

una vez creado modificar el archivo tsconfig.json los valores mas importantes:

Las opciones del compilador le permiten controlar cómo se genera el código JavaScript a partir del código TypeScript de origen.

La opción `--noImplicitAny` indica al compilador que genere errores en expresiones y declaraciones con un tipo any implícito. Por ejemplo:

`tsc utility_functions.ts --noImplicitAny`

La opción `--target` especifica la versión de destino de ECMAScript para el archivo JavaScript. En este ejemplo se compila un archivo JavaScript compatible con ECMAScript 6:

`tsc utility_functions.ts --target "ES2015"`

al añadir `"./build"` a la opcion outDir estamos asignando la carpeta donde se compilaran lo archivos de JavaScript

`"outDir": "./build"`

#### Tipos primitivos

Los tipos primitivos son los tipos `boolean, number, string, void, null y undefined` junto con enumeración definida por el usuario o tipos `enum`. El tipo `void` existe únicamente para indicar la ausencia de un valor, como en una función sin ningún valor devuelto. Los tipos `null` y `undefined` son subtipos de todos los demás tipos. No es posible hacer referencia explícita a los tipos null y undefined. Solo se puede hacer referencia a los valores de esos tipos mediante los literales null y undefined.

#### Enum

De forma predeterminada, los valores enum comienzan con un valor de 0, por lo que `Permanent` es 0, `Temp` es 1 y `Apprentice` es 2. Si quiere que los valores empiecen con un valor diferente, en este caso 1, especifíquelo en la declaración enum. Realice las ediciones siguientes para que `enum` empiece los valores en 1.

```TypeScript
enum ContractStatus {
     Permanent = 1,
     Temp,
     Apprentice
}
```

Para mostrar el nombre asociado a la enumeración, podemos usar el indexador proporcionado. Agregue lo siguiente en la parte inferior del código:

```TypeScript
console.log(ContractStatus[employeeStatus]);
```

muestra el valor Temp, que es el nombre de la enumeración para Temp o 2

#### Tipos any y unknown

el tipo `any` abarca valores de todos los tipos posibles. El tipo `any` opta por no recibir la comprobación de tipos y no le obliga a realizar ninguna comprobación antes de llamar, construir o acceder a las propiedades de estos valores.

Aunque es flexible, el tipo `any` puede producir errores inesperados. Para solucionar esto, TypeScript ha presentado el tipo `unknown`.

El tipo `unknown` es similar al tipo any en que cualquier valor se puede asignar al tipo `unknown`. Sin embargo, no se puede acceder a las propiedades de un tipo `unknown`; tampoco se pueden llamar ni construir.

#### Aserción de tipos

Si necesita tratar una variable como un tipo de datos diferente, puede usar una aserción de tipos. Una aserción de tipos indica a TypeScript que ha realizado cualquier comprobación especial que necesite antes de llamar a la instrucción. Indica al compilador "confíe en mí, sé lo que estoy haciendo". Una aserción de tipo es como una conversión de tipos en otros lenguajes, pero no realiza ninguna comprobación especial ni reestructuración de los datos. No tiene ningún impacto en el tiempo de ejecución y lo utiliza exclusivamente el compilador.

Las aserciones de tipos tienen dos formatos. Una es la sintaxis de as:

```TypeScript
let randomValue: number = 10;

(randomValue as string).toUpperCase();
```

La otra versión es la sintaxis de "corchetes angulares":

```TypeScript
(<string>randomValue).toUpperCase();
```

En el ejemplo siguiente se realiza la comprobación necesaria para determinar que `randomValue` es un elemento `string` antes de usar la aserción de tipos a fin de llamar al método `toUpperCase`.Esta comprobacion si esta activa en run time

```TypeScript
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
```

#### Restricciones de tipos

```TypeScript
Tipo	         Predicate
string	   typeof s === "string"
number	   typeof n === "number"
boolean	   typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	   typeof f === "function"
array	      Array.isArray(a)
```

#### Tipos de unión

Un tipo de unión describe un valor que puede ser uno de entre varios tipos. Esto puede ser útil cuando no tenga controlado un valor (por ejemplo, los valores de una biblioteca, una API o una entrada de usuario).

```TypeScript
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid
```

Esto tiene problemas ya que al ser `number` o `string` pueden usarse metodos distintos por eso lo normal es hacer comprobaciones de que tipo es para ejecutar metodos

```TypeScript
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

#### Tipos de intersección

Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes. Esto permite agregar tipos existentes de forma conjunta para obtener un tipo único que tenga todas las características que necesita.

```TypeScript
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```

#### Restricción literal

`let` indica al compilador que existe la posibilidad de que esta variable cambie su contenido. Al declarar una variable con `let` se escribe la variable (por ejemplo, como un elemento string), lo que permite un número infinito de valores posibles.

Por el contrario, al usar `const` para declarar una variable, informará a TypeScript de que este objeto nunca cambiará.

Hay tres conjuntos de tipos literales disponibles en TypeScript: `string, number y boolean`

#### Definición de tipos literales

Los tipos literales se escriben como objetos, matrices, funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros.

```TypeScript
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```

#### Arrays

TypeScript, al igual que JavaScript, permite trabajar con matrices. Las matrices se pueden escribir de dos maneras. En la primera, se usa el tipo de los elementos seguidos de corchetes ([ ]) para denotar una matriz de ese tipo de elemento:

```TypeScript
let list: number[] = [1, 2, 3];
```

En el segundo caso, se usa un tipo Array genérico con la sintaxis `Array<type>`:

```TypeScript
let list: Array<number> = [1, 2, 3];
```

#### Tuplas

Tener una matriz de los mismos tipos de valor es útil, pero a veces tiene una matriz que contiene valores de tipos mixtos. Para ese propósito, TypeScript proporciona el tipo de tupla. Para declarar una tupla, use la sintaxis `variableName: [type, type, ...]`.

```TypeScript
let person1: [string, number] = ['Marcia', 35];
```

El siguiente da ERROR.

```TypeScript
let person1: [string, number] = ['Marcia', 35, true];
```

#### Interfaz

Puede usar interfaces para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos, y componer tipos de objetos con nombre existentes en otros nuevos.

```TypeScript
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
};
```

obligatotio
`firstName: string;`

Opcional
`firstName?: string;`

obligatotio
`readonly firstName: string;`

#### extender una interface

Declaramos una interface

```TypeScript
interface IceCream {
   flavor: string;
   scoops: number;
}
```

Creamos una nueva extendiendo de la primera contendra los valores de la primera interface mas los de la segunda

```TypeScript
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}
```

#### Creación de tipos indexables

Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, junto con los tipos de valores devueltos correspondientes al indexar.

```TypeScript
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
```

#### alias de tipo "type"

Un alias de tipo es una definición de un tipo de datos, por ejemplo, unión, primitivo, intersección, tupla o cualquier otro tipo. Por otro lado, las interfaces son una manera de describir formas de datos, por ejemplo, un objeto. Los alias de tipos pueden actuar como interfaces, pero hay algunas diferencias sutiles. La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre es extensible. Además, **solo se puede describir una unión o tupla mediante un alias de tipos (con un type)**.

```TypeScript
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

#### Genericos

genéricos
