# Kataw parser test case

## Input

`````js
class x extends y { constructor(x = this) { super[dad]; } }
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
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 4276321,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 40
                                            },
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2082,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 41
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 49
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "dad",
                                                        "rawText": "dad",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 53
                                                    },
                                                    "flags": 536870944,
                                                    "transformFlags": 4,
                                                    "start": 43,
                                                    "end": 54
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 55
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 55
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 57
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 57
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
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
    "source": "class x extends y { constructor(x = this) { super[dad]; } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

class x  extends y {
  constructor(x = this ) {
    super [dad];
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

