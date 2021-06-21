# Kataw parser test case

## Input

`````js
const f = (x?, y?:Object = {}) => {}
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 9,
                                    "end": 13
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "Object",
                                                "rawText": "Object",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 24
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "flags": 48,
                                        "start": 26,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 29
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 36
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 36
            },
            "flags": 33554448,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "const f = (x?, y?:Object = {}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

const f = (x?, y? = {}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

