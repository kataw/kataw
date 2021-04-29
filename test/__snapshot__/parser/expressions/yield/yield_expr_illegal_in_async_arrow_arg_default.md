# Kataw parser test case

## Input

`````js
async (x = yield y) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 19,
                "end": 22
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 8,
                        "end": 10
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 16
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "start": 22,
                "end": 25
            },
            "flags": 290,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "async (x = yield y) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

