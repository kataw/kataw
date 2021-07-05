# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_while
> :: test: do while
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
do catch while
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
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 8,
                "end": 14
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "flags": 80,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do catch while",
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
✖ Missing an opening parentheses - '( - start: 9, end: 14

```

