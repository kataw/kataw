# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\gen\conditional_paren
> :: test: conditional_paren
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? baz : ( eval => { 'use strict'; 0 } );
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "bar ? baz : ( eval => { 'use strict'; 0 } );",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "consequent": {
                    "kind": 196712,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "alternate": {
                    "kind": 66224,
                    "expression": {
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
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 11,
                                    "end": 18
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 18
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
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 36
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 37
                                    },
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 39
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

