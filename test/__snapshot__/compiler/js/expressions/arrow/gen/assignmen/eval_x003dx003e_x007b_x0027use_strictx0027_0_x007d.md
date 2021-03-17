# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/gen/assignmen
> :: test: assignmen
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
x = eval => { 'use strict'; 0 } ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = eval => { 'use strict'; 0 } ;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 83976,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 4325406,
                        "text": "eval",
                        "rawText": "eval",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 8
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
                                        "start": 13,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 27
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
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 29
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 31
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 31
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

