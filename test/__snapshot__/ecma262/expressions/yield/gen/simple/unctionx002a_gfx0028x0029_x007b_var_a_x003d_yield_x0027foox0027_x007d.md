# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: unction* gf() { var a = yield 'foo'; }
## Options

`````js
{}
`````
## Input

`````js
unction* gf() { var a = yield 'foo'; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 7,
                    "end": 8
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "gf",
                        "rawText": "gf",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 8,
                    "end": 13
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
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
                            "start": 15,
                            "end": 19
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
                                        "start": 19,
                                        "end": 21
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 19,
                                    "end": 29
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 29
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 29
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "foo",
                            "rawText": "'foo'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 29,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "unction* gf() { var a = yield 'foo'; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 15
✖ ',' expected - start: 29, end: 35
✖ Expected a `;` - start: 29, end: 35

```

