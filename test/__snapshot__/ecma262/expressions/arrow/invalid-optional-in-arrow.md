# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
([...x?:b]) => x;

([...[a]?:b]) => x;
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "left": {
                                            "kind": 197,
                                            "shortCircuit": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "questionToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "consequent": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "alternate": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "flags": 96,
                                            "start": 5,
                                            "end": 9
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "start": 2,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 11
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 34,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "left": {
                                            "kind": 197,
                                            "shortCircuit": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 26
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "questionToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "consequent": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "alternate": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "start": 21,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 21,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 20,
                    "end": 32
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 32,
                    "end": 35
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 35,
                    "end": 37
                },
                "flags": 34,
                "start": 17,
                "end": 37
            },
            "flags": 16,
            "start": 17,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "([...x?:b]) => x;\n\n([...[a]?:b]) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 7, end: 8
✖ The left hand side of the arrow is not destructible  - start: 11, end: 14
✖ Identifier expected - start: 28, end: 29
✖ The left hand side of the arrow is not destructible  - start: 32, end: 35

```

