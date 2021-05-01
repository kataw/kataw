# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x/g}) => x
`````

## Output

### Hybrid CST

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
                    "start": 25,
                    "end": 28
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 10,
                                                            "end": 13
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 18
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 18
                                                },
                                                "flags": 32,
                                                "start": 8,
                                                "end": 19
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 64,
                                                "start": 19,
                                                "end": 20
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "flags": 32,
                                            "start": 2,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 23
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ident",
                                        "rawText": "ident",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 24
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 34,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar]/x/g}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 25, end: 28

```

