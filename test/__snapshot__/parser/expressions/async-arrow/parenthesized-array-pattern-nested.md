# Kataw parser test case

## Input

`````js
async ([ [(a)] = [] ] = []) => {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 27,
                "end": 30
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 12
                                                    },
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 23,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 26
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
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
            "flags": 290,
            "start": 0,
            "end": 33
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 33,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async ([ [(a)] = [] ] = []) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

async ([[(a)] = []] = []) =>  {}

```

### Diagnostics

```javascript
✔ No errors
```

