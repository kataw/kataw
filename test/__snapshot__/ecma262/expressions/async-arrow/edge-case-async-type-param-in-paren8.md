# Kataw parser test case

## Input

`````js
(async  <T, U>(x) >> y - z);
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
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "flags": 14,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 17
                                },
                                "operatorToken": {
                                    "kind": 35141,
                                    "flags": 96,
                                    "transformFlags": 64,
                                    "start": 17,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 46,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 26
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(async  <T, U>(x) >> y - z);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

(async  < T, U > (x) >> y - z);
```

### Diagnostics

```javascript
✔ No errors
```

