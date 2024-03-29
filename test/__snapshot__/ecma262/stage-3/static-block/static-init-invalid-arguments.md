# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (class { [argument\u0073]() {} });
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
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
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
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "name": null,
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
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "arguments",
                                                                                "rawText": "argument\\u0073",
                                                                                "flags": 16480,
                                                                                "transformFlags": 0,
                                                                                "start": 35,
                                                                                "end": 49
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 33,
                                                                            "end": 50
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 51,
                                                                            "end": 52
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 54,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 52,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 50,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 0,
                                                                    "start": 33,
                                                                    "end": 55
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 55
                                                        },
                                                        "flags": 31,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 57
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 57
                                                },
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 20,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 59
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 63
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 63
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 63
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (class { [argument\\u0073]() {} });\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
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

