# Kataw parser test case

## Input

`````js
let x = (y: any): (a | b) => {};
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
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 25,
                                "end": 28
                            },
                            "typeParameters": null,
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
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 17,
                                                "end": 20
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 22,
                                                "end": 24
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 25
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 33554448,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "let x = (y: any): (a | b) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

let x = (y) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

