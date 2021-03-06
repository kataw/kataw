# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: a = async function() { g(await) }
## Input

`````js
'use strict'; a = async function() { g(await) }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; a = async function() { g(await) }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "operator": "=",
                    "right": {
                        "kind": 9439250,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 34
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [
                                    {
                                        "kind": 2097233,
                                        "expression": {
                                            "kind": 66091,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 65559,
                                                        "expression": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 6,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 44,
                                                            "end": 44
                                                        },
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 32780,
                                                        "start": 39,
                                                        "end": 44
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "start": 44,
                                                "end": 45
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 45
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 45
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 45
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 47
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4,
                        "start": 17,
                        "end": 47
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 47
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 47
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 44,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

