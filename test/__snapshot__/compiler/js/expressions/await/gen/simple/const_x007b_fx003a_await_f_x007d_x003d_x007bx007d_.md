# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: const { f: await f } = {};
## Input

`````js
const { f: await f } = {};
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const { f: await f } = {};",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
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
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "value": {
                                                "kind": 134217756,
                                                "ellipsis": false,
                                                "left": {
                                                    "kind": 131102,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 10,
                                                    "end": 16
                                                },
                                                "right": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 7,
                                            "end": 16
                                        },
                                        {
                                            "kind": 203,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 16,
                                            "end": 18
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 7,
                                    "end": 18
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 20
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 25
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 25
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 26
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 17,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

