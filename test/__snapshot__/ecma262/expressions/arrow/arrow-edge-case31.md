# Kataw parser test case

## Input

`````js
let x: (this: any) => void = () => {}
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
                                    "start": 18,
                                    "end": 21
                                },
                                "arrowToken": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234252,
                                                    "flags": 2097216,
                                                    "start": 13,
                                                    "end": 17
                                                },
                                                "flags": 2097152,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "flags": 2097152,
                                            "start": 6,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 6,
                                    "end": 17
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 21,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 21,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 6,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 26
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
                                "start": 31,
                                "end": 34
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 28,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 37
            },
            "flags": 33554448,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "let x: (this: any) => void = () => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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

