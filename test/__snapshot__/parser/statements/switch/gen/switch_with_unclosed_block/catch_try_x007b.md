# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: catch try {
## Input

`````js
switch {} default(x) { catch try {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
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
                "flags": 256,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 768,
                            "start": 9,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 128,
                                "start": 17,
                                "end": 20
                            },
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "tryKeyword": null,
                                            "block": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 28,
                                                    "end": 28
                                                },
                                                "flags": 128,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "flags": 128,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "flags": 128,
                                            "start": 22,
                                            "end": 34
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 22,
                                    "end": 34
                                },
                                "flags": 128,
                                "start": 20,
                                "end": 34
                            }
                        ],
                        "flags": 128,
                        "start": 9,
                        "end": 34
                    }
                ],
                "flags": 128,
                "start": 9,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { catch try {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 8
@{x2716}@ Unexpected token. - start: 9, end: 17
@{x2716}@ Unexpected token. - start: 9, end: 17
@{x2716}@ Unexpected token. - start: 17, end: 18
@{x2716}@ Unexpected token. - start: 20, end: 22
@{x2716}@ Unexpected token. - start: 22, end: 28
@{x2716}@ Unexpected token. - start: 28, end: 32
@{x2716}@ Unexpected token. - start: 28, end: 32
@{x2716}@ Unexpected token. - start: 34, end: 34
@{x2716}@ Unexpected token. - start: 34, end: 34
@{x2716}@ Unexpected token. - start: 34, end: 34

```

