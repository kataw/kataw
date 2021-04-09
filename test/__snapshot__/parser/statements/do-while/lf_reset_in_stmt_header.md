# Kataw parser test case

## Input

`````js
do
  if(x=>{});
while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 22,
                "end": 23
            },
            "statement": {
                "kind": 164,
                "expression": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 8,
                        "end": 9
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 12,
                            "end": 12
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 13
                },
                "consequent": {
                    "kind": 168,
                    "autofix": 0,
                    "flags": 128,
                    "start": 14,
                    "end": 15
                },
                "alternate": null,
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "do\n  if(x=>{});\nwhile(y)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

