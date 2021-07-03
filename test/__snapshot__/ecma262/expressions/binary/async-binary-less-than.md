# Kataw parser test case

## Input

`````js
async <a > (x);

(async <a > (x));
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 0,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 96,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 10,
                    "start": 32,
                    "end": 14
                },
                "flags": 96,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 18,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 25,
                            "end": 26
                        },
                        "flags": 96,
                        "start": 15,
                        "end": 26
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 30,
                            "end": 31
                        },
                        "flags": 28,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 96,
                    "start": 15,
                    "end": 32
                },
                "flags": 15,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 15,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async <a > (x);\n\n(async <a > (x));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

async  < a > (x);
(async  < a > (x));

```

### Diagnostics

```javascript
✔ No errors
```

