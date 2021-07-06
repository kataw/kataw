# Kataw parser test case

## Input

`````js

/**
 * A falsy variable on the left side of &&
 */
function logical1a(): number { // expected `: boolean`
    var x = false;
    return x && '123';
}

/**
 * A truthy variable on the left side of &&
 */
function logical1b(): string {
    var x = true;
    return x && '123';
}

/**
 * A literal on the left side of &&
 */
function logical2a(): number { // expected `: boolean`
    return false && '123';
}

/**
 * A literal on the left side of &&
 */
function logical2b(): number {
    return 0 && '123';
}

/**
 * A literal on the left side of &&
 */
function logical2c(): string {
    return "" && 123;
}

/**
 * A literal on the left side of &&
 */
function logical2d(): string {
    return true && '123';
}

/**
 * A literal on the left side of &&
 */
function logical2e(): number {
    return 'foo' && 123;
}

/**
 * A literal on the left side of &&
 */
function logical2f(): string {
    return 123 && 'foo';
}

/**
 * A literal on the left side of &&
 */
function logical2g(): string {
    return [1,2,3] && 'foo';
}

/**
 * A literal on the left side of &&
 */
function logical2h(x: {a: number}): string {
    return x && 'foo';
}

/**
 * A literal on the left side of &&
 */
function logical2i(x: Object): string {
    return x && 'foo';
}

/**
 * A literal on the left side of &&
 */
function logical2j(x: (a: number) => number): string {
    return x && 'foo';
}

/**
 * A literal on the left side of &&
 */
function logical2k(x: Function): string {
    return x && 'foo';
}

/**
 * An expression on the left side of &&
 */
function logical3a(): string { // expected `: boolean`
    var x: ?number = null;
    return x != null && x > 10;
}

/**
 * An expression on the left side of &&
 */
function logical3b(): number { // expected `: boolean | number`
    var x: ?number = null;
    return x != null && x;
}

/**
 * An expression on the left side of &&
 */
function logical3c(): ?number { // expected `: boolean | ?number`
    var x: ?number = null;
    return x != undefined && x;
}

/**
 * Maybe truthy returns both types
 */
function logical4(x: boolean): string { // expected `: boolean | string`
    return x && '123';
}

/**
 * A falsy variable on the left side of ||
 */
function logical5a(): number {
    var x = false;
    return x || 0;
}

/**
 * A maybe variable on the left side of ||
 */
function logical5b(): number {
    var x: ?number = null;
    return x || 0;
}

/**
 * A truthy variable on the left side of ||
 */
function logical5c(): string { // expected `: boolean`
    var x = true;
    return x || 0;
}

/**
 * A literal on the left side of ||
 */
function logical6a(): string {
    return false || '123';
}

/**
 * A literal on the left side of ||
 */
function logical6b(): string {
    return 0 || '123';
}

/**
 * A literal on the left side of ||
 */
function logical6c(): number {
    return "" || 123;
}

/**
 * A literal on the left side of ||
 */
function logical6d(): number { // expected `: boolean`
    return true || '123';
}

/**
 * A literal on the left side of ||
 */
function logical6e(): string {
    return 'foo' || 123;
}

/**
 * A literal on the left side of ||
 */
function logical6f(): number {
    return 123 || 'foo';
}

/**
 * A composite && and ||
 */
function logical7a(): number {
    var x: ?number = null;
    return x != null && x || 0;
}

/**
 * A composite && and || where the truthiness is unknown
 */
function logical7b(x: boolean, y: number): number {
    return x && y || 0;
}

/**
 * A composite && and ||
 */
function logical7c(x: string): number {
    return x && 1 || 0;
}

/**
 * A composite && and ||
 */
function logical7d(x: number): string {
    return x && 'foo' || 'bar';
}

/**
 * A composite && and ||
 */
function logical7e(x: number): string {
    return false && x || 'bar';
}

/**
 * A composite || and &&
 *
 * `x || 0` always returns a number (never a boolean) and then short
 * circuits the && because 0 is falsy, so this should just return number.
 */
function logical8a(): number {
    var x = false;
    return (x || 0) && 'foo';
}

/**
 * A composite || and &&
 *
 * `x || 1` always returns something truthy, so this returns a string
 */
function logical8b(): string {
    var x = false;
    return (x || 1) && 'foo';
}

/**
 * A composite || and &&
 *
 * `x` is always truthy, so this returns a string
 */
function logical8c(): string {
    var x = true;
    return (x || 1) && 'foo';
}

/**
 * A composite || and &&
 */
function logical8d(): number {
    var x = false;
    return x || (0 && 'foo');
}

/**
 * A composite || and &&
 */
function logical8e(): string {
    var x = false;
    return x || (1 && 'foo');
}

/**
 * A composite || and &&
 */
function logical8f(): string { // expected `: boolean`
    var x = true;
    return x || (1 && 'foo');
}

/**
 * A composite || and ||
 */
function logical9a(
    x: number,
    y: string
): number | string { // expected `: number | string | boolean`
    return x || y || false;
}

/**
 * A composite || and ||
 */
function logical9b(x: number, y: string): number | string {
    return false || x || y;
}

/**
 * A composite || and ||
 */
function logical9c(x: number, y: boolean): string {
    return 'a' || x || y;
}

/**
 * A composite && and &&
 */
function logical10a(
    x: number,
    y: string
): number | string { // expected `: number | string | boolean`
    return x && y && false;
}

/**
 * A composite && and &&
 */
function logical10b(x: number, y: string): Array<any> { // expected `: boolean`
    return false && x && y;
}

/**
 * A composite && and &&
 */
function logical10c(x: number, y: string): Array<any> { // expected `number | boolean`
    return x && false && y;
}

/**
 * || in a loop
 */
function logical11a(): number {
    var y = 1;
    for (var x = 0; x < 5; x++) {
        y = y || true;
    }
    return y;
}

/**
 * || in a loop
 */
function logical11b(y: number): number {
    for (var x = 0; x < 5; x++) {
        y = y || true; // expected a number
    }
    return y;
}

/**
 * && in a loop
 */
function logical12a(): number {
    var y = 1;
    var z = true;
    for (var x = 0; x < 5; x++) {
        y = z && y;
        z = false;
    }
    return y;
}

/**
 * && in a loop
 */
function logical12b(y: number): number {
    for (var x = 0; x < 5; x++) {
        y = y && true; // expected a number
    }
    return y;
}

/**
 * Complex &&
 */
function logical13(x: number): Array<{x: string}> {
    return [
        {x: x && "bar"},
        {x: true && "bar"},
        {x: true && false},
        {x: false && false},
        {x: 1 && "bar"},
        {x: "foo" && "bar"},
        {x: "foo" && "bar"},
        {x: "foo" && "bar"},
    ];
}

/**
 * Complex ||
 */
function logical14(x: number): Array<{x: string}> {
    return [
        {x: x || "bar"},
        {x: false || "bar"},
        {x: false || true},
        {x: true || false},
        {x: 0 || "bar"},
        {x: "foo" || "bar"},
        {x: "foo" || "bar"},
        {x: "foo" || "bar"},
    ];
}

/**
 * || in an addition
 */
function logical15a(x: number): number {
    return 5 + (x || 7);
}

/**
 * || in an addition
 */
function logical15b(x: number): number {
    return (x || 7) + 5;
}

/**
 * && in an addition
 */
function logical15c(x: number): number {
    return 5 + (x && 7);
}

/**
 * && in an addition
 */
function logical15d(x: number): number {
    return (x && 7) + 5;
}

/**
 * || in a comparison
 */
function logical16a(x: number): boolean {
    return 5 < (x || 7);
}

/**
 * || in a comparison
 */
function logical16b(x: number): boolean {
    return (x || 7) < 5;
}

/**
 * && in a comparison
 */
function logical16c(x: number): boolean {
    return 5 < (x && 7);
}

/**
 * && in a comparison
 */
function logical16d(x: number): boolean {
    return (x && 7) < 5;
}

/**
 * || in an equality
 */
function logical17a(x: number): boolean {
    return 5 == (x || 7);
}

/**
 * || in an equality
 */
function logical17b(x: number): boolean {
    return (x || 7) == 5;
}

/**
 * && in an equality
 */
function logical17c(x: number): boolean {
    return 5 == (x && 7);
}

/**
 * && in an equality
 */
function logical17d(x: number): boolean {
    return (x && 7) == 5;
}

/**
 * Expressions on each side that return truthy things
 */
function logical18a(x: number, y: number): number {
    return x - 1 || y - 1;
}

/**
 * Sentinel properties should not interfere
 */
function logical18b(x: {a: number}, y: {b: number}): number {
    return x.a - 1 || y.b - 1;
}

/**
 * Layer of indirection in the LHS (get prop)
 */
function logical19a(x: { y: string, z: boolean }): boolean {
  return (x.y && x.z); // error: x.y is a string
}
function logical19b(x: { y: string, z: boolean }): boolean {
  return (x.y || x.z); // error: x.y is a string
}

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 60
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical1a",
                "rawText": "logical1a",
                "flags": 96,
                "transformFlags": 0,
                "start": 60,
                "end": 70
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 71,
                "end": 71
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 114
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 116
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 124
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 114,
                                        "end": 124
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 124
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 82,
                            "end": 125
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 136
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 136,
                                    "end": 138
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 138,
                                    "end": 141
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 141,
                                    "end": 147
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 136,
                                "end": 147
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 125,
                            "end": 148
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 148
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 150
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 80
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 73,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 150
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 150,
                "end": 212
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical1b",
                "rawText": "logical1b",
                "flags": 96,
                "transformFlags": 0,
                "start": 212,
                "end": 222
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 223,
                "end": 223
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 242
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 244
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 246,
                                            "end": 251
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 242,
                                        "end": 251
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 251
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 234,
                            "end": 252
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 252,
                                "end": 263
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 263,
                                    "end": 265
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 265,
                                    "end": 268
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 268,
                                    "end": 274
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 263,
                                "end": 274
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 252,
                            "end": 275
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 275
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 232,
                "end": 277
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 225,
                    "end": 232
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 225,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 150,
            "end": 277
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 277,
                "end": 331
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2a",
                "rawText": "logical2a",
                "flags": 96,
                "transformFlags": 0,
                "start": 331,
                "end": 341
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 342,
                "end": 342
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 353,
                                "end": 388
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 388,
                                    "end": 394
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 394,
                                    "end": 397
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 397,
                                    "end": 403
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 388,
                                "end": 403
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 353,
                            "end": 404
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 404
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 351,
                "end": 406
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 344,
                    "end": 351
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 344,
                "end": 351
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 277,
            "end": 406
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 406,
                "end": 460
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2b",
                "rawText": "logical2b",
                "flags": 96,
                "transformFlags": 0,
                "start": 460,
                "end": 470
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 471,
                "end": 471
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 482,
                                "end": 493
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 493,
                                    "end": 495
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 495,
                                    "end": 498
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 498,
                                    "end": 504
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 493,
                                "end": 504
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 482,
                            "end": 505
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 482,
                    "end": 505
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 480,
                "end": 507
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 473,
                    "end": 480
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 473,
                "end": 480
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 406,
            "end": 507
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 507,
                "end": 561
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2c",
                "rawText": "logical2c",
                "flags": 96,
                "transformFlags": 0,
                "start": 561,
                "end": 571
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 572,
                "end": 572
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 583,
                                "end": 594
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "\"\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 594,
                                    "end": 597
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 597,
                                    "end": 600
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 600,
                                    "end": 604
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 594,
                                "end": 604
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 583,
                            "end": 605
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 583,
                    "end": 605
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 581,
                "end": 607
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 574,
                    "end": 581
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 574,
                "end": 581
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 507,
            "end": 607
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 607,
                "end": 661
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2d",
                "rawText": "logical2d",
                "flags": 96,
                "transformFlags": 0,
                "start": 661,
                "end": 671
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 672,
                "end": 672
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 683,
                                "end": 694
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 683,
                            "end": 694
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 694,
                                    "end": 699
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 699,
                                    "end": 702
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 702,
                                    "end": 708
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 694,
                                "end": 708
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 694,
                            "end": 709
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 683,
                    "end": 709
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 681,
                "end": 711
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 674,
                    "end": 681
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 674,
                "end": 681
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 607,
            "end": 711
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 711,
                "end": 765
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2e",
                "rawText": "logical2e",
                "flags": 96,
                "transformFlags": 0,
                "start": 765,
                "end": 775
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 776,
                "end": 776
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 787,
                                "end": 798
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 798,
                                    "end": 804
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 804,
                                    "end": 807
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 807,
                                    "end": 811
                                },
                                "flags": 4194400,
                                "transformFlags": 1024,
                                "start": 798,
                                "end": 811
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 787,
                            "end": 812
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 787,
                    "end": 812
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 785,
                "end": 814
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 778,
                    "end": 785
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 778,
                "end": 785
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 711,
            "end": 814
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 814,
                "end": 868
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2f",
                "rawText": "logical2f",
                "flags": 96,
                "transformFlags": 0,
                "start": 868,
                "end": 878
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 879,
                "end": 879
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 890,
                                "end": 901
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 901,
                                    "end": 905
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 905,
                                    "end": 908
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 908,
                                    "end": 914
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 901,
                                "end": 914
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 890,
                            "end": 915
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 890,
                    "end": 915
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 888,
                "end": 917
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 881,
                    "end": 888
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 881,
                "end": 888
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 814,
            "end": 917
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 917,
                "end": 971
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2g",
                "rawText": "logical2g",
                "flags": 96,
                "transformFlags": 0,
                "start": 971,
                "end": 981
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 982,
                "end": 982
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 993,
                                "end": 1004
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1006,
                                                "end": 1007
                                            },
                                            {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1008,
                                                "end": 1009
                                            },
                                            {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1010,
                                                "end": 1011
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1006,
                                        "end": 1011
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 1004,
                                    "end": 1012
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1012,
                                    "end": 1015
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1015,
                                    "end": 1021
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 1004,
                                "end": 1021
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 993,
                            "end": 1022
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 993,
                    "end": 1022
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 991,
                "end": 1024
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 984,
                    "end": 991
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 984,
                "end": 991
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 917,
            "end": 1024
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1024,
                "end": 1078
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2h",
                "rawText": "logical2h",
                "flags": 96,
                "transformFlags": 0,
                "start": 1078,
                "end": 1088
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1089,
                            "end": 1090
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1093,
                                            "end": 1094
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 1095,
                                                "end": 1102
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 1095,
                                            "end": 1102
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 1093,
                                        "end": 1102
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 1091,
                                "end": 1103
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 1091,
                            "end": 1103
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1089,
                        "end": 1103
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1089,
                "end": 1103
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1114,
                                "end": 1125
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1125,
                                    "end": 1127
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1127,
                                    "end": 1130
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1130,
                                    "end": 1136
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1125,
                                "end": 1136
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1114,
                            "end": 1137
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1114,
                    "end": 1137
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1112,
                "end": 1139
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1105,
                    "end": 1112
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1105,
                "end": 1112
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1024,
            "end": 1139
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1139,
                "end": 1193
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2i",
                "rawText": "logical2i",
                "flags": 96,
                "transformFlags": 0,
                "start": 1193,
                "end": 1203
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1204,
                            "end": 1205
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Object",
                                    "rawText": "Object",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1206,
                                    "end": 1213
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 1206,
                                "end": 1213
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 1206,
                            "end": 1213
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1204,
                        "end": 1213
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1204,
                "end": 1213
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1224,
                                "end": 1235
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1235,
                                    "end": 1237
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1237,
                                    "end": 1240
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1240,
                                    "end": 1246
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1235,
                                "end": 1246
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1224,
                            "end": 1247
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1224,
                    "end": 1247
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1222,
                "end": 1249
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1215,
                    "end": 1222
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1215,
                "end": 1222
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1139,
            "end": 1249
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1249,
                "end": 1303
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2j",
                "rawText": "logical2j",
                "flags": 96,
                "transformFlags": 0,
                "start": 1303,
                "end": 1313
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1314,
                            "end": 1315
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1318,
                                                "end": 1319
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 1320,
                                                    "end": 1327
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 1320,
                                                "end": 1327
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 1316,
                                            "end": 1327
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 1316,
                                    "end": 1327
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1328,
                                    "end": 1331
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 1331,
                                        "end": 1338
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 1331,
                                    "end": 1338
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 1316,
                                "end": 1338
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 1316,
                            "end": 1338
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1314,
                        "end": 1338
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1314,
                "end": 1338
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1349,
                                "end": 1360
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1360,
                                    "end": 1362
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1362,
                                    "end": 1365
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1365,
                                    "end": 1371
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1360,
                                "end": 1371
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1349,
                            "end": 1372
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1349,
                    "end": 1372
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1347,
                "end": 1374
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1340,
                    "end": 1347
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1340,
                "end": 1347
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1249,
            "end": 1374
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1374,
                "end": 1428
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical2k",
                "rawText": "logical2k",
                "flags": 96,
                "transformFlags": 0,
                "start": 1428,
                "end": 1438
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1439,
                            "end": 1440
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1441,
                                    "end": 1450
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 1441,
                                "end": 1450
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 1441,
                            "end": 1450
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1439,
                        "end": 1450
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1439,
                "end": 1450
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1461,
                                "end": 1472
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1472,
                                    "end": 1474
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1474,
                                    "end": 1477
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1477,
                                    "end": 1483
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1472,
                                "end": 1483
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1461,
                            "end": 1484
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1461,
                    "end": 1484
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1459,
                "end": 1486
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1452,
                    "end": 1459
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1452,
                "end": 1459
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1374,
            "end": 1486
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1486,
                "end": 1544
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical3a",
                "rawText": "logical3a",
                "flags": 96,
                "transformFlags": 0,
                "start": 1544,
                "end": 1554
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1555,
                "end": 1555
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1566,
                                "end": 1598
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1598,
                                            "end": 1600
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217970,
                                                "nullableToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1601,
                                                    "end": 1603
                                                },
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 1603,
                                                    "end": 1609
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 1601,
                                                "end": 1609
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 1601,
                                            "end": 1609
                                        },
                                        "initializer": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1611,
                                            "end": 1616
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 1598,
                                        "end": 1616
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 1598,
                                "end": 1616
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1566,
                            "end": 1617
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1617,
                                "end": 1628
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1628,
                                        "end": 1630
                                    },
                                    "operatorToken": {
                                        "kind": 34623,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 1630,
                                        "end": 1633
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1633,
                                        "end": 1638
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1628,
                                    "end": 1638
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1638,
                                    "end": 1641
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1641,
                                        "end": 1643
                                    },
                                    "operatorToken": {
                                        "kind": 34883,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1643,
                                        "end": 1645
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1645,
                                        "end": 1648
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1643,
                                    "end": 1648
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1628,
                                "end": 1648
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1617,
                            "end": 1649
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1566,
                    "end": 1649
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1564,
                "end": 1651
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1557,
                    "end": 1564
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1557,
                "end": 1564
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1486,
            "end": 1651
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1651,
                "end": 1709
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical3b",
                "rawText": "logical3b",
                "flags": 96,
                "transformFlags": 0,
                "start": 1709,
                "end": 1719
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1720,
                "end": 1720
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1731,
                                "end": 1772
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1772,
                                            "end": 1774
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217970,
                                                "nullableToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1775,
                                                    "end": 1777
                                                },
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 1777,
                                                    "end": 1783
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 1775,
                                                "end": 1783
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 1775,
                                            "end": 1783
                                        },
                                        "initializer": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1785,
                                            "end": 1790
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 1772,
                                        "end": 1790
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 1772,
                                "end": 1790
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1731,
                            "end": 1791
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1791,
                                "end": 1802
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1802,
                                        "end": 1804
                                    },
                                    "operatorToken": {
                                        "kind": 34623,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 1804,
                                        "end": 1807
                                    },
                                    "right": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1807,
                                        "end": 1812
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1802,
                                    "end": 1812
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1812,
                                    "end": 1815
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1815,
                                    "end": 1817
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1802,
                                "end": 1817
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1791,
                            "end": 1818
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1731,
                    "end": 1818
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1729,
                "end": 1820
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 1722,
                    "end": 1729
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1722,
                "end": 1729
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1651,
            "end": 1820
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1820,
                "end": 1878
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical3c",
                "rawText": "logical3c",
                "flags": 96,
                "transformFlags": 0,
                "start": 1878,
                "end": 1888
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 1889,
                "end": 1889
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1901,
                                "end": 1943
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1943,
                                            "end": 1945
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217970,
                                                "nullableToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 1946,
                                                    "end": 1948
                                                },
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 1948,
                                                    "end": 1954
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 1946,
                                                "end": 1954
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 1946,
                                            "end": 1954
                                        },
                                        "initializer": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1956,
                                            "end": 1961
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 1943,
                                        "end": 1961
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 1943,
                                "end": 1961
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 1901,
                            "end": 1962
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 1962,
                                "end": 1973
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1973,
                                        "end": 1975
                                    },
                                    "operatorToken": {
                                        "kind": 34623,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 1975,
                                        "end": 1978
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "undefined",
                                        "rawText": "undefined",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1978,
                                        "end": 1988
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1973,
                                    "end": 1988
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1988,
                                    "end": 1991
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1991,
                                    "end": 1993
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1973,
                                "end": 1993
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 1962,
                            "end": 1994
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1901,
                    "end": 1994
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1899,
                "end": 1996
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134217970,
                    "nullableToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1891,
                        "end": 1893
                    },
                    "type": {
                        "kind": 134234345,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 1893,
                        "end": 1899
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 1891,
                    "end": 1899
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 1891,
                "end": 1899
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1820,
            "end": 1996
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1996,
                "end": 2049
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical4",
                "rawText": "logical4",
                "flags": 96,
                "transformFlags": 0,
                "start": 2049,
                "end": 2058
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2059,
                            "end": 2060
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234254,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 2061,
                                "end": 2069
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 2061,
                            "end": 2069
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2059,
                        "end": 2069
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2059,
                "end": 2069
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2080,
                                "end": 2124
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2124,
                                    "end": 2126
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2126,
                                    "end": 2129
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 2129,
                                    "end": 2135
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2124,
                                "end": 2135
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2080,
                            "end": 2136
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2080,
                    "end": 2136
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2078,
                "end": 2138
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2071,
                    "end": 2078
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2071,
                "end": 2078
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1996,
            "end": 2138
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2138,
                "end": 2199
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical5a",
                "rawText": "logical5a",
                "flags": 96,
                "transformFlags": 0,
                "start": 2199,
                "end": 2209
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2210,
                "end": 2210
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2221,
                                "end": 2229
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2229,
                                            "end": 2231
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2233,
                                            "end": 2239
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 2229,
                                        "end": 2239
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2229,
                                "end": 2239
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2221,
                            "end": 2240
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2240,
                                "end": 2251
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2251,
                                    "end": 2253
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2253,
                                    "end": 2256
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2256,
                                    "end": 2258
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2251,
                                "end": 2258
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2240,
                            "end": 2259
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2221,
                    "end": 2259
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2219,
                "end": 2261
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2212,
                    "end": 2219
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2212,
                "end": 2219
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2138,
            "end": 2261
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2261,
                "end": 2322
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical5b",
                "rawText": "logical5b",
                "flags": 96,
                "transformFlags": 0,
                "start": 2322,
                "end": 2332
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2333,
                "end": 2333
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2344,
                                "end": 2352
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2352,
                                            "end": 2354
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217970,
                                                "nullableToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 2355,
                                                    "end": 2357
                                                },
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 2357,
                                                    "end": 2363
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 2355,
                                                "end": 2363
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 2355,
                                            "end": 2363
                                        },
                                        "initializer": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2365,
                                            "end": 2370
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 2352,
                                        "end": 2370
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2352,
                                "end": 2370
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2344,
                            "end": 2371
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2371,
                                "end": 2382
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2382,
                                    "end": 2384
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2384,
                                    "end": 2387
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2387,
                                    "end": 2389
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2382,
                                "end": 2389
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2371,
                            "end": 2390
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2344,
                    "end": 2390
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2342,
                "end": 2392
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2335,
                    "end": 2342
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2335,
                "end": 2342
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2261,
            "end": 2392
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2392,
                "end": 2454
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical5c",
                "rawText": "logical5c",
                "flags": 96,
                "transformFlags": 0,
                "start": 2454,
                "end": 2464
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2465,
                "end": 2465
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2476,
                                "end": 2508
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2508,
                                            "end": 2510
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2512,
                                            "end": 2517
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 2508,
                                        "end": 2517
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2508,
                                "end": 2517
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2476,
                            "end": 2518
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2518,
                                "end": 2529
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2529,
                                    "end": 2531
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2531,
                                    "end": 2534
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2534,
                                    "end": 2536
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2529,
                                "end": 2536
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2518,
                            "end": 2537
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2476,
                    "end": 2537
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2474,
                "end": 2539
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2467,
                    "end": 2474
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2467,
                "end": 2474
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2392,
            "end": 2539
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2539,
                "end": 2593
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6a",
                "rawText": "logical6a",
                "flags": 96,
                "transformFlags": 0,
                "start": 2593,
                "end": 2603
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2604,
                "end": 2604
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2615,
                                "end": 2626
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2626,
                                    "end": 2632
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2632,
                                    "end": 2635
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 2635,
                                    "end": 2641
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2626,
                                "end": 2641
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2615,
                            "end": 2642
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2615,
                    "end": 2642
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2613,
                "end": 2644
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2606,
                    "end": 2613
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2606,
                "end": 2613
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2539,
            "end": 2644
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2644,
                "end": 2698
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6b",
                "rawText": "logical6b",
                "flags": 96,
                "transformFlags": 0,
                "start": 2698,
                "end": 2708
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2709,
                "end": 2709
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2720,
                                "end": 2731
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2731,
                                    "end": 2733
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2733,
                                    "end": 2736
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 2736,
                                    "end": 2742
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2731,
                                "end": 2742
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2720,
                            "end": 2743
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2720,
                    "end": 2743
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2718,
                "end": 2745
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2711,
                    "end": 2718
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2711,
                "end": 2718
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2644,
            "end": 2745
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2745,
                "end": 2799
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6c",
                "rawText": "logical6c",
                "flags": 96,
                "transformFlags": 0,
                "start": 2799,
                "end": 2809
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2810,
                "end": 2810
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2821,
                                "end": 2832
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "\"\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2832,
                                    "end": 2835
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2835,
                                    "end": 2838
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2838,
                                    "end": 2842
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2832,
                                "end": 2842
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2821,
                            "end": 2843
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2821,
                    "end": 2843
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2819,
                "end": 2845
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2812,
                    "end": 2819
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2812,
                "end": 2819
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2745,
            "end": 2845
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2845,
                "end": 2899
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6d",
                "rawText": "logical6d",
                "flags": 96,
                "transformFlags": 0,
                "start": 2899,
                "end": 2909
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2910,
                "end": 2910
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 2921,
                                "end": 2956
                            },
                            "expression": null,
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 2921,
                            "end": 2956
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2956,
                                    "end": 2961
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2961,
                                    "end": 2964
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "123",
                                    "rawText": "'123'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 2964,
                                    "end": 2970
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 2956,
                                "end": 2970
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2956,
                            "end": 2971
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2921,
                    "end": 2971
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2919,
                "end": 2973
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 2912,
                    "end": 2919
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 2912,
                "end": 2919
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2845,
            "end": 2973
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2973,
                "end": 3027
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6e",
                "rawText": "logical6e",
                "flags": 96,
                "transformFlags": 0,
                "start": 3027,
                "end": 3037
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3038,
                "end": 3038
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3049,
                                "end": 3060
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 3060,
                                    "end": 3066
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3066,
                                    "end": 3069
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3069,
                                    "end": 3073
                                },
                                "flags": 4194400,
                                "transformFlags": 1024,
                                "start": 3060,
                                "end": 3073
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3049,
                            "end": 3074
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3049,
                    "end": 3074
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3047,
                "end": 3076
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3040,
                    "end": 3047
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3040,
                "end": 3047
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2973,
            "end": 3076
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3076,
                "end": 3130
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical6f",
                "rawText": "logical6f",
                "flags": 96,
                "transformFlags": 0,
                "start": 3130,
                "end": 3140
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3141,
                "end": 3141
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3152,
                                "end": 3163
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 123,
                                    "rawText": "123",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3163,
                                    "end": 3167
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3167,
                                    "end": 3170
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 3170,
                                    "end": 3176
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3163,
                                "end": 3176
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3152,
                            "end": 3177
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3152,
                    "end": 3177
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3150,
                "end": 3179
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3143,
                    "end": 3150
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3143,
                "end": 3150
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3076,
            "end": 3179
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3179,
                "end": 3222
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical7a",
                "rawText": "logical7a",
                "flags": 96,
                "transformFlags": 0,
                "start": 3222,
                "end": 3232
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3233,
                "end": 3233
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3244,
                                "end": 3252
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3252,
                                            "end": 3254
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217970,
                                                "nullableToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 3255,
                                                    "end": 3257
                                                },
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 3257,
                                                    "end": 3263
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 3255,
                                                "end": 3263
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 3255,
                                            "end": 3263
                                        },
                                        "initializer": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3265,
                                            "end": 3270
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 3252,
                                        "end": 3270
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 3252,
                                "end": 3270
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3244,
                            "end": 3271
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3271,
                                "end": 3282
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3282,
                                            "end": 3284
                                        },
                                        "operatorToken": {
                                            "kind": 34623,
                                            "flags": 96,
                                            "transformFlags": 16,
                                            "start": 3284,
                                            "end": 3287
                                        },
                                        "right": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3287,
                                            "end": 3292
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 3282,
                                        "end": 3292
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3292,
                                        "end": 3295
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3295,
                                        "end": 3297
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 3282,
                                    "end": 3297
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3297,
                                    "end": 3300
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3300,
                                    "end": 3302
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3282,
                                "end": 3302
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3271,
                            "end": 3303
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3244,
                    "end": 3303
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3242,
                "end": 3305
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3235,
                    "end": 3242
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3235,
                "end": 3242
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3179,
            "end": 3305
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3305,
                "end": 3380
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical7b",
                "rawText": "logical7b",
                "flags": 96,
                "transformFlags": 0,
                "start": 3380,
                "end": 3390
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3391,
                            "end": 3392
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234254,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 3393,
                                "end": 3401
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 3393,
                            "end": 3401
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3391,
                        "end": 3401
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3402,
                            "end": 3404
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 3405,
                                "end": 3412
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 3405,
                            "end": 3412
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3402,
                        "end": 3412
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3391,
                "end": 3412
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3423,
                                "end": 3434
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3434,
                                        "end": 3436
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3436,
                                        "end": 3439
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3439,
                                        "end": 3441
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 3434,
                                    "end": 3441
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3441,
                                    "end": 3444
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3444,
                                    "end": 3446
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3434,
                                "end": 3446
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3423,
                            "end": 3447
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3423,
                    "end": 3447
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3421,
                "end": 3449
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3414,
                    "end": 3421
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3414,
                "end": 3421
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3305,
            "end": 3449
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3449,
                "end": 3492
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical7c",
                "rawText": "logical7c",
                "flags": 96,
                "transformFlags": 0,
                "start": 3492,
                "end": 3502
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3503,
                            "end": 3504
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 3505,
                                "end": 3512
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 3505,
                            "end": 3512
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3503,
                        "end": 3512
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3503,
                "end": 3512
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3523,
                                "end": 3534
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3534,
                                        "end": 3536
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3536,
                                        "end": 3539
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3539,
                                        "end": 3541
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 3534,
                                    "end": 3541
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3541,
                                    "end": 3544
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3544,
                                    "end": 3546
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3534,
                                "end": 3546
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3523,
                            "end": 3547
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3523,
                    "end": 3547
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3521,
                "end": 3549
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3514,
                    "end": 3521
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3514,
                "end": 3521
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3449,
            "end": 3549
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3549,
                "end": 3592
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical7d",
                "rawText": "logical7d",
                "flags": 96,
                "transformFlags": 0,
                "start": 3592,
                "end": 3602
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3603,
                            "end": 3604
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 3605,
                                "end": 3612
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 3605,
                            "end": 3612
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3603,
                        "end": 3612
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3603,
                "end": 3612
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3623,
                                "end": 3634
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3634,
                                        "end": 3636
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3636,
                                        "end": 3639
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "'foo'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 3639,
                                        "end": 3645
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 3634,
                                    "end": 3645
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3645,
                                    "end": 3648
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "bar",
                                    "rawText": "'bar'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 3648,
                                    "end": 3654
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3634,
                                "end": 3654
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3623,
                            "end": 3655
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3623,
                    "end": 3655
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3621,
                "end": 3657
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3614,
                    "end": 3621
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3614,
                "end": 3621
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3549,
            "end": 3657
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3657,
                "end": 3700
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical7e",
                "rawText": "logical7e",
                "flags": 96,
                "transformFlags": 0,
                "start": 3700,
                "end": 3710
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3711,
                            "end": 3712
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 3713,
                                "end": 3720
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 3713,
                            "end": 3720
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3711,
                        "end": 3720
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3711,
                "end": 3720
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3731,
                                "end": 3742
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3742,
                                        "end": 3748
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3748,
                                        "end": 3751
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3751,
                                        "end": 3753
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 3742,
                                    "end": 3753
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3753,
                                    "end": 3756
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "bar",
                                    "rawText": "'bar'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 3756,
                                    "end": 3762
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 3742,
                                "end": 3762
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3731,
                            "end": 3763
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3731,
                    "end": 3763
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3729,
                "end": 3765
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3722,
                    "end": 3729
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3722,
                "end": 3729
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3657,
            "end": 3765
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 3765,
                "end": 3954
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8a",
                "rawText": "logical8a",
                "flags": 96,
                "transformFlags": 0,
                "start": 3954,
                "end": 3964
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 3965,
                "end": 3965
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3976,
                                "end": 3984
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3984,
                                            "end": 3986
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3988,
                                            "end": 3994
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 3984,
                                        "end": 3994
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 3984,
                                "end": 3994
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3976,
                            "end": 3995
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 3995,
                                "end": 4006
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4008,
                                            "end": 4009
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4009,
                                            "end": 4012
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4012,
                                            "end": 4014
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4006,
                                        "end": 4014
                                    },
                                    "flags": 4006,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4015
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4015,
                                    "end": 4018
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 4018,
                                    "end": 4024
                                },
                                "flags": 4006,
                                "transformFlags": 1024,
                                "start": 4006,
                                "end": 4024
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 3995,
                            "end": 4025
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 3976,
                    "end": 4025
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 3974,
                "end": 4027
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 3967,
                    "end": 3974
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 3967,
                "end": 3974
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3765,
            "end": 4027
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4027,
                "end": 4143
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8b",
                "rawText": "logical8b",
                "flags": 96,
                "transformFlags": 0,
                "start": 4143,
                "end": 4153
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4154,
                "end": 4154
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4165,
                                "end": 4173
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4173,
                                            "end": 4175
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4177,
                                            "end": 4183
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 4173,
                                        "end": 4183
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4173,
                                "end": 4183
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4165,
                            "end": 4184
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4184,
                                "end": 4195
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4197,
                                            "end": 4198
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4198,
                                            "end": 4201
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4201,
                                            "end": 4203
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4195,
                                        "end": 4203
                                    },
                                    "flags": 4195,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4204
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4204,
                                    "end": 4207
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 4207,
                                    "end": 4213
                                },
                                "flags": 4195,
                                "transformFlags": 1024,
                                "start": 4195,
                                "end": 4213
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4184,
                            "end": 4214
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4165,
                    "end": 4214
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4163,
                "end": 4216
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 4156,
                    "end": 4163
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4156,
                "end": 4163
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4027,
            "end": 4216
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4216,
                "end": 4312
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8c",
                "rawText": "logical8c",
                "flags": 96,
                "transformFlags": 0,
                "start": 4312,
                "end": 4322
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4323,
                "end": 4323
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4334,
                                "end": 4342
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4342,
                                            "end": 4344
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4346,
                                            "end": 4351
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 4342,
                                        "end": 4351
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4342,
                                "end": 4351
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4334,
                            "end": 4352
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4352,
                                "end": 4363
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4365,
                                            "end": 4366
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4366,
                                            "end": 4369
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4369,
                                            "end": 4371
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4363,
                                        "end": 4371
                                    },
                                    "flags": 4363,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4372
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4372,
                                    "end": 4375
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "'foo'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 4375,
                                    "end": 4381
                                },
                                "flags": 4395,
                                "transformFlags": 1024,
                                "start": 4363,
                                "end": 4381
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4352,
                            "end": 4382
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4334,
                    "end": 4382
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4332,
                "end": 4384
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 4325,
                    "end": 4332
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4325,
                "end": 4332
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4216,
            "end": 4384
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4384,
                "end": 4427
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8d",
                "rawText": "logical8d",
                "flags": 96,
                "transformFlags": 0,
                "start": 4427,
                "end": 4437
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4438,
                "end": 4438
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4449,
                                "end": 4457
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4457,
                                            "end": 4459
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4461,
                                            "end": 4467
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 4457,
                                        "end": 4467
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4457,
                                "end": 4467
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4449,
                            "end": 4468
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4468,
                                "end": 4479
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4479,
                                    "end": 4481
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4481,
                                    "end": 4484
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4486,
                                            "end": 4487
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4487,
                                            "end": 4490
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4490,
                                            "end": 4496
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4486,
                                        "end": 4496
                                    },
                                    "flags": 4484,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4497
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4479,
                                "end": 4497
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4468,
                            "end": 4498
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4449,
                    "end": 4498
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4447,
                "end": 4500
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 4440,
                    "end": 4447
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4440,
                "end": 4447
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4384,
            "end": 4500
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4500,
                "end": 4543
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8e",
                "rawText": "logical8e",
                "flags": 96,
                "transformFlags": 0,
                "start": 4543,
                "end": 4553
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4554,
                "end": 4554
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4565,
                                "end": 4573
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4573,
                                            "end": 4575
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4577,
                                            "end": 4583
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 4573,
                                        "end": 4583
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4573,
                                "end": 4583
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4565,
                            "end": 4584
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4584,
                                "end": 4595
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4595,
                                    "end": 4597
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4597,
                                    "end": 4600
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4602,
                                            "end": 4603
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4603,
                                            "end": 4606
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4606,
                                            "end": 4612
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4602,
                                        "end": 4612
                                    },
                                    "flags": 4600,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4613
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4595,
                                "end": 4613
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4584,
                            "end": 4614
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4565,
                    "end": 4614
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4563,
                "end": 4616
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 4556,
                    "end": 4563
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4556,
                "end": 4563
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4500,
            "end": 4616
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4616,
                "end": 4659
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical8f",
                "rawText": "logical8f",
                "flags": 96,
                "transformFlags": 0,
                "start": 4659,
                "end": 4669
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4670,
                "end": 4670
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4681,
                                "end": 4713
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4713,
                                            "end": 4715
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4717,
                                            "end": 4722
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 4713,
                                        "end": 4722
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4713,
                                "end": 4722
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4681,
                            "end": 4723
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4723,
                                "end": 4734
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4734,
                                    "end": 4736
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4736,
                                    "end": 4739
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4741,
                                            "end": 4742
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4742,
                                            "end": 4745
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "'foo'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 4745,
                                            "end": 4751
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 4741,
                                        "end": 4751
                                    },
                                    "flags": 4739,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 4752
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4734,
                                "end": 4752
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4723,
                            "end": 4753
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4681,
                    "end": 4753
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4679,
                "end": 4755
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 4672,
                    "end": 4679
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4672,
                "end": 4679
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4616,
            "end": 4755
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4755,
                "end": 4798
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical9a",
                "rawText": "logical9a",
                "flags": 96,
                "transformFlags": 0,
                "start": 4798,
                "end": 4808
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4809,
                            "end": 4815
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 4816,
                                "end": 4823
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 4816,
                            "end": 4823
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4809,
                        "end": 4823
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4824,
                            "end": 4830
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 4831,
                                "end": 4838
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 4831,
                            "end": 4838
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4824,
                        "end": 4838
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4809,
                "end": 4838
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 4859,
                                "end": 4912
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4912,
                                        "end": 4914
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4914,
                                        "end": 4917
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4917,
                                        "end": 4919
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 4912,
                                    "end": 4919
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4919,
                                    "end": 4922
                                },
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4922,
                                    "end": 4928
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4912,
                                "end": 4928
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 4859,
                            "end": 4929
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 4859,
                    "end": 4929
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 4857,
                "end": 4931
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 4841,
                            "end": 4848
                        },
                        {
                            "kind": 134234347,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 4850,
                            "end": 4857
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 4848,
                    "end": 4857
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 4841,
                "end": 4857
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4755,
            "end": 4931
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 4931,
                "end": 4974
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical9b",
                "rawText": "logical9b",
                "flags": 96,
                "transformFlags": 0,
                "start": 4974,
                "end": 4984
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4985,
                            "end": 4986
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 4987,
                                "end": 4994
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 4987,
                            "end": 4994
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4985,
                        "end": 4994
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4995,
                            "end": 4997
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 4998,
                                "end": 5005
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 4998,
                            "end": 5005
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4995,
                        "end": 5005
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 4985,
                "end": 5005
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5025,
                                "end": 5036
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5036,
                                        "end": 5042
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5042,
                                        "end": 5045
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5045,
                                        "end": 5047
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 5036,
                                    "end": 5047
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5047,
                                    "end": 5050
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5050,
                                    "end": 5052
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5036,
                                "end": 5052
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5025,
                            "end": 5053
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5025,
                    "end": 5053
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5023,
                "end": 5055
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 5007,
                            "end": 5014
                        },
                        {
                            "kind": 134234347,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 5016,
                            "end": 5023
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 5014,
                    "end": 5023
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5007,
                "end": 5023
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4931,
            "end": 5055
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5055,
                "end": 5098
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical9c",
                "rawText": "logical9c",
                "flags": 96,
                "transformFlags": 0,
                "start": 5098,
                "end": 5108
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5109,
                            "end": 5110
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5111,
                                "end": 5118
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5111,
                            "end": 5118
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5109,
                        "end": 5118
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5119,
                            "end": 5121
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234254,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5122,
                                "end": 5130
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5122,
                            "end": 5130
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5119,
                        "end": 5130
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5109,
                "end": 5130
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5141,
                                "end": 5152
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 5152,
                                        "end": 5156
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5156,
                                        "end": 5159
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5159,
                                        "end": 5161
                                    },
                                    "flags": 4194400,
                                    "transformFlags": 1024,
                                    "start": 5152,
                                    "end": 5161
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5161,
                                    "end": 5164
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5164,
                                    "end": 5166
                                },
                                "flags": 4194400,
                                "transformFlags": 1024,
                                "start": 5152,
                                "end": 5166
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5141,
                            "end": 5167
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5141,
                    "end": 5167
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5139,
                "end": 5169
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 5132,
                    "end": 5139
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5132,
                "end": 5139
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5055,
            "end": 5169
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5169,
                "end": 5212
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical10a",
                "rawText": "logical10a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5212,
                "end": 5223
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5224,
                            "end": 5230
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5231,
                                "end": 5238
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5231,
                            "end": 5238
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5224,
                        "end": 5238
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5239,
                            "end": 5245
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5246,
                                "end": 5253
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5246,
                            "end": 5253
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5239,
                        "end": 5253
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5224,
                "end": 5253
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5274,
                                "end": 5327
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5327,
                                        "end": 5329
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5329,
                                        "end": 5332
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5332,
                                        "end": 5334
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 5327,
                                    "end": 5334
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5334,
                                    "end": 5337
                                },
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5337,
                                    "end": 5343
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5327,
                                "end": 5343
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5274,
                            "end": 5344
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5274,
                    "end": 5344
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5272,
                "end": 5346
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234345,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 5256,
                            "end": 5263
                        },
                        {
                            "kind": 134234347,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 5265,
                            "end": 5272
                        }
                    ],
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 5263,
                    "end": 5272
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5256,
                "end": 5272
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5169,
            "end": 5346
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5346,
                "end": 5389
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical10b",
                "rawText": "logical10b",
                "flags": 96,
                "transformFlags": 0,
                "start": 5389,
                "end": 5400
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5401,
                            "end": 5402
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5403,
                                "end": 5410
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5403,
                            "end": 5410
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5401,
                        "end": 5410
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5411,
                            "end": 5413
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5414,
                                "end": 5421
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5414,
                            "end": 5421
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5411,
                        "end": 5421
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5401,
                "end": 5421
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5436,
                                "end": 5471
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5471,
                                        "end": 5477
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5477,
                                        "end": 5480
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5480,
                                        "end": 5482
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 5471,
                                    "end": 5482
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5482,
                                    "end": 5485
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5485,
                                    "end": 5487
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5471,
                                "end": 5487
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5436,
                            "end": 5488
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5436,
                    "end": 5488
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5434,
                "end": 5490
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5423,
                        "end": 5429
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234252,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 5430,
                                        "end": 5433
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 5430,
                                    "end": 5433
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5430,
                            "end": 5433
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 5429,
                        "end": 5434
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 5423,
                    "end": 5434
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5423,
                "end": 5434
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5346,
            "end": 5490
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5490,
                "end": 5533
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical10c",
                "rawText": "logical10c",
                "flags": 96,
                "transformFlags": 0,
                "start": 5533,
                "end": 5544
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5545,
                            "end": 5546
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5547,
                                "end": 5554
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5547,
                            "end": 5554
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5545,
                        "end": 5554
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5555,
                            "end": 5557
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5558,
                                "end": 5565
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5558,
                            "end": 5565
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5555,
                        "end": 5565
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5545,
                "end": 5565
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5580,
                                "end": 5622
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5622,
                                        "end": 5624
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5624,
                                        "end": 5627
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5627,
                                        "end": 5633
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 5622,
                                    "end": 5633
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5633,
                                    "end": 5636
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5636,
                                    "end": 5638
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5622,
                                "end": 5638
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5580,
                            "end": 5639
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5580,
                    "end": 5639
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5578,
                "end": 5641
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5567,
                        "end": 5573
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234252,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 5574,
                                        "end": 5577
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 5574,
                                    "end": 5577
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5574,
                            "end": 5577
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 5573,
                        "end": 5578
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 5567,
                    "end": 5578
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5567,
                "end": 5578
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5490,
            "end": 5641
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5641,
                "end": 5675
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical11a",
                "rawText": "logical11a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5675,
                "end": 5686
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5687,
                "end": 5687
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5698,
                                "end": 5706
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5706,
                                            "end": 5708
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5710,
                                            "end": 5712
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 5706,
                                        "end": 5712
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 5706,
                                "end": 5712
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5698,
                            "end": 5713
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5713,
                                "end": 5721
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 5723,
                                    "end": 5726
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5726,
                                                "end": 5728
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5730,
                                                "end": 5732
                                            },
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 5726,
                                            "end": 5732
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 5726,
                                    "end": 5732
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 5713,
                                "end": 5733
                            },
                            "condition": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5742,
                                    "end": 5744
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5740,
                                    "end": 5742
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5740,
                                "end": 5744
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5733,
                                    "end": 5735
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5735,
                                    "end": 5737
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5737,
                                    "end": 5739
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5733,
                                "end": 5739
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 5747,
                                                    "end": 5757
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5757,
                                                    "end": 5759
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5759,
                                                        "end": 5761
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33339,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5761,
                                                        "end": 5764
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5764,
                                                        "end": 5769
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 5759,
                                                    "end": 5769
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 5747,
                                                "end": 5769
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 5747,
                                            "end": 5770
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 5747,
                                    "end": 5770
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 5745,
                                "end": 5776
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 5713,
                            "end": 5776
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5776,
                                "end": 5787
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5787,
                                "end": 5789
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5776,
                            "end": 5790
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5698,
                    "end": 5790
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5696,
                "end": 5792
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 5689,
                    "end": 5696
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5689,
                "end": 5696
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5641,
            "end": 5792
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5792,
                "end": 5826
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical11b",
                "rawText": "logical11b",
                "flags": 96,
                "transformFlags": 0,
                "start": 5826,
                "end": 5837
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5838,
                            "end": 5839
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 5840,
                                "end": 5847
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 5840,
                            "end": 5847
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5838,
                        "end": 5847
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 5838,
                "end": 5847
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5858,
                                "end": 5866
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 5868,
                                    "end": 5871
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5871,
                                                "end": 5873
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5875,
                                                "end": 5877
                                            },
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 5871,
                                            "end": 5877
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 5871,
                                    "end": 5877
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 5858,
                                "end": 5878
                            },
                            "condition": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5887,
                                    "end": 5889
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5885,
                                    "end": 5887
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5885,
                                "end": 5889
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5878,
                                    "end": 5880
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5880,
                                    "end": 5882
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5882,
                                    "end": 5884
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 5878,
                                "end": 5884
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 5892,
                                                    "end": 5902
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5902,
                                                    "end": 5904
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5904,
                                                        "end": 5906
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33339,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5906,
                                                        "end": 5909
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 5909,
                                                        "end": 5914
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 5904,
                                                    "end": 5914
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 5892,
                                                "end": 5914
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 5892,
                                            "end": 5915
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 5892,
                                    "end": 5915
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 5890,
                                "end": 5942
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 5858,
                            "end": 5942
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 5942,
                                "end": 5953
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5953,
                                "end": 5955
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 5942,
                            "end": 5956
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 5858,
                    "end": 5956
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5856,
                "end": 5958
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 5849,
                    "end": 5856
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 5849,
                "end": 5856
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5792,
            "end": 5958
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 5958,
                "end": 5992
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical12a",
                "rawText": "logical12a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5992,
                "end": 6003
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 6004,
                "end": 6004
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6015,
                                "end": 6023
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6023,
                                            "end": 6025
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6027,
                                            "end": 6029
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 6023,
                                        "end": 6029
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6023,
                                "end": 6029
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 6015,
                            "end": 6030
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6030,
                                "end": 6038
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6038,
                                            "end": 6040
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6042,
                                            "end": 6047
                                        },
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 6038,
                                        "end": 6047
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6038,
                                "end": 6047
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 6030,
                            "end": 6048
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6048,
                                "end": 6056
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6058,
                                    "end": 6061
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6061,
                                                "end": 6063
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6065,
                                                "end": 6067
                                            },
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 6061,
                                            "end": 6067
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 6061,
                                    "end": 6067
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6048,
                                "end": 6068
                            },
                            "condition": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6077,
                                    "end": 6079
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6075,
                                    "end": 6077
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6075,
                                "end": 6079
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6068,
                                    "end": 6070
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6070,
                                    "end": 6072
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6072,
                                    "end": 6074
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 6068,
                                "end": 6074
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 6082,
                                                    "end": 6092
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6092,
                                                    "end": 6094
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "z",
                                                        "rawText": "z",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6094,
                                                        "end": 6096
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33594,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6096,
                                                        "end": 6099
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6099,
                                                        "end": 6101
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 6094,
                                                    "end": 6101
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 6082,
                                                "end": 6101
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 6082,
                                            "end": 6102
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 6102,
                                                    "end": 6112
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6112,
                                                    "end": 6114
                                                },
                                                "right": {
                                                    "kind": 205586437,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6114,
                                                    "end": 6120
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 6102,
                                                "end": 6120
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 6102,
                                            "end": 6121
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 6082,
                                    "end": 6121
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6080,
                                "end": 6127
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 6048,
                            "end": 6127
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6127,
                                "end": 6138
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6138,
                                "end": 6140
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 6127,
                            "end": 6141
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 6015,
                    "end": 6141
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6013,
                "end": 6143
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 6006,
                    "end": 6013
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 6006,
                "end": 6013
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5958,
            "end": 6143
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 6143,
                "end": 6177
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical12b",
                "rawText": "logical12b",
                "flags": 96,
                "transformFlags": 0,
                "start": 6177,
                "end": 6188
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6189,
                            "end": 6190
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6191,
                                "end": 6198
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6191,
                            "end": 6198
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6189,
                        "end": 6198
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 6189,
                "end": 6198
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6209,
                                "end": 6217
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6219,
                                    "end": 6222
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6222,
                                                "end": 6224
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6226,
                                                "end": 6228
                                            },
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 6222,
                                            "end": 6228
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 6222,
                                    "end": 6228
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6209,
                                "end": 6229
                            },
                            "condition": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6238,
                                    "end": 6240
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6236,
                                    "end": 6238
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6236,
                                "end": 6240
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6229,
                                    "end": 6231
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6231,
                                    "end": 6233
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6233,
                                    "end": 6235
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 6229,
                                "end": 6235
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 6243,
                                                    "end": 6253
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6253,
                                                    "end": 6255
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6255,
                                                        "end": 6257
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33594,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6257,
                                                        "end": 6260
                                                    },
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6260,
                                                        "end": 6265
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 1024,
                                                    "start": 6255,
                                                    "end": 6265
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 6243,
                                                "end": 6265
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 6243,
                                            "end": 6266
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 6243,
                                    "end": 6266
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6241,
                                "end": 6293
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 6209,
                            "end": 6293
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6293,
                                "end": 6304
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6304,
                                "end": 6306
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 6293,
                            "end": 6307
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 6209,
                    "end": 6307
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6207,
                "end": 6309
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 6200,
                    "end": 6207
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 6200,
                "end": 6207
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6143,
            "end": 6309
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 6309,
                "end": 6341
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical13",
                "rawText": "logical13",
                "flags": 96,
                "transformFlags": 0,
                "start": 6341,
                "end": 6351
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6352,
                            "end": 6353
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6354,
                                "end": 6361
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6354,
                            "end": 6361
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6352,
                        "end": 6361
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 6352,
                "end": 6361
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6384,
                                "end": 6395
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6407,
                                                            "end": 6408
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6409,
                                                                "end": 6411
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6411,
                                                                "end": 6414
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6414,
                                                                "end": 6420
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6407,
                                                            "end": 6420
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6407,
                                                        "end": 6420
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6407,
                                                "end": 6420
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6397,
                                            "end": 6421
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6432,
                                                            "end": 6433
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6434,
                                                                "end": 6439
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6439,
                                                                "end": 6442
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6442,
                                                                "end": 6448
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6432,
                                                            "end": 6448
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6432,
                                                        "end": 6448
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6432,
                                                "end": 6448
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6422,
                                            "end": 6449
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6460,
                                                            "end": 6461
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6462,
                                                                "end": 6467
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6467,
                                                                "end": 6470
                                                            },
                                                            "right": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6470,
                                                                "end": 6476
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6460,
                                                            "end": 6476
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6460,
                                                        "end": 6476
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6460,
                                                "end": 6476
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6450,
                                            "end": 6477
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6488,
                                                            "end": 6489
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6490,
                                                                "end": 6496
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6496,
                                                                "end": 6499
                                                            },
                                                            "right": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6499,
                                                                "end": 6505
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6488,
                                                            "end": 6505
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6488,
                                                        "end": 6505
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6488,
                                                "end": 6505
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6478,
                                            "end": 6506
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6517,
                                                            "end": 6518
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6519,
                                                                "end": 6521
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6521,
                                                                "end": 6524
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6524,
                                                                "end": 6530
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6517,
                                                            "end": 6530
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6517,
                                                        "end": 6530
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6517,
                                                "end": 6530
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6507,
                                            "end": 6531
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6542,
                                                            "end": 6543
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6544,
                                                                "end": 6550
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6550,
                                                                "end": 6553
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6553,
                                                                "end": 6559
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6542,
                                                            "end": 6559
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6542,
                                                        "end": 6559
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6542,
                                                "end": 6559
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6532,
                                            "end": 6560
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6571,
                                                            "end": 6572
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6573,
                                                                "end": 6579
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6579,
                                                                "end": 6582
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6582,
                                                                "end": 6588
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6571,
                                                            "end": 6588
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6571,
                                                        "end": 6588
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6571,
                                                "end": 6588
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6561,
                                            "end": 6589
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6600,
                                                            "end": 6601
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6602,
                                                                "end": 6608
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33594,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6608,
                                                                "end": 6611
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6611,
                                                                "end": 6617
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6600,
                                                            "end": 6617
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6600,
                                                        "end": 6617
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6600,
                                                "end": 6617
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6590,
                                            "end": 6618
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 6397,
                                    "end": 6619
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 6395,
                                "end": 6625
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 6384,
                            "end": 6626
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 6384,
                    "end": 6626
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6382,
                "end": 6628
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6363,
                        "end": 6369
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "protoKeyword": null,
                                                "staticKeyword": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6371,
                                                    "end": 6372
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 6373,
                                                        "end": 6380
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 6373,
                                                    "end": 6380
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 6371,
                                                "end": 6380
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 6370,
                                        "end": 6381
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 6370,
                                    "end": 6381
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6370,
                            "end": 6381
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 6369,
                        "end": 6382
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 6363,
                    "end": 6382
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 6363,
                "end": 6382
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6309,
            "end": 6628
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 6628,
                "end": 6660
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical14",
                "rawText": "logical14",
                "flags": 96,
                "transformFlags": 0,
                "start": 6660,
                "end": 6670
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6671,
                            "end": 6672
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6673,
                                "end": 6680
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6673,
                            "end": 6680
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6671,
                        "end": 6680
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 6671,
                "end": 6680
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 6703,
                                "end": 6714
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6726,
                                                            "end": 6727
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6728,
                                                                "end": 6730
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6730,
                                                                "end": 6733
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6733,
                                                                "end": 6739
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6726,
                                                            "end": 6739
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6726,
                                                        "end": 6739
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6726,
                                                "end": 6739
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6716,
                                            "end": 6740
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6751,
                                                            "end": 6752
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6753,
                                                                "end": 6759
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6759,
                                                                "end": 6762
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6762,
                                                                "end": 6768
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6751,
                                                            "end": 6768
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6751,
                                                        "end": 6768
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6751,
                                                "end": 6768
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6741,
                                            "end": 6769
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6780,
                                                            "end": 6781
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6782,
                                                                "end": 6788
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6788,
                                                                "end": 6791
                                                            },
                                                            "right": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6791,
                                                                "end": 6796
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6780,
                                                            "end": 6796
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6780,
                                                        "end": 6796
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6780,
                                                "end": 6796
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6770,
                                            "end": 6797
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6808,
                                                            "end": 6809
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 24752947,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6810,
                                                                "end": 6815
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6815,
                                                                "end": 6818
                                                            },
                                                            "right": {
                                                                "kind": 205586437,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6818,
                                                                "end": 6824
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6808,
                                                            "end": 6824
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6808,
                                                        "end": 6824
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6808,
                                                "end": 6824
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6798,
                                            "end": 6825
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6836,
                                                            "end": 6837
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6838,
                                                                "end": 6840
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6840,
                                                                "end": 6843
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6843,
                                                                "end": 6849
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6836,
                                                            "end": 6849
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6836,
                                                        "end": 6849
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6836,
                                                "end": 6849
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6826,
                                            "end": 6850
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6861,
                                                            "end": 6862
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6863,
                                                                "end": 6869
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6869,
                                                                "end": 6872
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6872,
                                                                "end": 6878
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6861,
                                                            "end": 6878
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6861,
                                                        "end": 6878
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6861,
                                                "end": 6878
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6851,
                                            "end": 6879
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6890,
                                                            "end": 6891
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6892,
                                                                "end": 6898
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6898,
                                                                "end": 6901
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6901,
                                                                "end": 6907
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6890,
                                                            "end": 6907
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6890,
                                                        "end": 6907
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6890,
                                                "end": 6907
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6880,
                                            "end": 6908
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 6919,
                                                            "end": 6920
                                                        },
                                                        "right": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 201392131,
                                                                "text": "foo",
                                                                "rawText": "\"foo\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6921,
                                                                "end": 6927
                                                            },
                                                            "operatorToken": {
                                                                "kind": 33339,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6927,
                                                                "end": 6930
                                                            },
                                                            "right": {
                                                                "kind": 201392131,
                                                                "text": "bar",
                                                                "rawText": "\"bar\"",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 6930,
                                                                "end": 6936
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 1024,
                                                            "start": 6919,
                                                            "end": 6936
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 6919,
                                                        "end": 6936
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 6919,
                                                "end": 6936
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 6909,
                                            "end": 6937
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 6716,
                                    "end": 6938
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 6714,
                                "end": 6944
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 6703,
                            "end": 6945
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 6703,
                    "end": 6945
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6701,
                "end": 6947
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6682,
                        "end": 6688
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234353,
                                        "properties": [
                                            {
                                                "kind": 193,
                                                "protoKeyword": null,
                                                "staticKeyword": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 6690,
                                                    "end": 6691
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "transformFlags": 0,
                                                        "start": 6692,
                                                        "end": 6699
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 6692,
                                                    "end": 6699
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 6690,
                                                "end": 6699
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 6689,
                                        "end": 6700
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 6689,
                                    "end": 6700
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6689,
                            "end": 6700
                        },
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 6688,
                        "end": 6701
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 6682,
                    "end": 6701
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 6682,
                "end": 6701
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6628,
            "end": 6947
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 6947,
                "end": 6986
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical15a",
                "rawText": "logical15a",
                "flags": 96,
                "transformFlags": 0,
                "start": 6986,
                "end": 6997
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6998,
                            "end": 6999
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7000,
                                "end": 7007
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7000,
                            "end": 7007
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6998,
                        "end": 7007
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 6998,
                "end": 7007
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7018,
                                "end": 7029
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7029,
                                    "end": 7031
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7031,
                                    "end": 7033
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7035,
                                            "end": 7036
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7036,
                                            "end": 7039
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7039,
                                            "end": 7041
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7033,
                                        "end": 7041
                                    },
                                    "flags": 7033,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7042
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 7029,
                                "end": 7042
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7018,
                            "end": 7043
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7018,
                    "end": 7043
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7016,
                "end": 7045
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7009,
                    "end": 7016
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7009,
                "end": 7016
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6947,
            "end": 7045
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7045,
                "end": 7084
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical15b",
                "rawText": "logical15b",
                "flags": 96,
                "transformFlags": 0,
                "start": 7084,
                "end": 7095
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7096,
                            "end": 7097
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7098,
                                "end": 7105
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7098,
                            "end": 7105
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7096,
                        "end": 7105
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7096,
                "end": 7105
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7116,
                                "end": 7127
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7129,
                                            "end": 7130
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7130,
                                            "end": 7133
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7133,
                                            "end": 7135
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7127,
                                        "end": 7135
                                    },
                                    "flags": 7127,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7136
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7136,
                                    "end": 7138
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7138,
                                    "end": 7140
                                },
                                "flags": 7159,
                                "transformFlags": 1024,
                                "start": 7127,
                                "end": 7140
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7116,
                            "end": 7141
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7116,
                    "end": 7141
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7114,
                "end": 7143
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7107,
                    "end": 7114
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7107,
                "end": 7114
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7045,
            "end": 7143
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7143,
                "end": 7182
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical15c",
                "rawText": "logical15c",
                "flags": 96,
                "transformFlags": 0,
                "start": 7182,
                "end": 7193
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7194,
                            "end": 7195
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7196,
                                "end": 7203
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7196,
                            "end": 7203
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7194,
                        "end": 7203
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7194,
                "end": 7203
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7214,
                                "end": 7225
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7225,
                                    "end": 7227
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7227,
                                    "end": 7229
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7231,
                                            "end": 7232
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7232,
                                            "end": 7235
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7235,
                                            "end": 7237
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7229,
                                        "end": 7237
                                    },
                                    "flags": 7229,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7238
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 7225,
                                "end": 7238
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7214,
                            "end": 7239
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7214,
                    "end": 7239
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7212,
                "end": 7241
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7205,
                    "end": 7212
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7205,
                "end": 7212
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7143,
            "end": 7241
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7241,
                "end": 7280
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical15d",
                "rawText": "logical15d",
                "flags": 96,
                "transformFlags": 0,
                "start": 7280,
                "end": 7291
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7292,
                            "end": 7293
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7294,
                                "end": 7301
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7294,
                            "end": 7301
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7292,
                        "end": 7301
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7292,
                "end": 7301
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7312,
                                "end": 7323
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7325,
                                            "end": 7326
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7326,
                                            "end": 7329
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7329,
                                            "end": 7331
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7323,
                                        "end": 7331
                                    },
                                    "flags": 7323,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7332
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7332,
                                    "end": 7334
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7334,
                                    "end": 7336
                                },
                                "flags": 7355,
                                "transformFlags": 1024,
                                "start": 7323,
                                "end": 7336
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7312,
                            "end": 7337
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7312,
                    "end": 7337
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7310,
                "end": 7339
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7303,
                    "end": 7310
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7303,
                "end": 7310
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7241,
            "end": 7339
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7339,
                "end": 7379
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical16a",
                "rawText": "logical16a",
                "flags": 96,
                "transformFlags": 0,
                "start": 7379,
                "end": 7390
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7391,
                            "end": 7392
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7393,
                                "end": 7400
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7393,
                            "end": 7400
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7391,
                        "end": 7400
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7391,
                "end": 7400
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7412,
                                "end": 7423
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7423,
                                    "end": 7425
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7425,
                                    "end": 7427
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7429,
                                            "end": 7430
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7430,
                                            "end": 7433
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7433,
                                            "end": 7435
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7427,
                                        "end": 7435
                                    },
                                    "flags": 7427,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7436
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 7423,
                                "end": 7436
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7412,
                            "end": 7437
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7412,
                    "end": 7437
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7410,
                "end": 7439
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7402,
                    "end": 7410
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7402,
                "end": 7410
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7339,
            "end": 7439
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7439,
                "end": 7479
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical16b",
                "rawText": "logical16b",
                "flags": 96,
                "transformFlags": 0,
                "start": 7479,
                "end": 7490
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7491,
                            "end": 7492
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7493,
                                "end": 7500
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7493,
                            "end": 7500
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7491,
                        "end": 7500
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7491,
                "end": 7500
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7512,
                                "end": 7523
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7525,
                                            "end": 7526
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7526,
                                            "end": 7529
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7529,
                                            "end": 7531
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7523,
                                        "end": 7531
                                    },
                                    "flags": 7523,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7532
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7532,
                                    "end": 7534
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7534,
                                    "end": 7536
                                },
                                "flags": 7523,
                                "transformFlags": 1024,
                                "start": 7523,
                                "end": 7536
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7512,
                            "end": 7537
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7512,
                    "end": 7537
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7510,
                "end": 7539
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7502,
                    "end": 7510
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7502,
                "end": 7510
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7439,
            "end": 7539
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7539,
                "end": 7579
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical16c",
                "rawText": "logical16c",
                "flags": 96,
                "transformFlags": 0,
                "start": 7579,
                "end": 7590
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7591,
                            "end": 7592
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7593,
                                "end": 7600
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7593,
                            "end": 7600
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7591,
                        "end": 7600
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7591,
                "end": 7600
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7612,
                                "end": 7623
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7623,
                                    "end": 7625
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7625,
                                    "end": 7627
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7629,
                                            "end": 7630
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7630,
                                            "end": 7633
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7633,
                                            "end": 7635
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7627,
                                        "end": 7635
                                    },
                                    "flags": 7627,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7636
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 7623,
                                "end": 7636
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7612,
                            "end": 7637
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7612,
                    "end": 7637
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7610,
                "end": 7639
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7602,
                    "end": 7610
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7602,
                "end": 7610
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7539,
            "end": 7639
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7639,
                "end": 7679
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical16d",
                "rawText": "logical16d",
                "flags": 96,
                "transformFlags": 0,
                "start": 7679,
                "end": 7690
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7691,
                            "end": 7692
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7693,
                                "end": 7700
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7693,
                            "end": 7700
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7691,
                        "end": 7700
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7691,
                "end": 7700
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7712,
                                "end": 7723
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7725,
                                            "end": 7726
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7726,
                                            "end": 7729
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7729,
                                            "end": 7731
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7723,
                                        "end": 7731
                                    },
                                    "flags": 7723,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7732
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7732,
                                    "end": 7734
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7734,
                                    "end": 7736
                                },
                                "flags": 7723,
                                "transformFlags": 1024,
                                "start": 7723,
                                "end": 7736
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7712,
                            "end": 7737
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7712,
                    "end": 7737
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7710,
                "end": 7739
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7702,
                    "end": 7710
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7702,
                "end": 7710
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7639,
            "end": 7739
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7739,
                "end": 7778
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical17a",
                "rawText": "logical17a",
                "flags": 96,
                "transformFlags": 0,
                "start": 7778,
                "end": 7789
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7790,
                            "end": 7791
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7792,
                                "end": 7799
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7792,
                            "end": 7799
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7790,
                        "end": 7799
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7790,
                "end": 7799
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7811,
                                "end": 7822
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7822,
                                    "end": 7824
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 7824,
                                    "end": 7827
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7829,
                                            "end": 7830
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7830,
                                            "end": 7833
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7833,
                                            "end": 7835
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7827,
                                        "end": 7835
                                    },
                                    "flags": 7827,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7836
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 7822,
                                "end": 7836
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7811,
                            "end": 7837
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7811,
                    "end": 7837
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7809,
                "end": 7839
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7801,
                    "end": 7809
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7801,
                "end": 7809
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7739,
            "end": 7839
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7839,
                "end": 7878
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical17b",
                "rawText": "logical17b",
                "flags": 96,
                "transformFlags": 0,
                "start": 7878,
                "end": 7889
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7890,
                            "end": 7891
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7892,
                                "end": 7899
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7892,
                            "end": 7899
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7890,
                        "end": 7899
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7890,
                "end": 7899
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 7911,
                                "end": 7922
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7924,
                                            "end": 7925
                                        },
                                        "operatorToken": {
                                            "kind": 33339,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7925,
                                            "end": 7928
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7928,
                                            "end": 7930
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 7922,
                                        "end": 7930
                                    },
                                    "flags": 7922,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 7931
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 7931,
                                    "end": 7934
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7934,
                                    "end": 7936
                                },
                                "flags": 7922,
                                "transformFlags": 1024,
                                "start": 7922,
                                "end": 7936
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 7911,
                            "end": 7937
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 7911,
                    "end": 7937
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7909,
                "end": 7939
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 7901,
                    "end": 7909
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 7901,
                "end": 7909
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7839,
            "end": 7939
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 7939,
                "end": 7978
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical17c",
                "rawText": "logical17c",
                "flags": 96,
                "transformFlags": 0,
                "start": 7978,
                "end": 7989
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7990,
                            "end": 7991
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 7992,
                                "end": 7999
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7992,
                            "end": 7999
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7990,
                        "end": 7999
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 7990,
                "end": 7999
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8011,
                                "end": 8022
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8022,
                                    "end": 8024
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 8024,
                                    "end": 8027
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8029,
                                            "end": 8030
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8030,
                                            "end": 8033
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8033,
                                            "end": 8035
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 8027,
                                        "end": 8035
                                    },
                                    "flags": 8027,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 8036
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 8022,
                                "end": 8036
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8011,
                            "end": 8037
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8011,
                    "end": 8037
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8009,
                "end": 8039
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8001,
                    "end": 8009
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8001,
                "end": 8009
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 7939,
            "end": 8039
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 8039,
                "end": 8078
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical17d",
                "rawText": "logical17d",
                "flags": 96,
                "transformFlags": 0,
                "start": 8078,
                "end": 8089
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8090,
                            "end": 8091
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 8092,
                                "end": 8099
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8092,
                            "end": 8099
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8090,
                        "end": 8099
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 8090,
                "end": 8099
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8111,
                                "end": 8122
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8124,
                                            "end": 8125
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8125,
                                            "end": 8128
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 7,
                                            "rawText": "7",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8128,
                                            "end": 8130
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 8122,
                                        "end": 8130
                                    },
                                    "flags": 8122,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 8131
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 8131,
                                    "end": 8134
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8134,
                                    "end": 8136
                                },
                                "flags": 8122,
                                "transformFlags": 1024,
                                "start": 8122,
                                "end": 8136
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8111,
                            "end": 8137
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8111,
                    "end": 8137
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8109,
                "end": 8139
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8101,
                    "end": 8109
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8101,
                "end": 8109
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8039,
            "end": 8139
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 8139,
                "end": 8211
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical18a",
                "rawText": "logical18a",
                "flags": 96,
                "transformFlags": 0,
                "start": 8211,
                "end": 8222
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8223,
                            "end": 8224
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 8225,
                                "end": 8232
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8225,
                            "end": 8232
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8223,
                        "end": 8232
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8233,
                            "end": 8235
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 8236,
                                "end": 8243
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8236,
                            "end": 8243
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8233,
                        "end": 8243
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 8223,
                "end": 8243
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8254,
                                "end": 8265
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8265,
                                        "end": 8267
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8267,
                                        "end": 8269
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8269,
                                        "end": 8271
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8265,
                                    "end": 8271
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8271,
                                    "end": 8274
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8274,
                                        "end": 8276
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8276,
                                        "end": 8278
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8278,
                                        "end": 8280
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8276,
                                    "end": 8280
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 8265,
                                "end": 8280
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8254,
                            "end": 8281
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8254,
                    "end": 8281
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8252,
                "end": 8283
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8245,
                    "end": 8252
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8245,
                "end": 8252
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8139,
            "end": 8283
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 8283,
                "end": 8345
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical18b",
                "rawText": "logical18b",
                "flags": 96,
                "transformFlags": 0,
                "start": 8345,
                "end": 8356
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8357,
                            "end": 8358
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8361,
                                            "end": 8362
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8363,
                                                "end": 8370
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8363,
                                            "end": 8370
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8361,
                                        "end": 8370
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8359,
                                "end": 8371
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8359,
                            "end": 8371
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8357,
                        "end": 8371
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8372,
                            "end": 8374
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8377,
                                            "end": 8378
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8379,
                                                "end": 8386
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8379,
                                            "end": 8386
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8377,
                                        "end": 8386
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8375,
                                "end": 8387
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8375,
                            "end": 8387
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8372,
                        "end": 8387
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 8357,
                "end": 8387
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8398,
                                "end": 8409
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8409,
                                            "end": 8411
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8412,
                                            "end": 8413
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8409,
                                        "end": 8413
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8413,
                                        "end": 8415
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8415,
                                        "end": 8417
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8409,
                                    "end": 8417
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8417,
                                    "end": 8420
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8420,
                                            "end": 8422
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8423,
                                            "end": 8424
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8420,
                                        "end": 8424
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8424,
                                        "end": 8426
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8426,
                                        "end": 8428
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8424,
                                    "end": 8428
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 8409,
                                "end": 8428
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8398,
                            "end": 8429
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8398,
                    "end": 8429
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8396,
                "end": 8431
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8389,
                    "end": 8396
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8389,
                "end": 8396
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8283,
            "end": 8431
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 8431,
                "end": 8495
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical19a",
                "rawText": "logical19a",
                "flags": 96,
                "transformFlags": 0,
                "start": 8495,
                "end": 8506
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8507,
                            "end": 8508
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8511,
                                            "end": 8513
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8514,
                                                "end": 8521
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8514,
                                            "end": 8521
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8511,
                                        "end": 8522
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8522,
                                            "end": 8524
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234254,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8525,
                                                "end": 8533
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8525,
                                            "end": 8533
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8522,
                                        "end": 8533
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8509,
                                "end": 8535
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8509,
                            "end": 8535
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8507,
                        "end": 8535
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 8507,
                "end": 8535
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8547,
                                "end": 8556
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8558,
                                            "end": 8559
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8560,
                                            "end": 8561
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8556,
                                        "end": 8561
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8561,
                                        "end": 8564
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8564,
                                            "end": 8566
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8567,
                                            "end": 8568
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8564,
                                        "end": 8568
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8556,
                                    "end": 8568
                                },
                                "flags": 8556,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 8569
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8547,
                            "end": 8570
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8547,
                    "end": 8570
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8545,
                "end": 8598
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8537,
                    "end": 8545
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8537,
                "end": 8545
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8431,
            "end": 8598
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 8598,
                "end": 8607
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "logical19b",
                "rawText": "logical19b",
                "flags": 96,
                "transformFlags": 0,
                "start": 8607,
                "end": 8618
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8619,
                            "end": 8620
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8623,
                                            "end": 8625
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8626,
                                                "end": 8633
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8626,
                                            "end": 8633
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8623,
                                        "end": 8634
                                    },
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8634,
                                            "end": 8636
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234254,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 8637,
                                                "end": 8645
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8637,
                                            "end": 8645
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8634,
                                        "end": 8645
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 8621,
                                "end": 8647
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8621,
                            "end": 8647
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8619,
                        "end": 8647
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 8619,
                "end": 8647
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 8659,
                                "end": 8668
                            },
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8670,
                                            "end": 8671
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8672,
                                            "end": 8673
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8668,
                                        "end": 8673
                                    },
                                    "operatorToken": {
                                        "kind": 33339,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8673,
                                        "end": 8676
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8676,
                                            "end": 8678
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8679,
                                            "end": 8680
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 8676,
                                        "end": 8680
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 8668,
                                    "end": 8680
                                },
                                "flags": 8668,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 8681
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 8659,
                            "end": 8682
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 8659,
                    "end": 8682
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 8657,
                "end": 8710
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 8649,
                    "end": 8657
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8649,
                "end": 8657
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8598,
            "end": 8710
        }
    ],
    "isModule": false,
    "source": "\n/**\n * A falsy variable on the left side of &&\n */\nfunction logical1a(): number { // expected `: boolean`\n    var x = false;\n    return x && '123';\n}\n\n/**\n * A truthy variable on the left side of &&\n */\nfunction logical1b(): string {\n    var x = true;\n    return x && '123';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2a(): number { // expected `: boolean`\n    return false && '123';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2b(): number {\n    return 0 && '123';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2c(): string {\n    return \"\" && 123;\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2d(): string {\n    return true && '123';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2e(): number {\n    return 'foo' && 123;\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2f(): string {\n    return 123 && 'foo';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2g(): string {\n    return [1,2,3] && 'foo';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2h(x: {a: number}): string {\n    return x && 'foo';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2i(x: Object): string {\n    return x && 'foo';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2j(x: (a: number) => number): string {\n    return x && 'foo';\n}\n\n/**\n * A literal on the left side of &&\n */\nfunction logical2k(x: Function): string {\n    return x && 'foo';\n}\n\n/**\n * An expression on the left side of &&\n */\nfunction logical3a(): string { // expected `: boolean`\n    var x: ?number = null;\n    return x != null && x > 10;\n}\n\n/**\n * An expression on the left side of &&\n */\nfunction logical3b(): number { // expected `: boolean | number`\n    var x: ?number = null;\n    return x != null && x;\n}\n\n/**\n * An expression on the left side of &&\n */\nfunction logical3c(): ?number { // expected `: boolean | ?number`\n    var x: ?number = null;\n    return x != undefined && x;\n}\n\n/**\n * Maybe truthy returns both types\n */\nfunction logical4(x: boolean): string { // expected `: boolean | string`\n    return x && '123';\n}\n\n/**\n * A falsy variable on the left side of ||\n */\nfunction logical5a(): number {\n    var x = false;\n    return x || 0;\n}\n\n/**\n * A maybe variable on the left side of ||\n */\nfunction logical5b(): number {\n    var x: ?number = null;\n    return x || 0;\n}\n\n/**\n * A truthy variable on the left side of ||\n */\nfunction logical5c(): string { // expected `: boolean`\n    var x = true;\n    return x || 0;\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6a(): string {\n    return false || '123';\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6b(): string {\n    return 0 || '123';\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6c(): number {\n    return \"\" || 123;\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6d(): number { // expected `: boolean`\n    return true || '123';\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6e(): string {\n    return 'foo' || 123;\n}\n\n/**\n * A literal on the left side of ||\n */\nfunction logical6f(): number {\n    return 123 || 'foo';\n}\n\n/**\n * A composite && and ||\n */\nfunction logical7a(): number {\n    var x: ?number = null;\n    return x != null && x || 0;\n}\n\n/**\n * A composite && and || where the truthiness is unknown\n */\nfunction logical7b(x: boolean, y: number): number {\n    return x && y || 0;\n}\n\n/**\n * A composite && and ||\n */\nfunction logical7c(x: string): number {\n    return x && 1 || 0;\n}\n\n/**\n * A composite && and ||\n */\nfunction logical7d(x: number): string {\n    return x && 'foo' || 'bar';\n}\n\n/**\n * A composite && and ||\n */\nfunction logical7e(x: number): string {\n    return false && x || 'bar';\n}\n\n/**\n * A composite || and &&\n *\n * `x || 0` always returns a number (never a boolean) and then short\n * circuits the && because 0 is falsy, so this should just return number.\n */\nfunction logical8a(): number {\n    var x = false;\n    return (x || 0) && 'foo';\n}\n\n/**\n * A composite || and &&\n *\n * `x || 1` always returns something truthy, so this returns a string\n */\nfunction logical8b(): string {\n    var x = false;\n    return (x || 1) && 'foo';\n}\n\n/**\n * A composite || and &&\n *\n * `x` is always truthy, so this returns a string\n */\nfunction logical8c(): string {\n    var x = true;\n    return (x || 1) && 'foo';\n}\n\n/**\n * A composite || and &&\n */\nfunction logical8d(): number {\n    var x = false;\n    return x || (0 && 'foo');\n}\n\n/**\n * A composite || and &&\n */\nfunction logical8e(): string {\n    var x = false;\n    return x || (1 && 'foo');\n}\n\n/**\n * A composite || and &&\n */\nfunction logical8f(): string { // expected `: boolean`\n    var x = true;\n    return x || (1 && 'foo');\n}\n\n/**\n * A composite || and ||\n */\nfunction logical9a(\n    x: number,\n    y: string\n): number | string { // expected `: number | string | boolean`\n    return x || y || false;\n}\n\n/**\n * A composite || and ||\n */\nfunction logical9b(x: number, y: string): number | string {\n    return false || x || y;\n}\n\n/**\n * A composite || and ||\n */\nfunction logical9c(x: number, y: boolean): string {\n    return 'a' || x || y;\n}\n\n/**\n * A composite && and &&\n */\nfunction logical10a(\n    x: number,\n    y: string\n): number | string { // expected `: number | string | boolean`\n    return x && y && false;\n}\n\n/**\n * A composite && and &&\n */\nfunction logical10b(x: number, y: string): Array<any> { // expected `: boolean`\n    return false && x && y;\n}\n\n/**\n * A composite && and &&\n */\nfunction logical10c(x: number, y: string): Array<any> { // expected `number | boolean`\n    return x && false && y;\n}\n\n/**\n * || in a loop\n */\nfunction logical11a(): number {\n    var y = 1;\n    for (var x = 0; x < 5; x++) {\n        y = y || true;\n    }\n    return y;\n}\n\n/**\n * || in a loop\n */\nfunction logical11b(y: number): number {\n    for (var x = 0; x < 5; x++) {\n        y = y || true; // expected a number\n    }\n    return y;\n}\n\n/**\n * && in a loop\n */\nfunction logical12a(): number {\n    var y = 1;\n    var z = true;\n    for (var x = 0; x < 5; x++) {\n        y = z && y;\n        z = false;\n    }\n    return y;\n}\n\n/**\n * && in a loop\n */\nfunction logical12b(y: number): number {\n    for (var x = 0; x < 5; x++) {\n        y = y && true; // expected a number\n    }\n    return y;\n}\n\n/**\n * Complex &&\n */\nfunction logical13(x: number): Array<{x: string}> {\n    return [\n        {x: x && \"bar\"},\n        {x: true && \"bar\"},\n        {x: true && false},\n        {x: false && false},\n        {x: 1 && \"bar\"},\n        {x: \"foo\" && \"bar\"},\n        {x: \"foo\" && \"bar\"},\n        {x: \"foo\" && \"bar\"},\n    ];\n}\n\n/**\n * Complex ||\n */\nfunction logical14(x: number): Array<{x: string}> {\n    return [\n        {x: x || \"bar\"},\n        {x: false || \"bar\"},\n        {x: false || true},\n        {x: true || false},\n        {x: 0 || \"bar\"},\n        {x: \"foo\" || \"bar\"},\n        {x: \"foo\" || \"bar\"},\n        {x: \"foo\" || \"bar\"},\n    ];\n}\n\n/**\n * || in an addition\n */\nfunction logical15a(x: number): number {\n    return 5 + (x || 7);\n}\n\n/**\n * || in an addition\n */\nfunction logical15b(x: number): number {\n    return (x || 7) + 5;\n}\n\n/**\n * && in an addition\n */\nfunction logical15c(x: number): number {\n    return 5 + (x && 7);\n}\n\n/**\n * && in an addition\n */\nfunction logical15d(x: number): number {\n    return (x && 7) + 5;\n}\n\n/**\n * || in a comparison\n */\nfunction logical16a(x: number): boolean {\n    return 5 < (x || 7);\n}\n\n/**\n * || in a comparison\n */\nfunction logical16b(x: number): boolean {\n    return (x || 7) < 5;\n}\n\n/**\n * && in a comparison\n */\nfunction logical16c(x: number): boolean {\n    return 5 < (x && 7);\n}\n\n/**\n * && in a comparison\n */\nfunction logical16d(x: number): boolean {\n    return (x && 7) < 5;\n}\n\n/**\n * || in an equality\n */\nfunction logical17a(x: number): boolean {\n    return 5 == (x || 7);\n}\n\n/**\n * || in an equality\n */\nfunction logical17b(x: number): boolean {\n    return (x || 7) == 5;\n}\n\n/**\n * && in an equality\n */\nfunction logical17c(x: number): boolean {\n    return 5 == (x && 7);\n}\n\n/**\n * && in an equality\n */\nfunction logical17d(x: number): boolean {\n    return (x && 7) == 5;\n}\n\n/**\n * Expressions on each side that return truthy things\n */\nfunction logical18a(x: number, y: number): number {\n    return x - 1 || y - 1;\n}\n\n/**\n * Sentinel properties should not interfere\n */\nfunction logical18b(x: {a: number}, y: {b: number}): number {\n    return x.a - 1 || y.b - 1;\n}\n\n/**\n * Layer of indirection in the LHS (get prop)\n */\nfunction logical19a(x: { y: string, z: boolean }): boolean {\n  return (x.y && x.z); // error: x.y is a string\n}\nfunction logical19b(x: { y: string, z: boolean }): boolean {\n  return (x.y || x.z); // error: x.y is a string\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8711
}
```

### Printed

```javascript

function logical1a(): number {
  var x = false;
  return x && '\'123\'';
}
function logical1b(): string {
  var x = true;
  return x && '\'123\'';
}

function logical2a(): number {
  return false && '\'123\'';
}

function logical2b(): number {
  return 0 && '\'123\'';
}

function logical2c(): string {
  return "\"\"" && 123;
}

function logical2d(): string {
  return;
  true && '\'123\'';
}

function logical2e(): number {
  return '\'foo\'' && 123;
}

function logical2f(): string {
  return 123 && '\'foo\'';
}

function logical2g(): string {
  return [1, 2, 3] && '\'foo\'';
}

function logical2h(x: { a: number }): string {
  return x && '\'foo\'';
}

function logical2i(x: Object): string {
  return x && '\'foo\'';
}

function logical2j(x: (a: number) =>  number): string {
  return x && '\'foo\'';
}

function logical2k(x: Function): string {
  return x && '\'foo\'';
}

function logical3a(): string {
  var x: ? number = null;
  return x != null && x > 10;
}

function logical3b(): number {
  var x: ? number = null;
  return x != null && x;
}

function logical3c(): ? number {
  var x: ? number = null;
  return x != undefined && x;
}

function logical4(x: boolean): string {
  return x && '\'123\'';
}

function logical5a(): number {
  var x = false;
  return x || 0;
}

function logical5b(): number {
  var x: ? number = null;
  return x || 0;
}

function logical5c(): string {
  var x = true;
  return x || 0;
}

function logical6a(): string {
  return false || '\'123\'';
}

function logical6b(): string {
  return 0 || '\'123\'';
}

function logical6c(): number {
  return "\"\"" || 123;
}

function logical6d(): number {
  return;
  true || '\'123\'';
}

function logical6e(): string {
  return '\'foo\'' || 123;
}

function logical6f(): number {
  return 123 || '\'foo\'';
}

function logical7a(): number {
  var x: ? number = null;
  return x != null && x || 0;
}

function logical7b(x: boolean, y: number): number {
  return x && y || 0;
}

function logical7c(x: string): number {
  return x && 1 || 0;
}

function logical7d(x: number): string {
  return x && '\'foo\'' || '\'bar\'';
}

function logical7e(x: number): string {
  return false && x || '\'bar\'';
}

function logical8a(): number {
  var x = false;
  return (x || 0) && '\'foo\'';
}

function logical8b(): string {
  var x = false;
  return (x || 1) && '\'foo\'';
}

function logical8c(): string {
  var x = true;
  return (x || 1) && '\'foo\'';
}

function logical8d(): number {
  var x = false;
  return x || (0 && '\'foo\'');
}

function logical8e(): string {
  var x = false;
  return x || (1 && '\'foo\'');
}

function logical8f(): string {
  var x = true;
  return x || (1 && '\'foo\'');
}

function logical9a(x: number, y: string): number | string {
  return x || y || false;
}

function logical9b(x: number, y: string): number | string {
  return false || x || y;
}

function logical9c(x: number, y: boolean): string {
  return '\'a\'' || x || y;
}

function logical10a(x: number, y: string): number | string {
  return x && y && false;
}

function logical10b(x: number, y: string): Array<any> {
  return false && x && y;
}

function logical10c(x: number, y: string): Array<any> {
  return x && false && y;
}

function logical11a(): number {
  var y = 1;
  for (var x = 0; x++; x  < 5)
    {
      y = y || true;
    }
  return y;
}

function logical11b(y: number): number {
  for (var x = 0; x++; x  < 5)
    {
      y = y || true;
    }
  return y;
}

function logical12a(): number {
  var y = 1;
  var z = true;
  for (var x = 0; x++; x  < 5)
    {
      y = z && y;
      z = false;
    }
  return y;
}

function logical12b(y: number): number {
  for (var x = 0; x++; x  < 5)
    {
      y = y && true;
    }
  return y;
}

function logical13(x: number): Array<{ x: string }> {
  return [
    {x: x && "\"bar\""},
    {x: true && "\"bar\""},
    {x: true && false},
    {x: false && false},
    {x: 1 && "\"bar\""},
    {x: "\"foo\"" && "\"bar\""},
    {x: "\"foo\"" && "\"bar\""},
    {x: "\"foo\"" && "\"bar\""}
  ];
}

function logical14(x: number): Array<{ x: string }> {
  return [
    {x: x || "\"bar\""},
    {x: false || "\"bar\""},
    {x: false || true},
    {x: true || false},
    {x: 0 || "\"bar\""},
    {x: "\"foo\"" || "\"bar\""},
    {x: "\"foo\"" || "\"bar\""},
    {x: "\"foo\"" || "\"bar\""}
  ];
}

function logical15a(x: number): number {
  return 5 + (x || 7);
}

function logical15b(x: number): number {
  return (x || 7) + 5;
}

function logical15c(x: number): number {
  return 5 + (x && 7);
}

function logical15d(x: number): number {
  return (x && 7) + 5;
}

function logical16a(x: number): boolean {
  return 5  < (x || 7);
}

function logical16b(x: number): boolean {
  return (x || 7)  < 5;
}

function logical16c(x: number): boolean {
  return 5  < (x && 7);
}

function logical16d(x: number): boolean {
  return (x && 7)  < 5;
}

function logical17a(x: number): boolean {
  return 5 == (x || 7);
}

function logical17b(x: number): boolean {
  return (x || 7) == 5;
}

function logical17c(x: number): boolean {
  return 5 == (x && 7);
}

function logical17d(x: number): boolean {
  return (x && 7) == 5;
}

function logical18a(x: number, y: number): number {
  return x - 1 || y - 1;
}

function logical18b(x: { a: number }, y: { b: number }): number {
  return x.a - 1 || y.b - 1;
}

function logical19a(x: { y: string, z: boolean }): boolean {
  return (x.y && x.z);
}

function logical19b(x: { y: string, z: boolean }): boolean {
  return (x.y || x.z);
}

```

### Diagnostics

```javascript
✔ No errors
```

