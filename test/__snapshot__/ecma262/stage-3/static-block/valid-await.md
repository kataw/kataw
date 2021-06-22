# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (() => { var await; });
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
                "text": "C",
                "rawText": "C",
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
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 28,
                                                        "end": 31
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 155,
                                                                    "declareKeyword": null,
                                                                    "varKeyword": {
                                                                        "kind": 37757002,
                                                                        "flags": 80,
                                                                        "start": 33,
                                                                        "end": 37
                                                                    },
                                                                    "declarationList": {
                                                                        "kind": 156,
                                                                        "declarations": [
                                                                            {
                                                                                "kind": 157,
                                                                                "binding": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 96,
                                                                                    "start": 37,
                                                                                    "end": 43
                                                                                },
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "flags": 16,
                                                                                "start": 37,
                                                                                "end": 43
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "start": 37,
                                                                        "end": 43
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 33,
                                                                    "end": 44
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 33,
                                                            "end": 44
                                                        },
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 48
                                },
                                "flags": 9,
                                "start": 0,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 52
                },
                "flags": 7,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (() => { var await; });\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

class C {

}
```

### Diagnostics

```javascript
✔ No errors
```

