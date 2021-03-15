# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div id="@{x590d}@@{x6742}@@{x7ed3}@@{x6784}@">xxx{function(){return <div id={aaa}>111</div>}}xxx{222}</div>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<div id=\"@{x590d}@@{x6742}@@{x7ed3}@@{x6784}@\">xxx{function(){return <div id={aaa}>111</div>}}xxx{222}</div>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66175,
                "openingElement": {
                    "kind": 4228,
                    "tagName": {
                        "kind": 129,
                        "text": "div",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 4
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [
                            {
                                "kind": 122,
                                "name": {
                                    "kind": 129,
                                    "text": "id",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 4,
                                    "end": 7
                                },
                                "initializer": {
                                    "kind": 4261583,
                                    "text": "@{x590d}@@{x6742}@@{x7ed3}@@{x6784}@",
                                    "rawText": "@{x590d}@@{x6742}@@{x7ed3}@@{x6784}@",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 4,
                                "end": 14
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 4,
                        "end": 14
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 15
                },
                "children": {
                    "kind": 124,
                    "children": [
                        {
                            "kind": 137,
                            "text": "xxx",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "start": 15,
                            "end": 18
                        },
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 29
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 66175,
                                                    "openingElement": {
                                                        "kind": 4228,
                                                        "tagName": {
                                                            "kind": 129,
                                                            "text": "div",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 38,
                                                            "end": 41
                                                        },
                                                        "attributes": {
                                                            "kind": 123,
                                                            "attributesList": [
                                                                {
                                                                    "kind": 122,
                                                                    "name": {
                                                                        "kind": 129,
                                                                        "text": "id",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 8192,
                                                                        "start": 41,
                                                                        "end": 44
                                                                    },
                                                                    "initializer": {
                                                                        "kind": 130,
                                                                        "ellipsis": false,
                                                                        "expression": {
                                                                            "kind": 196712,
                                                                            "text": "aaa",
                                                                            "rawText": "aaa",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 46,
                                                                            "end": 49
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 8192,
                                                                        "start": 45,
                                                                        "end": 50
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 8192,
                                                                    "start": 41,
                                                                    "end": 50
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 41,
                                                            "end": 50
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 36,
                                                        "end": 51
                                                    },
                                                    "children": {
                                                        "kind": 124,
                                                        "children": [
                                                            {
                                                                "kind": 137,
                                                                "text": "111",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "parent": null,
                                                                "start": 51,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 51,
                                                        "end": 54
                                                    },
                                                    "closingElement": {
                                                        "kind": 4221,
                                                        "tagName": {
                                                            "kind": 129,
                                                            "text": "div",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 56,
                                                            "end": 59
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 54,
                                                        "end": 60
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "start": 36,
                                                    "end": 60
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 60
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 60
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 61
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 61
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 18,
                            "end": 62
                        },
                        {
                            "kind": 137,
                            "text": "xxx",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "start": 62,
                            "end": 65
                        },
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 4261540,
                                "text": 222,
                                "rawText": "222",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 69
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 65,
                            "end": 70
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 15,
                    "end": 70
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "div",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 72,
                        "end": 75
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 70,
                    "end": 76
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 76
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

