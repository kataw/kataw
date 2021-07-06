# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (instanceof = x);
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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 25
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 15,
                        "end": 25
                    },
                    "flags": 13,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 25
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 30,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (instanceof = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 25
✖ Identifier expected - start: 25, end: 27
✖ Expected a `;` - start: 29, end: 30

```

