# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in arrow head
> :: case: this
## Input

`````js
([ this ]) => {}
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
                    "flags": 10,
                    "start": 0,
                    "end": 13
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 135,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    }
                ],
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
                        "start": 15,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "([ this ]) => {}",
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
✖ The left hand side of the arrow is not destructible  - start: 10, end: 13

```

