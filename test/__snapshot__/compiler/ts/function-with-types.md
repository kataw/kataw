# Kataw parser test case

## Input

`````js
function message(name:string):string {
    return name;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function message(name:string):string {\n    return name;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "message",
                "rawText": "message",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "name",
                            "rawText": "name",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 17,
                            "end": 21
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 22,
                            "end": 28
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 17,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 29
            },
            "type": {
                "kind": 4202702,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 30,
                "end": 36
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 196712,
                                "text": "name",
                                "rawText": "name",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 54
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 55
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 55
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 36,
                "end": 57
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

