# Kataw parser test case

## Input

`````js
async (x)=>{/x/}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 221,
                                "text": "/x/",
                                "flags": 768,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 15
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 12,
                    "end": 15
                },
                "flags": 256,
                "start": 11,
                "end": 16
            },
            "flags": 2304,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "async (x)=>{/x/}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

