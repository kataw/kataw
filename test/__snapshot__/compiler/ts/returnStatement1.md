# Kataw parser test case

## Input

`````js

function f() {
    return function (s) {
        var x = s;
    };
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nfunction f() {\n    return function (s) {\n        var x = s;\n    };\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097346,
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
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 37,
                                                "end": 38
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
                                            "start": 37,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
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
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 53,
                                                                "end": 55
                                                            },
                                                            "exclamation": false,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 196712,
                                                                "text": "s",
                                                                "rawText": "s",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "flags": 53,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 0,
                                                            "end": 59
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 59
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 60
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 60
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 66
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 66
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 67
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 67
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 69
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 69
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

