# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var e = (await, f);
## Input

`````js
'use strict'; var e = (await, f);
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; var e = (await, f);",
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
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 19
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65590,
                                "expressions": [
                                    {
                                        "kind": 196712,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 28
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 32
                        },
                        "flags": 17,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 32
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 32
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 33
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

