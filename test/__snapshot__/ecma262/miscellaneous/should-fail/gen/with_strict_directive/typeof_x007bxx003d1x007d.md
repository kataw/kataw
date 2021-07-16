# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: typeof {x=1}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; typeof {x=1}
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
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 96,
                    "transformFlags": 8192,
                    "start": 13,
                    "end": 20
                },
                "operand": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 301,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 25
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 20,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; typeof {x=1}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 26, end: 26

```

