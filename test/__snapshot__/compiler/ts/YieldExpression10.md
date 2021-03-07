# Kataw parser test case

## Input

`````js
var v = { * foo() {
    yield(foo);
  }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var v = { * foo() {\n    yield(foo);\n  }\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "v",
                                "rawText": "v",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 17303650,
                                            "name": {
                                                "kind": 196711,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65785,
                                                                "delegate": false,
                                                                "expression": {
                                                                    "kind": 66224,
                                                                    "expression": {
                                                                        "kind": 196712,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 30,
                                                                        "end": 33
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 34
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 16393,
                                                                "start": 19,
                                                                "end": 34
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 35
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 35
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 39
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 15,
                                            "end": 39
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 39
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 41
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 41
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
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
    "diagnostics": [],
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

