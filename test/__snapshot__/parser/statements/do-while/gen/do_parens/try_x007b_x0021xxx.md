# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: try { !xxx
## Input

`````js
do( try { !xxx while
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
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 256,
                "start": 7,
                "end": 9
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 3
                },
                "flags": 128,
                "start": 2,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "xxx",
                    "rawText": "xxx",
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "flags": 256,
                "start": 9,
                "end": 14
            },
            "flags": 128,
            "start": 9,
            "end": 14
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 20,
                    "end": 20
                },
                "flags": 128,
                "start": 20,
                "end": 20
            },
            "flags": 128,
            "start": 14,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "do( try { !xxx while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 3, end: 7
@{x2716}@ Unexpected token. - start: 3, end: 7
@{x2716}@ Unexpected token. - start: 3, end: 7
@{x2716}@ Unexpected token. - start: 3, end: 7
@{x2716}@ Unexpected token. - start: 7, end: 9
@{x2716}@ Unexpected token. - start: 9, end: 11
@{x2716}@ Unexpected token. - start: 9, end: 11
@{x2716}@ Unexpected token. - start: 14, end: 20
@{x2716}@ Unexpected token. - start: 20, end: 20
@{x2716}@ Expression expected - start: 20, end: 20
@{x2716}@ Unexpected token. - start: 20, end: 20
@{x2716}@ Expression expected - start: 20, end: 20

```

