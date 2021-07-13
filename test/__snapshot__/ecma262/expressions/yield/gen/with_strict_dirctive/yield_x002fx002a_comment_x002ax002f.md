# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield /* comment */
## Options

`````js
{}
`````
## Input

`````js
'use strict'; yield /* comment */
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

"'use strict'";
yield; /* comment */
```

### Diagnostics

```javascript
✔ No errors
```

