# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: foo const
## Input

`````js
foo const class foo const { field: foo const}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo const class foo const { field: foo const}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 3,
            "end": 9
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 15,
                "end": 19
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 9
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 41,
            "symbol": null,
            "transformFlags": 1,
            "start": 9,
            "end": 19
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 196711,
                                            "text": "field",
                                            "rawText": "field",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 34
                                        },
                                        "value": {
                                            "kind": 131102,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 27,
                                        "end": 38
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 1,
                                "symbol": null,
                                "start": 27,
                                "end": 38
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 25,
                            "end": 38
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 38
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 38
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 19,
            "end": 38
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 44
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 38,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 44,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

