# Kataw parser test case

## Input

`````js
let x = (y: any): ([a,[b]]) => {} => { };
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
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 147,
                                            "elementTypes": [
                                                {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 144,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 20,
                                                            "end": 21
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "flags": 2097152,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 147,
                                                        "elementTypes": [
                                                            {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 144,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 23,
                                                                        "end": 24
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 23,
                                                                    "end": 24
                                                                },
                                                                "flags": 2097152,
                                                                "start": 23,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 22,
                                                        "end": 25
                                                    },
                                                    "flags": 2097152,
                                                    "start": 22,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 27
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 27,
                                "end": 30
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 30,
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
            "end": 33
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "flags": 16,
            "start": 36,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 40,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "let x = (y: any): ([a,[b]]) => {} => { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 33, end: 36
✖ Expected a `;` - start: 33, end: 36

```

