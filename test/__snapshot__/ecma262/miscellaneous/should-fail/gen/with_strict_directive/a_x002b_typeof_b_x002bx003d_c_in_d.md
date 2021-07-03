# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: a + typeof b += c in d
## Options

`````js
{}
`````
## Input

`````js
"use strict"; a + typeof b += c in d
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 96,
                        "start": 17,
                        "end": 24
                    },
                    "operand": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 26
                },
                "flags": 96,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 31,
                    "end": 34
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "flags": 96,
                "start": 29,
                "end": 36
            },
            "flags": 16,
            "start": 29,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; a + typeof b += c in d",
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
✖ Expected a `;` - start: 26, end: 29

```

