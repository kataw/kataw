# Kataw parser test case

## Input

`````js
() => {} 1
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 32,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "() => {} 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

