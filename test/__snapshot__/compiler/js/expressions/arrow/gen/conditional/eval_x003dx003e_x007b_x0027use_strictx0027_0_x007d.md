# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/gen/conditional
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
eval => { 'use strict'; 0 } , bar;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "eval => { 'use strict'; 0 } , bar;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 83976,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 4325406,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 4
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
                                            "start": 9,
                                            "end": 22
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 23
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
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 27
                    },
                    {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 34
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
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

