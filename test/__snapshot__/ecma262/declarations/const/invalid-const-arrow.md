# Kataw parser test case

## Input

`````js
const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;
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
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "start": 5,
                            "end": 8
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
                                                "kind": 292,
                                                "parameters": [
                                                    {
                                                        "kind": 284,
                                                        "ellipsisToken": null,
                                                        "name": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 96,
                                                                "start": 11,
                                                                "end": 18
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 9,
                                                            "end": 18
                                                        },
                                                        "optionalToken": null,
                                                        "types": null,
                                                        "flags": 2097152,
                                                        "start": 9,
                                                        "end": 18
                                                    },
                                                    {
                                                        "kind": 284,
                                                        "ellipsisToken": null,
                                                        "name": null,
                                                        "optionalToken": null,
                                                        "types": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 96,
                                                                "start": 19,
                                                                "end": 26
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 19,
                                                            "end": 26
                                                        },
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 26
                                                    },
                                                    {
                                                        "kind": 284,
                                                        "ellipsisToken": null,
                                                        "name": null,
                                                        "optionalToken": null,
                                                        "types": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 96,
                                                                "start": 26,
                                                                "end": 33
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 26,
                                                            "end": 33
                                                        },
                                                        "flags": 2097152,
                                                        "start": 26,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 9,
                                                "end": 33
                                            },
                                            "optionalToken": null,
                                            "types": null,
                                            "flags": 2097152,
                                            "start": 9,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 9,
                                    "end": 35
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 38
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "flags": 2097152,
                                    "start": 38,
                                    "end": 43
                                },
                                "flags": 2097152,
                                "start": 9,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 9,
                            "end": 43
                        },
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "o1",
                                        "rawText": "o1",
                                        "flags": 96,
                                        "start": 47,
                                        "end": 50
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "o2",
                                        "rawText": "o2",
                                        "flags": 96,
                                        "start": 51,
                                        "end": 54
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 47,
                                "end": 57
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 57,
                                "end": 60
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "o1",
                                "rawText": "o1",
                                "flags": 96,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 63
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 63
            },
            "flags": 33554448,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 27, end: 33

```

