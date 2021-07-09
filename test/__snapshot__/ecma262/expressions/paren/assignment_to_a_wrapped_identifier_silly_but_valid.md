# Kataw parser test case

## Input

`````js
(x) += 1;

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
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 6
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(x) += 1;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
(x) += 1;
```

### Diagnostics

```javascript
✔ No errors
```

