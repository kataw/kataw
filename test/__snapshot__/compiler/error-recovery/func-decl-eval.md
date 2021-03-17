# Kataw parser test case

## Input

`````js
function eval(a) { "use strict"; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function eval(a) { \"use strict\"; }",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "eval",
                "rawText": "eval",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 15
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261583,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 32
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 34
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 34
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
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

