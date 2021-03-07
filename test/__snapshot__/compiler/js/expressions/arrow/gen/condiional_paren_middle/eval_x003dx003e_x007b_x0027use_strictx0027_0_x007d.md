# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\gen\condiional_paren_middle
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "bar ? (eval => { 'use strict'; 0 }) : baz;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                        "kind": 66224,
                        "expression": {
                            "kind": 67592,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 65545,
                                "elements": [
                                    {
                                        "kind": 89,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 11
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
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 11
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
                                                "flags": 16777216,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 29
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 30
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
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 32
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 34
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 34
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 35
                    },
                    "alternate": {
                        "kind": 196712,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 42
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

