# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
'use strict'; x = class extends (a ? null : yield) { }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; x = class extends (a ? null : yield) { }",
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
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "operator": "=",
                "right": {
                    "kind": 66099,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 52,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 65592,
                                "shortCircuit": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 34
                                },
                                "consequent": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 41
                                },
                                "alternate": {
                                    "kind": 196712,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 49
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 49
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 50
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 50
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 52,
                        "end": 54
                    },
                    "decorators": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 17,
                    "end": 54
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 54
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 54
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
    "end": 54
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

