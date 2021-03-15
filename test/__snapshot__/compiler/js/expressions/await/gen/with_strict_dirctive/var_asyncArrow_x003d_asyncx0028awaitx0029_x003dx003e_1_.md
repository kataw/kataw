# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
'use strict'; var asyncArrow = async(await) => 1;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; var asyncArrow = async(await) => 1;",
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
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 28
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 81936,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 42
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
                                        "start": 37,
                                        "end": 43
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 43
                            },
                            "contents": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 1073741824,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 48
                        },
                        "flags": 17,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 48
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 48
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 49
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
    "end": 49
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

