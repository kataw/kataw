# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: let x; strubg
## Options

`````js
{}
`````
## Input

`````js
"use strict"; let x; strubg
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "strubg",
                "rawText": "strubg",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; let x; strubg",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

"\"use strict\"";
let x;
strubg;

```

### Diagnostics

```javascript
✔ No errors
```

