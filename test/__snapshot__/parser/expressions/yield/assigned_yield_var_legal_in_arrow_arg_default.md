# Kataw parser test case

## Input

`````js
async (x = z = yield) => {}
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
                "start": 21,
                "end": 24
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
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 12,
                            "end": 14
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 14,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 20
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
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 27
            },
            "flags": 288,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "async (x = z = yield) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

