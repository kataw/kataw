# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\do-while\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: class x {}
## Input

`````js
do class x {} while
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
                "start": 19,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "statement": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 2,
                    "end": 8
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 10,
                    "start": 32,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do class x {} while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class declarations cannot be used in a single-statement context - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 19, end: 19

```

