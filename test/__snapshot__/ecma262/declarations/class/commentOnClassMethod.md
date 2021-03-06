# Kataw parser test case

## Input

`````js
class WebControls {
    /**
     * Render a control
     */
    createControl(): any {
    }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "WebControls",
                "rawText": "WebControls",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 17
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "createControl",
                                    "rawText": "createControl",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 79
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234252,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 84
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 80,
                                    "end": 84
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 86
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 92
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 92
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 92
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 92
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 32,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "class WebControls {\n    /**\n     * Render a control\n     */\n    createControl(): any {\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
class WebControls {
  /**
     * Render a control
     */ createControl(): any {}
}
```

### Diagnostics

```javascript
✔ No errors
```

