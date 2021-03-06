# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let { f: ...await f } = {};
## Input

`````js
'use strict'; let { f: ...await f } = {};
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; let { f: ...await f } = {};",
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
                "kind": 142,
                "isConst": false,
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
                                                "start": 19,
                                                "end": 22
                                            },
                                            "value": {
                                                "kind": 134217756,
                                                "ellipsis": true,
                                                "left": {
                                                    "kind": 131102,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                "right": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 4097,
                                                "start": 22,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 19,
                                            "end": 31
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
                                                "start": 31,
                                                "end": 33
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1024,
                                            "start": 31,
                                            "end": 33
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 19,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 17,
                                "end": 35
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
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 40
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 40
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 13,
                "end": 41
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 41
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 32,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

