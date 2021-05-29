# Kataw parser test case

## Input

`````js
async g => (x = [await y])
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
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 17,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 26
                },
                "flags": 288,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "async g => (x = [await y])",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

async g =>  (x = [await y]);
```

### Diagnostics

```javascript
✔ No errors
```

