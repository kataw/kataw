# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: extends
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (extends = x);
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
                    "rawText": "",
                    "flags": 64,
                    "start": 15,
                    "end": 15
                },
                "flags": 13,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "start": 24,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (extends = x);",
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
✖ Identifier expected - start: 15, end: 22
✖ Declaration or statement expected - start: 22, end: 24
✖ Expected a `;` - start: 26, end: 27

```

