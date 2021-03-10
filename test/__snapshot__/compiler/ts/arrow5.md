# Kataw parser test case

## Input

`````js
(private public: foo, protected: bar): string =>x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(private public: foo, protected: bar): string =>x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67592,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 65545,
                        "elements": [
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "protected",
                                    "rawText": "protected",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 31
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 36
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 32,
                                    "end": 37
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 20,
                                "end": 36
                            },
                            {
                                "kind": 89,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "public",
                                    "rawText": "public",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 8,
                                    "end": 15
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 16,
                                    "end": 21
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": {
                                    "kind": 4194485,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1,
                                    "end": 8
                                },
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097153,
                                "start": 1,
                                "end": 20
                            }
                        ],
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 45
                        },
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 36
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 49
                    },
                    "flags": 536870912,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 49
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 49
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 49
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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
