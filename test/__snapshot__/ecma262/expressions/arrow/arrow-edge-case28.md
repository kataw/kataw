# Kataw parser test case

## Input

`````js
let x: () => void = () => {}
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
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 8
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 9,
                                    "end": 12
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 12,
                                        "end": 17
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 17
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
                                "start": 21,
                                "end": 21
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 22,
                                "end": 25
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 28
            },
            "flags": 33554448,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "let x: () => void = () => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

let x: () => void = () =>  { };

```

### Diagnostics

```javascript
✔ No errors
```

