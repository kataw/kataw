# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
([(x).foo,] = x)
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
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "flags": 2,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "flags": 34,
                                    "transformFlags": 2,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": true,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": true,
    "source": "([(x).foo,] = x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

([(x).foo,] = x);
```

### Diagnostics

```javascript
✔ No errors
```

