# Kataw parser test case

## Input

`````js
yield
/x/d
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
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "transformFlags": 32,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 97,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "yield\n/x/d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

yield / x / d;
```

### Diagnostics

```javascript
✔ No errors
```

