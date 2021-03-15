# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
function isConstant(node) {
        switch (node.type) {
            case "SequenceExpression":
                return isConstant(node.expressions[node.expressions.length - 1]);
            // no default
        }
        return false;
    }

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function isConstant(node) {\n        switch (node.type) {\n            case \"SequenceExpression\":\n                return isConstant(node.expressions[node.expressions.length - 1]);\n            // no default\n        }\n        return false;\n    }\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "isConstant",
                "rawText": "isConstant",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 19
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "node",
                            "rawText": "node",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 20,
                            "end": 24
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
                        "start": 20,
                        "end": 24
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097362,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "node",
                                    "rawText": "node",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 48
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 53
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 53,
                                "period": {
                                    "kind": 255,
                                    "pos": 48,
                                    "end": 49
                                }
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [
                                    {
                                        "kind": 46,
                                        "expression": {
                                            "kind": 4261583,
                                            "text": "SequenceExpression",
                                            "rawText": "SequenceExpression",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 94
                                        },
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "isConstant",
                                                        "rawText": "isConstant",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 118,
                                                        "end": 129
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 67174980,
                                                                "member": {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "node",
                                                                        "rawText": "node",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 130,
                                                                        "end": 134
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "expressions",
                                                                        "rawText": "expressions",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 135,
                                                                        "end": 146
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 134,
                                                                    "end": 146,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 134,
                                                                        "end": 135
                                                                    }
                                                                },
                                                                "expression": {
                                                                    "kind": 65563,
                                                                    "left": {
                                                                        "kind": 67175096,
                                                                        "member": {
                                                                            "kind": 67175096,
                                                                            "member": {
                                                                                "kind": 196712,
                                                                                "text": "node",
                                                                                "rawText": "node",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 147,
                                                                                "end": 151
                                                                            },
                                                                            "expression": {
                                                                                "kind": 196711,
                                                                                "text": "expressions",
                                                                                "rawText": "expressions",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 152,
                                                                                "end": 163
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 151,
                                                                            "end": 163,
                                                                            "period": {
                                                                                "kind": 255,
                                                                                "pos": 151,
                                                                                "end": 152
                                                                            }
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "length",
                                                                            "rawText": "length",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 164,
                                                                            "end": 170
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 163,
                                                                        "end": 170,
                                                                        "period": {
                                                                            "kind": 255,
                                                                            "pos": 163,
                                                                            "end": 164
                                                                        }
                                                                    },
                                                                    "operator": "-",
                                                                    "right": {
                                                                        "kind": 4261540,
                                                                        "text": 1,
                                                                        "rawText": "1",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 172,
                                                                        "end": 174
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 147,
                                                                    "end": 174
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 146,
                                                                "end": 175
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 134,
                                                        "end": 176
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 129,
                                                    "end": 176
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 95,
                                                "end": 177
                                            }
                                        ],
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 177
                                    }
                                ],
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 213
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 213
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 4260391,
                                "text": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 228,
                                "end": 234
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 213,
                            "end": 235
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 235
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 241
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 241
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
    "end": 242
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

