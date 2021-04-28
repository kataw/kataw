# Kataw parser test case

## Input

`````js
(x)=>{/x/}
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
                    "flags": 3,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    }
                ],
                "asyncToken": null,
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
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 128,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "(x)=>{/x/}",
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

