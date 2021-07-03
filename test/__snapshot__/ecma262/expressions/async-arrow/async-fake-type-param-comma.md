# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
async <(T, U)>y
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
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                {
                                    "kind": 134299649,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "flags": 32,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 7,
                        "start": 32,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 39,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "async <(T, U)>y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

async  < (T, U) > y;

```

### Diagnostics

```javascript
✔ No errors
```

