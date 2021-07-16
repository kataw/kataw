# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: delete
## Options

`````js
{}
`````
## Input

`````js
"use strict"; delete = x;
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
            "transformFlags": 0,
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 96,
                        "transformFlags": 8192,
                        "start": 13,
                        "end": 20
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 13,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; delete = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 22
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22

```

