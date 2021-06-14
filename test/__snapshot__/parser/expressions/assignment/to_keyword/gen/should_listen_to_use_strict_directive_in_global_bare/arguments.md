# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: arguments
## Options

`````js
{}
`````
## Input

`````js
"use strict"; arguments = x;
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
                    "kind": 134299649,
                    "text": "arguments",
                    "rawText": "arguments",
                    "flags": 96,
                    "start": 13,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 25,
                    "end": 27
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "flags": 16,
            "start": 13,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; arguments = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 23, end: 25

```

