# Kataw parser test case

## Input

`````js
() => a + b - yield / 1
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
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 13,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "() => a + b - yield / 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

() => a + b - yield / 1;

```

### Diagnostics

```javascript
✔ No errors
```

