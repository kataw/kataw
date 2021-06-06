# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: typeof
## Input

`````js
"use strict"; (typeof = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "start": 13,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (typeof = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 23
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 21, end: 23

```

