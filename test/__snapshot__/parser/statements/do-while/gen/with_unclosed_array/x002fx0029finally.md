# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: /)finally
## Input

`````js
do[ /)finally
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
                "start": 13,
                "end": 13
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
                                "text": "/)finally",
                                "flags": 96,
                                "start": 3,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097184,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "do[ /)finally",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 3, end: 13
✖ ',' expected - start: 13, end: 13

```

