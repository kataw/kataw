# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (import = x);
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
                "kind": 121,
                "expression": {
                    "kind": 206,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 26
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (import = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 26, end: 27

```

