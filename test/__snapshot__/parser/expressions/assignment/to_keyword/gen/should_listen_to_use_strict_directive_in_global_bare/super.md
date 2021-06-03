# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: super
## Input

`````js
"use strict"; super = x;
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
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 96,
                            "start": 13,
                            "end": 19
                        },
                        "flags": 96,
                        "start": 13,
                        "end": 19
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 536870944,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; super = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 13, end: 21
✖ Dot property must be an identifier - start: 19, end: 21
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 19, end: 21

```

