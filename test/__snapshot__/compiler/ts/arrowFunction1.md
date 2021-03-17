# Kataw parser test case

## Input

`````js
var v = (a: ) => {

};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var v = (a: ) => {\n\n};",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "v",
                            "rawText": "v",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 83976,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 81929,
                                "elements": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196712,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "typeArguments": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 7,
                                        "end": 11
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 21
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
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

