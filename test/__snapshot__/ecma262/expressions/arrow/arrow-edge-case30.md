# Kataw parser test case

## Input

`````js
let x: (this) => void = () => {}
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
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 16
                                },
                                "arrowToken": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "this",
                                        "rawText": "this",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 6,
                                    "end": 12
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 6,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 21
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 26,
                                "end": 29
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 32
            },
            "flags": 33554448,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "let x: (this) => void = () => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

let x:  = () =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

