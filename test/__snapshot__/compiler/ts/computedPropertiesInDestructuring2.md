# Kataw parser test case

## Input

`````js
let foo2 = () => "bar";
let {[foo2()]: bar3} = {};
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let foo2 = () => \"bar\";\nlet {[foo2()]: bar3} = {};",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "foo2",
                                "rawText": "foo2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 8
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 10
                                },
                                "contents": {
                                    "kind": 4261583,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 22
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 22
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 22
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 23
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
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "foo2",
                                                        "rawText": "foo2",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 34
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 131073,
                                                "start": 29,
                                                "end": 37
                                            },
                                            "value": {
                                                "kind": 134217756,
                                                "ellipsis": false,
                                                "left": {
                                                    "kind": 131102,
                                                    "text": "bar3",
                                                    "rawText": "bar3",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 38,
                                                    "end": 43
                                                },
                                                "right": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 38,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 29,
                                            "end": 43
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 29,
                                    "end": 43
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 44
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
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 49
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 49
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 23,
                "end": 50
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 50
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

