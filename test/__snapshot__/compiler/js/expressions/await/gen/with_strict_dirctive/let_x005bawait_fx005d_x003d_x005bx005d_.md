# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let [await f] = [];
## Input

`````js
'use strict'; let [await f] = [];
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; let [await f] = [];",
    "filename": "",
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
                        "kind": 16525,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 19,
                                        "end": 24
                                    },
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 27
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 32
            },
            "flags": 8,
            "intersects": false,
            "transformFlags": 769,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 25,
            "length": 0
        }
    ],
    "intersects": false,
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

