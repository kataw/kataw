# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: /**/ /x do while
## Input

`````js
do[ /**/ /x do while
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
                "start": 20,
                "end": 20
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 221,
                                "text": "/x do while",
                                "flags": 96,
                                "start": 3,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097184,
                        "start": 3,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 20
                },
                "flags": 16,
                "start": 2,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do[ /**/ /x do while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 3, end: 10
✖ ',' expected - start: 20, end: 20
✖ Did you forgot a ']' to match the `[` token? - start: 20, end: 20

```

