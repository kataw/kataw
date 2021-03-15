# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export var a;
export function b() {}
export class C {}

export enum D {}
export namespace E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export var a;\nexport function b() {}\nexport class C {}\n\nexport enum D {}\nexport namespace E {}",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 16627,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 10,
                                "end": 12
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 10,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 12
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "b",
                    "rawText": "b",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 29,
                    "end": 31
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 33
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 36
                },
                "typeParameters": null,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 256,
                "start": 20,
                "end": 36
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 36
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 49,
                    "end": 51
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 53,
                    "end": 54
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 43,
                "end": 54
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 36,
            "end": 54
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "D",
                "rawText": "D",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 67,
                "end": 69
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 71,
                "end": 71
            },
            "isConst": false,
            "flags": 32832,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 62,
            "end": 72
        },
        {
            "kind": 2105597,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 89,
                "end": 91
            },
            "body": {
                "kind": 2105596,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 93,
                "end": 93
            },
            "flags": 64,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 79,
            "end": 94
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 56,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 73,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

