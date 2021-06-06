# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: if (a) {} else x; else
## Input

`````js
"use strict"; if (a) {} else x; else
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
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 20,
                "end": 23
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 23,
                "end": 28
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "flags": 16,
                "start": 28,
                "end": 31
            },
            "flags": 16,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; if (a) {} else x; else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 31, end: 36

```

