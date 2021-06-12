# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: do
## Input

`````js
"use strict"; do = x;
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
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 21,
                "end": 21
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 16,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 20
                },
                "flags": 16,
                "start": 16,
                "end": 21
            },
            "flags": 80,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; do = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 16, end: 18
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
✖ Missing an opening parentheses - '( - start: 21, end: 21

```

