# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
async <T, U>(x)
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 5120,
                        "start": 0,
                        "end": 8
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "U",
                            "rawText": "U",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 9,
                        "end": 15
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "async <T, U>(x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
async  < T, U > (x);
```

### Diagnostics

```javascript
✔ No errors
```

