# Kataw parser test case

## Input

`````js
async ()=>{}
{x}
`````

## Output

### CST

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
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "parameters": [],
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
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "flags": 288,
            "start": 0,
            "end": 12
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 15
            },
            "flags": 16,
            "start": 12,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async ()=>{}\n{x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

