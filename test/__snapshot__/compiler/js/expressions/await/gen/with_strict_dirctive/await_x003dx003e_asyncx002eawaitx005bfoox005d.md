# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: await => async.await[foo]
## Input

`````js
'use strict'; await => async.await[foo]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; await => async.await[foo]",
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
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 19
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
                                "start": 19,
                                "end": 19
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 19
                    },
                    "contents": {
                        "kind": 66116,
                        "member": {
                            "kind": 66232,
                            "member": {
                                "kind": 196712,
                                "text": "async",
                                "rawText": "async",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "await",
                                "rawText": "await",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 34
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 34,
                            "period": {
                                "kind": 254,
                                "pos": 28,
                                "end": 29
                            }
                        },
                        "expression": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 38
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 39
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 39
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 39
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
