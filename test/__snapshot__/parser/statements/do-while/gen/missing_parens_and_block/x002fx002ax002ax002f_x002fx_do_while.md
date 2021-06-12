# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: /**/ /x do while
## Options

`````js
{}
`````
## Input

`````js
do /**/ /x do while while
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
                "start": 25,
                "end": 25
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 221,
                    "text": "/x do while while",
                    "flags": 96,
                    "start": 2,
                    "end": 25
                },
                "flags": 16,
                "start": 2,
                "end": 25
            },
            "flags": 80,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "do /**/ /x do while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 2, end: 25
✖ Missing an opening parentheses - '( - start: 25, end: 25

```

