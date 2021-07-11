# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: protected
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (protected = x);
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
                        "kind": 134299649,
                        "text": "protected",
                        "rawText": "protected",
                        "flags": 96,
                        "start": 15,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "flags": 16,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (protected = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 15, end: 24

```

