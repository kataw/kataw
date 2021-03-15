# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\arrow\gen\conditional_last
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "bar, eval => { 'use strict'; 0 };",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 83976,
                        "typeParameters": null,
                        "arrowParameters": {
                            "kind": 81929,
                            "elements": [
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "eval",
                                        "rawText": "eval",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 9,
                                    "end": 9
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 9
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
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
                                            "start": 14,
                                            "end": 27
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 28
                                    },
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 32
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 32
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

