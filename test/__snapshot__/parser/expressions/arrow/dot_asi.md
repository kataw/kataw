# Kataw parser test case

## Input

`````js
()=>{}
.x
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
                "kind": 129,
                "member": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 2,
                        "end": 4
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
                            "flags": 256,
                            "start": 5,
                            "end": 5
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 8,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "()=>{}\n.x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 27,
            "error": "Block body arrows can not be immediately accessed without a group",
            "start": 6,
            "end": 8
        }
    ],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

