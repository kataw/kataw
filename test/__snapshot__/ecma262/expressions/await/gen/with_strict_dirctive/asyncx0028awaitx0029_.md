# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async(await);
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async(await);
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
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 268435488,
            "transformFlags": 1,
            "start": 13,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "'use strict'; async(await);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

"'use strict'";
async(await)
```

### Diagnostics

```javascript
✔ No errors
```

