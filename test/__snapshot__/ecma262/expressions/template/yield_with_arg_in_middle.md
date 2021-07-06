# Kataw parser test case

## Input

`````js
x = `1 ${ yield x } 2`
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "1 ",
                            "text": "1 ",
                            "expression": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 15
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " } 2",
                        "rawText": " } 2",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "x = `1 ${ yield x } 2`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
x = `1 ${yield} } 2`;
```

### Diagnostics

```javascript
✔ No errors
```

