# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: s = {foo: yield /x/g}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; s = {foo: yield /x/g}
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
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 29
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 32
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 19,
                                    "end": 34
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 19,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 34
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 17,
                    "end": 35
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; s = {foo: yield /x/g}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

"\"use strict\"";
s = { foo: yield / x / g };
```

### Diagnostics

```javascript
✔ No errors
```

