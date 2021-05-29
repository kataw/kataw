# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: s
> :: test: do parens
> :: case: /)finally
## Input

`````js
do( /)finally while
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
                    "kind": 121,
                    "expression": {
                        "kind": 221,
                        "text": "/)finally while",
                        "flags": 96,
                        "start": 3,
                        "end": 19
                    },
                    "flags": 32,
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
    "source": "do( /)finally while",
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
✖ Unterminated regular expression - start: 3, end: 19
✖ Expected a ')' to match the '(' token here - start: 19, end: 19

```

