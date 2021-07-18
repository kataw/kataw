# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_bare
> :: test: should listen to use strict directive in global bare
> :: case: debugger
## Options

`````js
{}
`````
## Input

`````js
"use strict"; debugger = x;
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
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; debugger = x;",
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
✖ '=' is not allowed here. Did you mean ';'? - start: 22, end: 24

```

