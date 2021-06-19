# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: /**/ /x do while
## Options

`````js
{}
`````
## Input

`````js
do( /**/ /x do while while
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
                "rawText": "",
                "flags": 64,
                "start": 26,
                "end": 26
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 221,
                        "text": "/x do while while",
                        "flags": 96,
                        "start": 3,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 26
                },
                "flags": 16,
                "start": 2,
                "end": 26
            },
            "flags": 80,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "do( /**/ /x do while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 3, end: 26
✖ Expected a ')' to match the '(' token here - start: 9, end: 26

```

