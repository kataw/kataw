# Kataw parser test case

## Input

`````js
({foo(){ return }})
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({foo(){ return }})",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 16844946,
                                    "name": {
                                        "kind": 196711,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 2097346,
                                                    "expression": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 15
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 17
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 17
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 18
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

