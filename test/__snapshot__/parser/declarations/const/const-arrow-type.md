# Kataw parser test case

## Input

`````js
const fn = async (a?: any): Promise<void> => {};
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
                "flags": 0,
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
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 41,
                                "end": 44
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234252,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 18,
                                    "end": 25
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 10,
                                "end": 16
                            },
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Promise",
                                        "rawText": "Promise",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 35
                                    },
                                    "typeParameters": {
                                        "kind": 146,
                                        "types": [
                                            {
                                                "kind": 138477615,
                                                "flags": 64,
                                                "start": 36,
                                                "end": 40
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 35,
                                        "end": 41
                                    },
                                    "flags": 0,
                                    "start": 27,
                                    "end": 41
                                },
                                "flags": 0,
                                "start": 26,
                                "end": 41
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 44,
                                "end": 47
                            },
                            "flags": 288,
                            "start": 10,
                            "end": 47
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 47
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 47
            },
            "flags": 33554448,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "const fn = async (a?: any): Promise<void> => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

const fn = async (a?) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

