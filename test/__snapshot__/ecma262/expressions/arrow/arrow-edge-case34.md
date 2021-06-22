# Kataw parser test case

## Input

`````js
let x = (y: any): ([,[b]]) => {} => { };
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
                                "end": 24
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 147,
                                                        "elementTypes": [],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 20
                                                    },
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "optionalToken": null,
                                                "types": null,
                                                "flags": 2097152,
                                                "start": 17,
                                                "end": 20
                                            },
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": null,
                                                "optionalToken": null,
                                                "types": {
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
                                                                    "typeName": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "start": 22,
                                                                        "end": 23
                                                                    },
                                                                    "typeParameters": null,
                                                                    "flags": 2097152,
                                                                    "start": 22,
                                                                    "end": 23
                                                                },
                                                                "flags": 2097152,
                                                                "start": 22,
                                                                "end": 23
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 21,
                                                        "end": 24
                                                    },
                                                    "flags": 2097152,
                                                    "start": 21,
                                                    "end": 24
                                                },
                                                "flags": 2097152,
                                                "start": 21,
                                                "end": 24
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "arrowToken": null,
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 24,
                                                "end": 24
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 2097152,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 24
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 24
                            },
                            "arrowToken": null,
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 31,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 32
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 37,
                "end": 37
            },
            "flags": 16,
            "start": 35,
            "end": 39
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 39,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "let x = (y: any): ([,[b]]) => {} => { };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 24, end: 25
✖ ',' expected - start: 24, end: 25
✖ Declaration or statement expected - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 29
✖ Declaration or statement expected - start: 32, end: 35

```

