# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
"use strict"; instanceof = x;
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
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 24
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; instanceof = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 13, end: 24
✖ Identifier expected - start: 24, end: 26

```

