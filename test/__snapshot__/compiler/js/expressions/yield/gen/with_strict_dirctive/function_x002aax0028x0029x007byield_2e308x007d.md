# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function *a(){yield 2e308}
## Input

`````js
'use strict'; function *a(){yield 2e308}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; function *a(){yield 2e308}",
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
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 24,
                "end": 25
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 27
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
                                    "text": null,
                                    "rawText": "2e308",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 16393,
                                "start": 28,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 39
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 40
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 13,
            "end": 40
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
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

