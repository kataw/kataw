# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (function await(await) {});
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
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 34
                                                    },
                                                    "asteriskToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 40
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 46
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 50
                                                },
                                                "flags": 20,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 51
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 20,
                                            "end": 52
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 52
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 56
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 56
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (function await(await) {});\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Await expression cannot be used inside class static block. - start: 41, end: 46

```

