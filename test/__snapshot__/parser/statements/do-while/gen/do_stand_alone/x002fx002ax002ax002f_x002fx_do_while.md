# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: /**/ /x do while
## Input

`````js
do /**/ /x do while
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
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 221,
                    "text": "/x do while",
                    "flags": 96,
                    "start": 2,
                    "end": 19
                },
                "flags": 16,
                "start": 2,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do /**/ /x do while",
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
✖ Unterminated regular expression - start: 2, end: 19
✖ Missing an opening parentheses - '( - start: 19, end: 19

```

