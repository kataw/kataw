# Kataw parser test case

## Input

`````js
result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = [ xCls = class x {}, cls = class {}, xCls2 = class { static name() {} } ] = vals;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "result",
                    "rawText": "result",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 98822,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "xCls",
                                        "rawText": "xCls",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 15
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 66099,
                                        "name": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "implementClauses": null,
                                        "members": {
                                            "kind": 50,
                                            "elements": [],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 17,
                                        "end": 28
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 28
                                },
                                {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "cls",
                                        "rawText": "cls",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 33
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 66099,
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "implementClauses": null,
                                        "members": {
                                            "kind": 50,
                                            "elements": [],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 35,
                                        "end": 44
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 44
                                },
                                {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "xCls2",
                                        "rawText": "xCls2",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 51
                                    },
                                    "operator": "=",
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
                                                    "kind": 49,
                                                    "isStatic": true,
                                                    "isAbstract": false,
                                                    "isReadOnly": false,
                                                    "isOptional": false,
                                                    "method": {
                                                        "kind": 16844946,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "name",
                                                            "rawText": "name",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 68,
                                                            "end": 73
                                                        },
                                                        "formalParameters": {
                                                            "kind": 90,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 75
                                                        },
                                                        "isSetter": false,
                                                        "isGetter": false,
                                                        "contents": {
                                                            "kind": 91,
                                                            "functionStatementList": {
                                                                "kind": 94,
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 77,
                                                                "end": 77
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 75,
                                                            "end": 78
                                                        },
                                                        "decorators": null,
                                                        "type": null,
                                                        "accessModifier": null,
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 73,
                                                        "end": 78
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 61,
                                                    "end": 78
                                                }
                                            ],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 61,
                                            "end": 80
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 53,
                                        "end": 80
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 80
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 82
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 89
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 89
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 89
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 90
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
    "end": 90
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

