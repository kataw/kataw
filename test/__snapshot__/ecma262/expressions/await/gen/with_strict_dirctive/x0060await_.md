# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: `await;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; `await;
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
                "kind": 458761,
                "text": "await;",
                "rawText": "'use strict'",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "'use strict'; `await;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated template literal - start: 13, end: 21

```

