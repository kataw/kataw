# Kataw parser test case

## Input

`````js
class C {
  #a;

  constructor() {
    #b in {};
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
                "text": "C",
                "rawText": "C",
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#a",
                                "rawText": "#a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 14
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
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
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
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
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67191035,
                                                        "text": "#b",
                                                        "rawText": "#b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 41
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 44
                                                    },
                                                    "right": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 46
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 34,
                                                    "end": 47
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 34,
                                                "end": 48
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 52
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 52
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 52
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "class C {\n  #a;\n\n  constructor() {\n    #b in {};\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
class C {
  #a;;
  constructor() {
    #b in {};
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

