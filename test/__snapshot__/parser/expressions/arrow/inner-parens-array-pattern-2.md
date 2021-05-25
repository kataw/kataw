# Kataw parser test case

## Input

`````js
([ [(a)] = [] ] = []) => {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 21,
                    "end": 24
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
                                                            "start": 5,
                                                            "end": 6
                                                        },
                                                        "flags": 32,
                                                        "start": 4,
                                                        "end": 7
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 4,
                                                "end": 7
                                            },
                                            "flags": 32,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 20
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 27
                },
                "flags": 34,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "([ [(a)] = [] ] = []) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

([[(a)] = []] = []) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

