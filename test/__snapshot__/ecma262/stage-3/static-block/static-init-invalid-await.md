# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
async function f() {
  class C {
    static {
      await 0;
    }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 28
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
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
                                                "start": 32,
                                                "end": 43
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 65,
                                                                    "transformFlags": 0,
                                                                    "start": 45,
                                                                    "end": 57
                                                                },
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 57,
                                                                    "end": 59
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 45,
                                                                "end": 59
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 45,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 0,
                                                "end": 66
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 66
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 66
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 70
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 70
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 72
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  class C {\n    static {\n      await 0;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
async function f() {
  class C {

  }
}
```

### Diagnostics

```javascript
✔ No errors
```

