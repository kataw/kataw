# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: [...this, y] = foo;
## Options

`````js
{}
`````
## Input

`````js
"use strict"; [...this, y] = foo;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "argument": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 22
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 13,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 13,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; [...this, y] = foo;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 26, end: 28

```

