# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: false
## Input

`````js
do false
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
                "kind": 120,
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 80,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "do false",
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

