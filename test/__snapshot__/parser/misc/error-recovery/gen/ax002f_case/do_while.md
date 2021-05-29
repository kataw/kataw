# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/misc/error-recovery/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\error-recovery\gen\ax002f_case
> :: test: a/ case
> :: case: do while
## Input

`````js
do while
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 8,
                    "end": 8
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "do while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 8, end: 8

```

