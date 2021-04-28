# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: return with unclosed block
> :: case: try { !xxx
## Input

`````js
return {} return(x) { try { !xxx
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 9,
                "end": 16
            },
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 17,
                    "end": 18
                },
                "flags": 32,
                "start": 16,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 21,
                            "end": 25
                        },
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 32
                                        },
                                        "flags": 16,
                                        "start": 27,
                                        "end": 32
                                    }
                                ],
                                "multiLine": false,
                                "flags": 16,
                                "start": 27,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 32
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 16,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 32
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 21,
                "end": 32
            },
            "flags": 16,
            "start": 19,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "return {} return(x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ A return statement can only be used within a function_body - start: 9, end: 16

```

