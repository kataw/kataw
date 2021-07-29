# Kataw parser test case

## Input

`````js
class C {
  #field;

  static method() {
    #field in yield;
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
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 18
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 29
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 38
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
                                                        "text": "#field",
                                                        "rawText": "#field",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 51
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 8192,
                                                        "start": 51,
                                                        "end": 54
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 54,
                                                        "end": 60
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 40,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 40,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 68
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 68
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 68
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 68
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 70
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "class C {\n  #field;\n\n  static method() {\n    #field in yield;\n     }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

class C {
    #field
    ;
    static method() {
        #field in yield;
    }
}

```

### Diagnostics

```javascript
✔ No errors
```

