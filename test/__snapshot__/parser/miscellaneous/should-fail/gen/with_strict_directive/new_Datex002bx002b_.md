# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: new Date++;
## Input

`````js
"use strict"; new Date++;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 64,
                    "start": 22,
                    "end": 24
                },
                "operand": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 13,
                        "end": 17
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Date",
                        "rawText": "Date",
                        "flags": 96,
                        "start": 17,
                        "end": 22
                    },
                    "argumentList": null,
                    "flags": 96,
                    "start": 13,
                    "end": 22
                },
                "flags": 32,
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "start": 13,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; new Date++;",
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
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 22, end: 24

```

