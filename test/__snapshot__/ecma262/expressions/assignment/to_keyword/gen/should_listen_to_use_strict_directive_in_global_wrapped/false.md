# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (false = x);
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
                        "kind": 205586437,
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 25
            },
            "flags": 16,
            "start": 13,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (false = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22

```

