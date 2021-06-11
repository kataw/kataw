# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (continue = x);
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
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 15,
                "end": 23
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 15,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "start": 25,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 28,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (continue = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 23
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 15, end: 23
✖ Identifier expected - start: 23, end: 25
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 15, end: 25
✖ Expected a `;` - start: 27, end: 28

```

