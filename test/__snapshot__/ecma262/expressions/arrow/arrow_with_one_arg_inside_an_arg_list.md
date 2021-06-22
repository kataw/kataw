# Kataw parser test case

## Input

`````js
f(((a) => a + b)(1, 4), 5);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4,
                                                "end": 5
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 18
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 268435488,
                            "start": 2,
                            "end": 22
                        },
                        {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 25
                },
                "flags": 268435488,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "f(((a) => a + b)(1, 4), 5);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

f((() =>  a + b)(1, 4), 5);
```

### Diagnostics

```javascript
✔ No errors
```

