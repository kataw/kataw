# Kataw parser test case

## Input

`````js
let x: (y) => void = () => {}
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
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
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 8,
                                                    "end": 9
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 6,
                                                "end": 9
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "start": 6,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 6,
                                    "end": 10
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 13
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 18
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 18
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 22,
                                "end": 22
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 23,
                                "end": 26
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 29
            },
            "flags": 33554448,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "let x: (y) => void = () => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

let x: (y) => void = () => {};

```

### Diagnostics

```javascript
✔ No errors
```

