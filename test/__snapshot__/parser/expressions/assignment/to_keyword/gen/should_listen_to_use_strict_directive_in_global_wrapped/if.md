# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: if
## Input

`````js
"use strict"; (if = x);
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
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 15,
                    "end": 15
                },
                "flags": 32,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 15
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 15,
                "end": 17
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 17,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "start": 17,
                "end": 21
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 22,
                "end": 23
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 15,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (if = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 17
✖ Missing an opening parentheses - '( - start: 17, end: 19
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 19

```

