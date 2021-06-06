# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: 0o465instanceof x
## Input

`````js
"use strict"; 0o465instanceof x
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
                "kind": 201392130,
                "text": 309,
                "rawText": "0o465i",
                "flags": 262240,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nstanceof",
                "rawText": "nstanceof",
                "flags": 96,
                "start": 20,
                "end": 29
            },
            "flags": 16,
            "start": 20,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; 0o465instanceof x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 13, end: 14
✖ Expected a `;` - start: 20, end: 29
✖ Expected a `;` - start: 29, end: 31

```

