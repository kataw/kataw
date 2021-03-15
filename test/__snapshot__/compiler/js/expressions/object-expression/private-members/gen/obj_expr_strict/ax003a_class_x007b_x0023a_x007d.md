# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/object-expression/private-members/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\object-expression\private-members\gen\obj_expr_strict
> :: test: obj_expr_strict
> :: case: a: class { #a }
## Input

`````js
'use strict'; ({ a: class { #a } });
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; ({ a: class { #a } });",
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
                "kind": 66224,
                "expression": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65721,
                                "left": {
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 66099,
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "implementClauses": null,
                                    "members": {
                                        "kind": 50,
                                        "elements": [
                                            {
                                                "kind": 16468,
                                                "key": {
                                                    "kind": 131252,
                                                    "text": "#a",
                                                    "rawText": "#a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 524288,
                                                    "start": 27,
                                                    "end": 30
                                                },
                                                "isInKeyword": false,
                                                "expression": null,
                                                "isAbstract": false,
                                                "isReadOnly": false,
                                                "isOptional": false,
                                                "exclamation": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isStatic": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 524352,
                                                "start": 27,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 19,
                                    "end": 32
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 32
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 35
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 36
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
    "end": 36
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

