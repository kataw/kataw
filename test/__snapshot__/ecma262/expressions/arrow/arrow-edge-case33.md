# Kataw parser test case

## Input

`````js
let x = (y: any): () => {} => { };
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
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 9,
                                "end": 26
                            },
                            "returnType": {
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
                                        "start": 19,
                                        "end": 19
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 23
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234353,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 26
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 26
                            },
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
                                "end": 33
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 33
            },
            "flags": 33554448,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "let x = (y: any): () => {} => { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

let x = (y: any) => {};

```

### Diagnostics

```javascript
✔ No errors
```

