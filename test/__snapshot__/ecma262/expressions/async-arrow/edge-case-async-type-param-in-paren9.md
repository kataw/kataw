# Kataw parser test case

## Input

`````js
(async  < T, U > (x));
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
                                "end": 9
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 1,
                            "end": 11
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 19
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 20
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(async  < T, U > (x));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
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

