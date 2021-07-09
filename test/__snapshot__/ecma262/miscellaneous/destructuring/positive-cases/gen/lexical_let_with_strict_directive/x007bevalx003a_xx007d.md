# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/lexical_let_with_strict_directive
> :: test: lexical let with strict directive
> :: case: {eval: x}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let {eval: x} = {};
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
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 27
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
                                "start": 31,
                                "end": 31
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 32
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "'use strict'; let {eval: x} = {};",
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
let { eval: x } = {};
```

### Diagnostics

```javascript
✔ No errors
```

