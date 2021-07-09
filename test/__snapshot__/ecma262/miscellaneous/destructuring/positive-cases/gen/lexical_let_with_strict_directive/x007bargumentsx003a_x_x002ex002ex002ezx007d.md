# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/lexical_let_with_strict_directive
> :: test: lexical let with strict directive
> :: case: {arguments: x, ...z}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let {arguments: x, ...z} = {};
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "arguments",
                                            "rawText": "arguments",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 28
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 31
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 36
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 32,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 37
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 38
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 40,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 43
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "'use strict'; let {arguments: x, ...z} = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

"'use strict'";
let { arguments: x, ...z } = {};
```

### Diagnostics

```javascript
✔ No errors
```

