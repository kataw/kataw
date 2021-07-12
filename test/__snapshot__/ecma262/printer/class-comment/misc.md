# Kataw parser test case

## Input

`````js
class x {
  focus() // comment 1
  {
    // comment 2
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "focus",
                                    "rawText": "focus",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 19
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 57
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 57
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 57
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "class x {\n  focus() // comment 1\n  {\n    // comment 2\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
class x {
  focus() // comment 2{}
}
```

### Diagnostics

```javascript
✔ No errors
```

