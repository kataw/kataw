# Kataw parser test case

## Input

`````js
var v = a => <any><any>{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 9,
                                "end": 12
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "operatorToken": {
                                                "kind": 536971330,
                                                "flags": 96,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "any",
                                                "rawText": "any",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 17
                                            },
                                            "flags": 32,
                                            "start": 12,
                                            "end": 17
                                        },
                                        "operatorToken": {
                                            "kind": 34883,
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 18,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 18
                                    },
                                    "operatorToken": {
                                        "kind": 536971330,
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "any",
                                        "rawText": "any",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 22
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 96,
                                    "start": 22,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 48,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "var v = a => <any><any>{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 14
✖ Identifier expected - start: 18, end: 19

```

