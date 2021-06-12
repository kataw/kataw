# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: catch try {
## Input

`````js
do catch try {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 8,
                "end": 8
            },
            "whileKeyword": null,
            "statement": {
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 16,
                    "start": 2,
                    "end": 2
                },
                "catchClause": {
                    "kind": 173,
                    "catchKeyword": {
                        "kind": 4202575,
                        "flags": 80,
                        "start": 2,
                        "end": 8
                    },
                    "catchParameter": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 80,
                    "start": 2,
                    "end": 8
                },
                "finallyKeyword": null,
                "finallyBlock": null,
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 80,
            "start": 0,
            "end": 8
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 8,
                "end": 12
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 12,
                "end": 14
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do catch try {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 8, end: 12
✖ The parser expected to find a '}' to match the '{' token here - start: 14, end: 14

```

