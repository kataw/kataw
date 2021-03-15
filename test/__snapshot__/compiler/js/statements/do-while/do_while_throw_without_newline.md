# Kataw parser test case

## Input

`````js
do throw function (v, h) {
  "use strict"
} while ((""))
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do throw function (v, h) {\n  \"use strict\"\n} while ((\"\"))",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 51,
                "end": 55
            },
            "statement": {
                "kind": 2097373,
                "expression": {
                    "kind": 8456285,
                    "name": null,
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 19,
                                    "end": 20
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
                                "start": 19,
                                "end": 20
                            },
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "h",
                                    "rawText": "h",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 21,
                                    "end": 23
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
                                "start": 21,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 24
                    },
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
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 41
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 41
                                }
                            ],
                            "multiline": true,
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 41
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 43
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 43
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 43
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 44,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

