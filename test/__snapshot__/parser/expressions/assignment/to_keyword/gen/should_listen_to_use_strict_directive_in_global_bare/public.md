# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: public
## Options

`````js
{}
`````
## Input

`````js
"use strict"; public = x;
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
                    "text": "public",
                    "rawText": "public",
                    "flags": 96,
                    "start": 13,
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
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "start": 13,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; public = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 13, end: 20

```

