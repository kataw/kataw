# Kataw parser test case

## Input

`````js
async (x = async([(f) = []])) => {};
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 96,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "flags": 18,
                                                        "start": 32,
                                                        "end": 21
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
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
                                                    "start": 18,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 18,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 268435490,
                            "start": 10,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 29
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 29,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 32,
                "end": 35
            },
            "flags": 290,
            "start": 0,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 35,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "async (x = async([(f) = []])) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

async (x = async([(f) = []])) => {}
```

### Diagnostics

```javascript
✔ No errors
```

