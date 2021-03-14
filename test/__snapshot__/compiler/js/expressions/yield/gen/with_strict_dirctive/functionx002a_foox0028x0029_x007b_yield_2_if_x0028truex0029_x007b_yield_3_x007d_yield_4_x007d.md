# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
## Input

`````js
'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; function* foo() { yield 2; if (true) { yield 3 }; yield 4 }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 23,
                "end": 27
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65785,
                                "delegate": false,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 31,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 40
                        },
                        {
                            "kind": 2097257,
                            "expression": {
                                "kind": 4260391,
                                "text": true,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 49
                            },
                            "consequent": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65785,
                                                "delegate": false,
                                                "expression": {
                                                    "kind": 4261540,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 16393,
                                                "start": 52,
                                                "end": 60
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 60
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 60
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 62
                            },
                            "alternate": null,
                            "isWebCompat": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 62
                        },
                        {
                            "kind": 6291526,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 62,
                            "end": 63
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65785,
                                "delegate": false,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 71
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 63,
                                "end": 71
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 71
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 71
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 73
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 13,
            "end": 73
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

