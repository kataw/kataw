# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: do with unclosed block
> :: case: /)finally
## Input

`````js
do {} while (x) { /)finally
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 4,
                    "end": 4
                },
                "flags": 128,
                "start": 2,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 221,
                            "text": "/)finally",
                            "flags": 768,
                            "start": 17,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 27
            },
            "flags": 128,
            "start": 15,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "do {} while (x) { /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 17, end: 19
@{x2716}@ Unexpected token. - start: 27, end: 27

```

