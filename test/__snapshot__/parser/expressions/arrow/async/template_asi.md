# Kataw parser test case

## Input

`````js
async x=>{}
`x`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 9,
                    "end": 11
                },
                "autofix": 0,
                "flags": 2304,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "rawText": "x",
                "text": "x",
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "async x=>{}\n`x`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

