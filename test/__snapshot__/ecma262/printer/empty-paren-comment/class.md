# Kataw parser test case

## Input

`````js
class x {
  /**
  * Set of default settings to be applied to model fetch calls in DAO layer.
  */
  static get defaultSettings() {
  }
}
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 106
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 106,
                                "end": 110
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "defaultSettings",
                                    "rawText": "defaultSettings",
                                    "flags": 96,
                                    "start": 110,
                                    "end": 126
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 127,
                                    "end": 128
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "start": 130,
                                        "end": 130
                                    },
                                    "flags": 32,
                                    "start": 128,
                                    "end": 134
                                },
                                "flags": 1024,
                                "start": 126,
                                "end": 134
                            },
                            "flags": 1024,
                            "start": 106,
                            "end": 134
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 134
                },
                "flags": 7,
                "start": 32,
                "end": 136
            },
            "flags": 16,
            "start": 0,
            "end": 136
        }
    ],
    "isModule": false,
    "source": "class x {\n  /**\n  * Set of default settings to be applied to model fetch calls in DAO layer.\n  */\n  static get defaultSettings() {\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 136
}
```

### Printed

```javascript

class x {
   /**
  * Set of default settings to be applied to model fetch calls in DAO layer.
  */
  static get defaultSettings() {
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

