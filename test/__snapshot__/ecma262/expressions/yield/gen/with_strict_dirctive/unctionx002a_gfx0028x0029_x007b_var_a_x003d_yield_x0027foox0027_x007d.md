# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: unction* gf() { var a = yield 'foo'; }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; unction* gf() { var a = yield 'foo'; }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 21,
                    "end": 22
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "gf",
                        "rawText": "gf",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 25
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 22,
                    "end": 27
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 13,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 27
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 33
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 33,
                                    "end": 43
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 43
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "foo",
                            "rawText": "'foo'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 43,
                        "end": 50
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "'use strict'; unction* gf() { var a = yield 'foo'; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 27, end: 29
✖ Variable declaration not allowed at this location - start: 43, end: 49
✖ Expected a `;` - start: 43, end: 49

```

