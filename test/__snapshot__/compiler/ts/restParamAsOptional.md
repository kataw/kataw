# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function f(...x?) { }
function f2(...x = []) { }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function f(...x?) { }\nfunction f2(...x = []) { }",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 15
                        },
                        "isOptional": true,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 11,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 17
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 21
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f2",
                "rawText": "f2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 30,
                "end": 33
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 37,
                            "end": 38
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 42
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 43
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 34,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 44
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 46
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 44,
                "end": 48
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 21,
            "end": 48
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

