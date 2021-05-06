# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
(1) = (y) = x
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
                    "kind": 121,
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(1) = (y) = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 3, end: 5

```

