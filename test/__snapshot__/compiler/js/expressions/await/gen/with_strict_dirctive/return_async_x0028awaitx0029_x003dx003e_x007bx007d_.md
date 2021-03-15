# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: return async (await) => {};
## Input

`````js
'use strict'; return async (await) => {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; return async (await) => {};",
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
            "kind": 2097346,
            "expression": {
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
                                "start": 28,
                                "end": 33
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
                            "start": 28,
                            "end": 34
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
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
                        "statements": [],
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
                "flags": 1073741824,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 40
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 41
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

