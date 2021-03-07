# Kataw parser test case

## Input

`````js
var v = (a): => {

};

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var v = (a): => {\n\n};\n",
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
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 10
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
                                            "start": 7,
                                            "end": 12
                                        }
                                    ],
                                    "type": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196712,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 12
                                        },
                                        "typeArguments": null,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 12
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 20
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 20
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 21
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 13,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

