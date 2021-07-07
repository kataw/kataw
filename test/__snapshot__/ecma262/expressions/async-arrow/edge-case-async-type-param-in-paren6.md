# Kataw parser test case

## Input

`````js
(async <T, U>(x));
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 121,
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
                                "start": 1,
                                "end": 6
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 8
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 5120,
                            "start": 1,
                            "end": 9
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "flags": 13,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 16
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(async <T, U>(x));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
(async  < T, U > (x));
```

### Diagnostics

```javascript
✔ No errors
```

