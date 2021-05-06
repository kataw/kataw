# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do triple
> :: case: /**/ /x do while
## Input

`````js
do do do /**/ /x do while while while while
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 43,
                "end": 43
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 43,
                    "end": 43
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 43,
                        "end": 43
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 221,
                            "text": "/x do while while while while",
                            "flags": 96,
                            "start": 8,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 43
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 43
                },
                "flags": 16,
                "start": 2,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "do do do /**/ /x do while while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

do do do/**/  /x do while while while while;
     ();
   ();
 ();
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 8, end: 15
✖ Expression expected - start: 43, end: 43

```

