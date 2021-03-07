# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\gen\condiional_paren_middle
> :: test: condiional_paren_middle
> :: case: x => { return x; }
## Input

`````js
bar ? (x => { return x; }) : baz;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "bar ? (x => { return x; }) : baz;",
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
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
                                        "end": 8
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 23
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 23
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 25
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 25
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 26
                    },
                    "alternate": {
                        "kind": 196712,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 32
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

